import type { LoginFormValues } from '@/features/login/types';
import { authenticatedApi, publicApi } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { AuthToken, AuthUser } from '@/types/auth';

export const login = async (
    payload: LoginFormValues
): Promise<ApiResponse<AuthUser, AuthToken>> => {
    const { data } = await publicApi.post('/auth/login', payload);

    return data as ApiResponse<AuthUser, AuthToken>;
};

export const logout = async (): Promise<void> => {
    await authenticatedApi.post('/auth/logout');
};
