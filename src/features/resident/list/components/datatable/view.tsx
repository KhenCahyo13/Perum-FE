import type { Row } from '@tanstack/react-table';

import {
    DataTable,
    DataTableBody,
    DataTableHeader,
    DataTablePagination,
} from '@/components/datatable';
import type { ResidentList } from '@/types/resident';

import type { ResidentListDataTableViewProps } from './types';

const ResidentListDataTableView = ({
    filtersContent,
    isError,
    isLoading,
    onRowClick,
    pagination,
    refetch,
    table,
}: ResidentListDataTableViewProps) => (
    <DataTable>
        <DataTableHeader
            filtersContent={filtersContent}
            searchPlaceholder="Cari nama atau nomor telepon..."
        />
        <DataTableBody
            fallbackMessage="Tidak ada data penghuni."
            isError={isError}
            isLoading={isLoading}
            onRowClick={(row: Row<ResidentList>) => onRowClick(row.original.id)}
            refetchData={refetch}
            table={table}
        />
        <DataTablePagination pagination={pagination} />
    </DataTable>
);

export default ResidentListDataTableView;
