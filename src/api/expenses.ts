import type { CreateExpenseFormValues } from '@/features/expense/create/types';
import type { UpdateExpenseFormValues } from '@/features/expense/update/types';
import { authenticatedApi } from '@/lib/axios';
import type { ApiPagination, ApiResponse } from '@/types/api';
import type { ExpenseDetail, ExpenseList, ExpenseStats } from '@/types/expense';

const EXPENSE_API_URL = '/expenses';

export interface FetchExpensesParams {
    categoryId?: string;
    isRecurring?: boolean;
    limit?: number;
    month?: string;
    page?: number;
    search?: string;
}

export const fetchExpenses = async (
    params?: FetchExpensesParams
): Promise<ApiResponse<ExpenseList[], ApiPagination>> => {
    const { data } = await authenticatedApi.get(EXPENSE_API_URL, { params });

    return data as ApiResponse<ExpenseList[], ApiPagination>;
};

export const fetchExpenseById = async (
    id: string
): Promise<ApiResponse<ExpenseDetail>> => {
    const { data } = await authenticatedApi.get(`${EXPENSE_API_URL}/${id}`);

    return data as ApiResponse<ExpenseDetail>;
};

export const fetchExpenseStats = async (): Promise<
    ApiResponse<ExpenseStats>
> => {
    const { data } = await authenticatedApi.get(`${EXPENSE_API_URL}/stats`);

    return data as ApiResponse<ExpenseStats>;
};

export const createExpense = async (
    payload: CreateExpenseFormValues
): Promise<ApiResponse<ExpenseList>> => {
    const { data } = await authenticatedApi.post(EXPENSE_API_URL, payload);

    return data as ApiResponse<ExpenseList>;
};

export const updateExpense = async (
    id: string,
    payload: UpdateExpenseFormValues
): Promise<ApiResponse<ExpenseList>> => {
    const { data } = await authenticatedApi.patch(
        `${EXPENSE_API_URL}/${id}`,
        payload
    );

    return data as ApiResponse<ExpenseList>;
};

export const deleteExpense = async (id: string): Promise<void> => {
    await authenticatedApi.delete(`${EXPENSE_API_URL}/${id}`);
};
