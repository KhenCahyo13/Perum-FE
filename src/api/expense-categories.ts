import { authenticatedApi } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';

export interface ExpenseCategory {
    id: string;
    name: string;
}

export const fetchExpenseCategories = async (): Promise<
    ApiResponse<ExpenseCategory[]>
> => {
    const { data } = await authenticatedApi.get('/expense-categories');

    return data as ApiResponse<ExpenseCategory[]>;
};
