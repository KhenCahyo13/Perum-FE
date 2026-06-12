import type { CreateBillFormValues } from '@/features/bill/create/types';
import type { CreatePaymentFormValues } from '@/features/bill/detail/types';
import { authenticatedApi } from '@/lib/axios';
import type { ApiPagination, ApiResponse } from '@/types/api';
import type {
    BillDetail,
    BillList,
    BillStats,
    BillStatusRaw,
} from '@/types/bill';

const BILL_API_URL = '/bills';

export interface FetchBillsParams {
    billingMonth?: string;
    houseId?: string;
    limit?: number;
    page?: number;
    search?: string;
    status?: BillStatusRaw;
}

export const fetchBills = async (
    params?: FetchBillsParams
): Promise<ApiResponse<BillList[], ApiPagination>> => {
    const { data } = await authenticatedApi.get(BILL_API_URL, { params });

    return data as ApiResponse<BillList[], ApiPagination>;
};

export const fetchBillById = async (
    id: string
): Promise<ApiResponse<BillDetail>> => {
    const { data } = await authenticatedApi.get(`${BILL_API_URL}/${id}`);

    return data as ApiResponse<BillDetail>;
};

export const createBill = async (
    payload: CreateBillFormValues
): Promise<ApiResponse<BillList>> => {
    const { data } = await authenticatedApi.post(BILL_API_URL, payload);

    return data as ApiResponse<BillList>;
};

export const deleteBill = async (id: string): Promise<void> => {
    await authenticatedApi.delete(`${BILL_API_URL}/${id}`);
};

export const createPayment = async (
    payload: CreatePaymentFormValues
): Promise<ApiResponse<unknown>> => {
    const { data } = await authenticatedApi.post('/payments', payload);

    return data as ApiResponse<unknown>;
};

export const deletePayment = async (id: string): Promise<void> => {
    await authenticatedApi.delete(`/payments/${id}`);
};

export const fetchBillStats = async (): Promise<ApiResponse<BillStats>> => {
    const { data } = await authenticatedApi.get(`${BILL_API_URL}/stats`);

    return data as ApiResponse<BillStats>;
};
