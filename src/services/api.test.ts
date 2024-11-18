import { renderHook, act } from '@testing-library/react';
import { useCarouselData, useSubmitContactUsForm } from './api';
import { APIResponse, SubmitResponse, ContactFormInput } from './types';
import { API_URL } from '../constants';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const mockCarouselData: APIResponse = {
  Details: [
    { ImageUrl: 'https://example.com/image1.jpg', Title: 'Title 1', Subtitle: 'Subtitle 1' },
    { ImageUrl: 'https://example.com/image2.jpg', Title: 'Title 2', Subtitle: 'Subtitle 2' },
  ],
};

const mockSubmitResponse: SubmitResponse = {
  Status: 'Success',
  Errors: [],
};

// Mock server handlers
const handlers = [
  // Mock handler for carousel data
  http.get(`${API_URL}/home/banner-details`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockCarouselData)
  }),

  // Mock handler for contact form submission
  http.post(`${API_URL}/contact-us/submit`, ({ request, params, cookies }) => {
    const body = request.body;
    return  HttpResponse.json(body);
  }),
];

// Setup Mock Service Worker
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useCarouselData', () => {
  it('fetches and sets carousel data on mount', async () => {
    const { result } = renderHook(() => useCarouselData());

    expect(result.current.isLoading).toBe(true);

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockCarouselData);
    expect(result.current.error).toBe(null);
  });

  it('handles API error for carousel data', async () => {
    server.use(
      http.get(`${API_URL}/home/banner-details`, ({ request, params, cookies }) => {
        return HttpResponse.json({
            message: 'Internal Server Error'
        },
        {
            status: 500,
            statusText: 'Internal Server Error'
        })
      })
    );

    const { result } = renderHook(() => useCarouselData());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe('Network response not ok');
  });
});

describe('useSubmitContactUsForm', () => {
  const validFormData: ContactFormInput = {
    FullName: 'John Doe',
    EmailAddress: 'john@example.com',
    PhoneNumbers: ['1234567890'],
    Message: 'Hello!',
    bIncludeAddressDetails: true,
    AddressDetails: {
      AddressLine1: '123 Street',
      AddressLine2: 'Apt 4',
      CityTown: 'City',
      StateCounty: 'State',
      Postcode: '12345',
      Country: 'Country',
    },
  };

  it('submits contact form successfully', async () => {
    const { result } = renderHook(() => useSubmitContactUsForm(validFormData));

    await act(async () => {
      await result.current.submitForm(validFormData);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toEqual(mockSubmitResponse);
    expect(result.current.error).toBe('');
  });

  it('handles API error on form submission', async () => {
    const invalidFormData = { ...validFormData, EmailAddress: '' };

    const { result } = renderHook(() => useSubmitContactUsForm(invalidFormData));

    await act(async () => {
      await result.current.submitForm(invalidFormData);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toBeUndefined();
    expect(result.current.error).toEqual({
      Status: 'Error',
      Errors: [{ FieldName: 'EmailAddress', MessageCode: 'Required' }],
    });
  });

  it('handles network error on form submission', async () => {
    server.use(
      http.post(`${API_URL}/contact-us/submit`, ({ request, params, cookies }) => {
        return HttpResponse.json({
            message: 'Internal Server Error'
        },
        {
            status: 500,
            statusText: 'Internal Server Error'
        })
      })
    );

    const { result } = renderHook(() => useSubmitContactUsForm(validFormData));

    await act(async () => {
      await result.current.submitForm(validFormData);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.responseData).toBeUndefined();
    expect(result.current.error).toContain('An error occurred.');
  });
});
