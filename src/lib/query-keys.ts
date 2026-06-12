import type { FetchBillsParams } from '@/api/bills';
import type { FetchExpensesParams } from '@/api/expenses';
import type { FetchHousesParams } from '@/api/houses';
import type { FetchResidentsParams } from '@/api/residents';

export const queryKeys = {
    bills: {
        all: ['bills'] as const,
        detail: (id: string) => [...queryKeys.bills.all, 'detail', id] as const,
        list: (params?: FetchBillsParams) =>
            [...queryKeys.bills.all, 'list', params] as const,
        stats: () => [...queryKeys.bills.all, 'stats'] as const,
    },
    dashboard: {
        all: ['dashboard'] as const,
        summary: () => [...queryKeys.dashboard.all, 'summary'] as const,
    },
    expenseCategories: {
        all: ['expense-categories'] as const,
        list: () => [...queryKeys.expenseCategories.all, 'list'] as const,
    },
    expenses: {
        all: ['expenses'] as const,
        detail: (id: string) =>
            [...queryKeys.expenses.all, 'detail', id] as const,
        list: (params?: FetchExpensesParams) =>
            [...queryKeys.expenses.all, 'list', params] as const,
        stats: () => [...queryKeys.expenses.all, 'stats'] as const,
    },
    feeTypes: {
        all: ['fee-types'] as const,
        list: () => [...queryKeys.feeTypes.all, 'list'] as const,
    },
    houses: {
        all: ['houses'] as const,
        detail: (id: string) =>
            [...queryKeys.houses.all, 'detail', id] as const,
        list: (params?: FetchHousesParams) =>
            [...queryKeys.houses.all, 'list', params] as const,
        stats: () => [...queryKeys.houses.all, 'stats'] as const,
    },
    residents: {
        all: ['residents'] as const,
        detail: (id: string) =>
            [...queryKeys.residents.all, 'detail', id] as const,
        list: (params?: FetchResidentsParams) =>
            [...queryKeys.residents.all, 'list', params] as const,
        stats: () => [...queryKeys.residents.all, 'stats'] as const,
    },
};
