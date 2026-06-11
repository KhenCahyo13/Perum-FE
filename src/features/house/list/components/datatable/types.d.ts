import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import type { ApiPagination } from '@/types/api';
import type { HouseList } from '@/types/house';

export interface HouseListDataTableProps {
    onSelectHouse: (id: string) => void;
}

export interface HouseListDataTableViewProps {
    filtersContent: ReactNode;
    isError: boolean;
    isLoading: boolean;
    onRowClick: (id: string) => void;
    pagination: ApiPagination | undefined;
    refetch: () => void;
    table: Table<HouseList>;
}
