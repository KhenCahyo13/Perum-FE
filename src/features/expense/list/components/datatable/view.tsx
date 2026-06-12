import type { Row } from '@tanstack/react-table';

import {
    DataTable,
    DataTableBody,
    DataTableHeader,
    DataTablePagination,
} from '@/components/datatable';
import type { ExpenseList } from '@/types/expense';

import type { ExpenseListDataTableViewProps } from './types';

const ExpenseListDataTableView = ({
    filtersContent,
    isError,
    isLoading,
    onAddClick,
    onRowClick,
    pagination,
    refetch,
    table,
}: ExpenseListDataTableViewProps) => (
    <DataTable>
        <DataTableHeader
            filtersContent={filtersContent}
            onAddClick={onAddClick}
            searchPlaceholder="Cari kategori atau deskripsi..."
        />
        <DataTableBody
            fallbackMessage="Tidak ada data pengeluaran."
            isError={isError}
            isLoading={isLoading}
            onRowClick={(row: Row<ExpenseList>) => onRowClick(row.original.id)}
            refetchData={refetch}
            table={table}
        />
        <DataTablePagination pagination={pagination} />
    </DataTable>
);

export default ExpenseListDataTableView;
