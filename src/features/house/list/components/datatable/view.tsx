import type { Row } from '@tanstack/react-table';
import type { FC } from 'react';

import {
    DataTable,
    DataTableBody,
    DataTableHeader,
    DataTablePagination,
} from '@/components/datatable';
import type { HouseList } from '@/types/house';

import type { HouseListDataTableViewProps } from './types';

const HouseListDataTableView: FC<HouseListDataTableViewProps> = ({
    filtersContent,
    isError,
    isLoading,
    onRowClick,
    pagination,
    refetch,
    table,
}) => (
    <DataTable>
        <DataTableHeader
            filtersContent={filtersContent}
            searchPlaceholder="Cari nomor rumah atau alamat..."
        />
        <DataTableBody
            fallbackMessage="Tidak ada data rumah."
            isError={isError}
            isLoading={isLoading}
            onRowClick={(row: Row<HouseList>) => onRowClick(row.original.id)}
            refetchData={refetch}
            table={table}
        />
        <DataTablePagination pagination={pagination} />
    </DataTable>
);

export default HouseListDataTableView;
