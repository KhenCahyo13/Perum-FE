import { authenticatedApi } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';

export interface FeeType {
    amount: number;
    id: string;
    name: string;
}

export const fetchFeeTypes = async (): Promise<ApiResponse<FeeType[]>> => {
    const { data } = await authenticatedApi.get('/fee-types');

    return data as ApiResponse<FeeType[]>;
};
