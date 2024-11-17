import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import {
    APIResponse,
    ContactFormInput,
    ErrorResponse
} from './types';

/*
    Create custom hooks to fetch/get or submit/post data
*/

export const useCarouselData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<APIResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchCarouselData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/home/banner-details`);
            if (!response.ok) {
                throw new Error('Network response not ok');
            }
            const jsonData = await response.json();

            setData(jsonData);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Avoid memory leaks by setting isActive = true
        let isActive = true;

        const fetchData = async () => {
            if (isActive) {
                await fetchCarouselData();
            }
        };
        fetchData().catch(console.error);

        return () => {
            isActive = false;
        };

    }, []);

    return {
        isLoading,
        data,
        error
    }
}

export const useSubmitContactUsForm = (formData: ContactFormInput) => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState<any>();
    const [error, setError] = useState<ErrorResponse | string>('');

    const submitForm = async (formData: ContactFormInput) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/contact-us/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setResponseData('Your message has been sent successfully!');
                // reset form data for next requests
            } else {
                const errorResponse = await response.json() as ErrorResponse;
                setError(errorResponse);
            }
        } catch (error) {
            console.error('Error:', error);
            setError(`An error occurred. ${(error as Error).message}`);
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        // Avoid memory leaks by setting isActive = true
        let isActive = true;

        const fetchData = async () => {
            if (isActive) {
                await submitForm(formData);
            }
        };
        fetchData().catch(console.error);

        return () => {
            isActive = false;
        };
    }, [formData]);


    return {
        isLoading,
        responseData,
        error
    }
}
