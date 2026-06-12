import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { memo, useCallback, useMemo, useState } from 'react';

import { fetchExpenseCategories } from '@/api/expense-categories';
import { fetchExpenses } from '@/api/expenses';
import { useDataTableContext } from '@/components/datatable';
import { queryKeys } from '@/lib/query-keys';

import ExpenseListFilters from '../filters';
import type { ExpenseListFiltersValue } from '../filters/types';
import { createExpenseListTableColumns } from './table-column';
import type { ExpenseListDataTableProps } from './types';
import ExpenseListDataTableView from './view';

const ExpenseListDataTable = ({
    onAddClick,
    onSelectExpense,
}: ExpenseListDataTableProps) => {
    const limit = useDataTableContext((s) => s.limit);
    const page = useDataTableContext((s) => s.page);
    const search = useDataTableContext((s) => s.search);
    const setFilters = useDataTableContext((s) => s.setFilters);
    const setPage = useDataTableContext((s) => s.setPage);

    const [expenseFilters, setExpenseFilters] =
        useState<ExpenseListFiltersValue>({});

    const params = useMemo(
        () => ({
            limit,
            page,
            search: search || undefined,
            ...expenseFilters,
        }),
        [limit, page, search, expenseFilters]
    );

    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: () => fetchExpenses(params),
        queryKey: queryKeys.expenses.list(params),
    });

    const { data: categoriesData } = useQuery({
        queryFn: () => fetchExpenseCategories(),
        queryKey: queryKeys.expenseCategories.list(),
    });

    const categoryOptions = useMemo(
        () =>
            (categoriesData?.data ?? []).map((c) => ({
                label: c.name,
                value: c.id,
            })),
        [categoriesData]
    );

    const table = useReactTable({
        columns: createExpenseListTableColumns(),
        data: data?.data ?? [],
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        rowCount: data?.meta?.total ?? 0,
    });

    const handleApplyFilters = useCallback(
        (filters: ExpenseListFiltersValue) => {
            setExpenseFilters(filters);
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
            <ExpenseListFilters
                categoryOptions={categoryOptions}
                currentFilters={expenseFilters}
                onApply={handleApplyFilters}
            />
        ),
        [categoryOptions, expenseFilters, handleApplyFilters]
    );

    return (
        <ExpenseListDataTableView
            filtersContent={filtersContent}
            isError={isError}
            isLoading={isLoading}
            onAddClick={onAddClick}
            onRowClick={onSelectExpense}
            pagination={data?.meta}
            refetch={refetch}
            table={table}
        />
    );
};

export default memo(ExpenseListDataTable);
