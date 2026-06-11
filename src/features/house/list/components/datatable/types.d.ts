import type { Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import type { ApiPagination } from '@/types/api';
import type { HouseList } from '@/types/house';

export interface HouseListDataTableViewProps {
    filtersContent: ReactNode;
    isError: boolean;
    isLoading: boolean;
    pagination: ApiPagination | undefined;
    refetch: () => void;
    table: Table<HouseList>;
}
