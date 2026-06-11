import { useQuery } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { memo, useCallback, useMemo, useState } from 'react';

import { fetchHouses } from '@/api/houses';
import { useDataTableContext } from '@/components/datatable';
import { queryKeys } from '@/lib/query-keys';

import HouseListFilters from '../filters';
import type { HouseListFiltersValue } from '../filters/types';
import { createHouseListTableColumns } from './table-column';
import type { HouseListDataTableProps } from './types';
import HouseListDataTableView from './view';

const HouseListDataTable = ({ onSelectHouse }: HouseListDataTableProps) => {
    const limit = useDataTableContext((s) => s.limit);
    const page = useDataTableContext((s) => s.page);
    const search = useDataTableContext((s) => s.search);
    const setFilters = useDataTableContext((s) => s.setFilters);
    const setPage = useDataTableContext((s) => s.setPage);

    const [houseFilters, setHouseFilters] = useState<HouseListFiltersValue>({});

    const params = useMemo(
        () => ({
            limit,
            page,
            search: search || undefined,
            ...houseFilters,
        }),
        [limit, page, search, houseFilters]
    );

    const { data, isError, isLoading, refetch } = useQuery({
        queryFn: () => fetchHouses(params),
        queryKey: queryKeys.houses.list(params),
    });

    const table = useReactTable({
        columns: createHouseListTableColumns(),
        data: data?.data ?? [],
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        rowCount: data?.meta?.total ?? 0,
    });

    const handleApplyFilters = useCallback(
        (filters: HouseListFiltersValue) => {
            setHouseFilters(filters);
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
            <HouseListFilters
                currentFilters={houseFilters}
                onApply={handleApplyFilters}
            />
        ),
        [houseFilters, handleApplyFilters]
    );

    return (
        <HouseListDataTableView
            filtersContent={filtersContent}
            isError={isError}
            isLoading={isLoading}
            onRowClick={onSelectHouse}
            pagination={data?.meta}
            refetch={refetch}
            table={table}
        />
    );
};

export default memo(HouseListDataTable);
