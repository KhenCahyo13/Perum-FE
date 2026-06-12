import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { memo, useCallback, useMemo, useState } from 'react';

import { fetchResidents } from '@/api/residents';
import { useDataTableContext } from '@/components/datatable';
import { queryKeys } from '@/lib/query-keys';

import ResidentListFilters from '../filters';
import type { ResidentListFiltersValue } from '../filters/types';
import { createResidentListTableColumns } from './table-column';
import type { ResidentListDataTableProps } from './types';
import ResidentListDataTableView from './view';

const ResidentListDataTable = ({
    onSelectResident,
}: ResidentListDataTableProps) => {
    const limit = useDataTableContext((s) => s.limit);
    const page = useDataTableContext((s) => s.page);
    const search = useDataTableContext((s) => s.search);
    const setFilters = useDataTableContext((s) => s.setFilters);
    const setPage = useDataTableContext((s) => s.setPage);

    const [residentFilters, setResidentFilters] =
        useState<ResidentListFiltersValue>({});

    const params = useMemo(
        () => ({
            limit,
            page,
            search: search || undefined,
            ...residentFilters,
        }),
        [limit, page, search, residentFilters]
    );

    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: () => fetchResidents(params),
        queryKey: queryKeys.residents.list(params),
    });

    const table = useReactTable({
        columns: createResidentListTableColumns(),
        data: data?.data ?? [],
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        rowCount: data?.meta?.total ?? 0,
    });

    const handleApplyFilters = useCallback(
        (filters: ResidentListFiltersValue) => {
            setResidentFilters(filters);
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
            <ResidentListFilters
                currentFilters={residentFilters}
                onApply={handleApplyFilters}
            />
        ),
        [residentFilters, handleApplyFilters]
    );

    return (
        <ResidentListDataTableView
            filtersContent={filtersContent}
            isError={isError}
            isLoading={isLoading}
            onRowClick={onSelectResident}
            pagination={data?.meta}
            refetch={refetch}
            table={table}
        />
    );
};

export default memo(ResidentListDataTable);
