import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import {
    APIResponse,
    ContactFormInput,
    SubmitResponse
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
    const [responseData, setResponseData] = useState<SubmitResponse>();
    const [error, setError] = useState<SubmitResponse | string>('');

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
                const responseData = await response.json() as SubmitResponse;
                setResponseData(responseData);
                // reset form data for next requests
            } else {
                const errorResponse = await response.json() as SubmitResponse;
                setError(errorResponse);
            }
        } catch (error) {
            console.error('Error:', error);
            setError(`An error occurred. ${(error as Error).message}`);
        } finally {
            setIsLoading(false);
        }

    };

    return {
        submitForm,
        isLoading,
        responseData,
        error
    }
}