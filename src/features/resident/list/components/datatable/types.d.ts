import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import type { ApiPagination } from '@/types/api';
import type { ResidentList } from '@/types/resident';

export interface ResidentListDataTableProps {
    onSelectResident: (id: string) => void;
}

export interface ResidentListDataTableViewProps {
    filtersContent: ReactNode;
    isError: boolean;
    isLoading: boolean;
    onRowClick: (id: string) => void;
    pagination: ApiPagination | undefined;
    refetch: () => void;
    table: Table<ResidentList>;
}
