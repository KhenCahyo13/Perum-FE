import axios, { type AxiosError, type AxiosInstance } from 'axios';

import { useAuthStore } from '@/stores/auth-store';

import { env } from './env';

export const publicApi: AxiosInstance = axios.create({
    baseURL: env.apiBaseUrl,
});

export const authenticatedApi: AxiosInstance = axios.create({
    baseURL: env.apiBaseUrl,
});

authenticatedApi.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState();

    if (token?.token) {
        config.headers = config.headers ?? {};
        (config.headers as Record<string, string>).Authorization =
            `Bearer ${token.token}`;
    }

    return config;
});

authenticatedApi.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const status = error.response?.status;

        if (status === 401) {
            useAuthStore.getState().clearAuth();
        }

        return Promise.reject(error);
    }
);
