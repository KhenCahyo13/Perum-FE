import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import type { ApiPagination } from '@/types/api';
import type { BillList } from '@/types/bill';

export interface BillListDataTableProps {
    onAddClick: () => void;
    onSelectBill: (id: string) => void;
}

export interface BillListDataTableViewProps {
    filtersContent: ReactNode;
    isError: boolean;
    isLoading: boolean;
    onAddClick: () => void;
    onRowClick: (id: string) => void;
    pagination: ApiPagination | undefined;
    refetch: () => void;
    table: Table<BillList>;
}
