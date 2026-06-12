import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { memo, useCallback, useMemo, useState } from 'react';

import { fetchBills } from '@/api/bills';
import { useDataTableContext } from '@/components/datatable';
import { queryKeys } from '@/lib/query-keys';

import BillListFilters from '../filters';
import type { BillListFiltersValue } from '../filters/types';
import { createBillListTableColumns } from './table-column';
import type { BillListDataTableProps } from './types';
import BillListDataTableView from './view';

const BillListDataTable = ({
    onAddClick,
    onSelectBill,
}: BillListDataTableProps) => {
    const limit = useDataTableContext((s) => s.limit);
    const page = useDataTableContext((s) => s.page);
    const search = useDataTableContext((s) => s.search);
    const setFilters = useDataTableContext((s) => s.setFilters);
    const setPage = useDataTableContext((s) => s.setPage);

    const [billFilters, setBillFilters] = useState<BillListFiltersValue>({});

    const params = useMemo(
        () => ({
            limit,
            page,
            search: search || undefined,
            ...billFilters,
        }),
        [limit, page, search, billFilters]
    );

    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: () => fetchBills(params),
        queryKey: queryKeys.bills.list(params),
    });

    const table = useReactTable({
        columns: createBillListTableColumns(),
        data: data?.data ?? [],
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        rowCount: data?.meta?.total ?? 0,
    });

    const handleApplyFilters = useCallback(
        (filters: BillListFiltersValue) => {
            setBillFilters(filters);
            setPage(1);
            setFilters(
                Object.entries(filters)
                    .filter(([, v]) => v !== undefined)
                    .map(([k]) => k)
            );
        },
        [setFilters, setPage]
    );

    const filtersContent = useMemo(
        () => (
            <BillListFilters
                currentFilters={billFilters}
                onApply={handleApplyFilters}
            />
        ),
        [billFilters, handleApplyFilters]
    );

    return (
        <BillListDataTableView
            filtersContent={filtersContent}
            isError={isError}
            isLoading={isLoading}
            onAddClick={onAddClick}
            onRowClick={onSelectBill}
            pagination={data?.meta}
            refetch={refetch}
            table={table}
        />
    );
};

export default memo(BillListDataTable);
