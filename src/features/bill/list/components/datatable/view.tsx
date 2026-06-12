import type { Row } from '@tanstack/react-table';

import {
    DataTable,
    DataTableBody,
    DataTableHeader,
    DataTablePagination,
} from '@/components/datatable';
import type { BillList } from '@/types/bill';

import type { BillListDataTableViewProps } from './types';

const BillListDataTableView = ({
    filtersContent,
    isError,
    isLoading,
    onAddClick,
    onRowClick,
    pagination,
    refetch,
    table,
}: BillListDataTableViewProps) => (
    <DataTable>
        <DataTableHeader
            filtersContent={filtersContent}
            onAddClick={onAddClick}
            searchPlaceholder="Cari nomor rumah atau penghuni..."
        />
        <DataTableBody
            fallbackMessage="Tidak ada data tagihan."
            isError={isError}
            isLoading={isLoading}
            onRowClick={(row: Row<BillList>) => onRowClick(row.original.id)}
            refetchData={refetch}
            table={table}
        />
        <DataTablePagination pagination={pagination} />
    </DataTable>
);

export default BillListDataTableView;
