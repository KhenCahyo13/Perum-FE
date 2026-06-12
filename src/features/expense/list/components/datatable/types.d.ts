import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import type { ApiPagination } from '@/types/api';
import type { ExpenseList } from '@/types/expense';

export interface ExpenseListDataTableProps {
    onAddClick: () => void;
    onSelectExpense: (id: string) => void;
}

export interface ExpenseListDataTableViewProps {
    filtersContent: ReactNode;
    isError: boolean;
    isLoading: boolean;
    onAddClick: () => void;
    onRowClick: (id: string) => void;
    pagination: ApiPagination | undefined;
    refetch: () => void;
    table: Table<ExpenseList>;
}
