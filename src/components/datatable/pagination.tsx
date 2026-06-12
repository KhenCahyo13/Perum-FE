import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { memo } from 'react';

import type { ApiPagination } from '@/types/api';

import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { useDataTableContext } from './context';

interface DataTablePaginationProps {
    limitOptions?: number[];
    pagination: ApiPagination | undefined;
}

type PaginationItem = 'ellipsis' | number;

const getPaginationItems = (
    currentPage: number,
    totalPages: number
): PaginationItem[] => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, 'ellipsis', totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 'ellipsis', currentPage, 'ellipsis', totalPages];
};

function DataTablePaginationBase({
    limitOptions = [10, 20, 30, 40, 50],
    pagination,
}: DataTablePaginationProps) {
    const page = useDataTableContext((s) => s.page);
    const limit = useDataTableContext((s) => s.limit);
    const setPage = useDataTableContext((s) => s.setPage);
    const setLimit = useDataTableContext((s) => s.setLimit);

    if (!pagination) return null;

    const totalPages = pagination.lastPage;
    const paginationItems = getPaginationItems(page, totalPages);

    return (
        <div className="flex w-full flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:gap-x-2">
                <span>Menampilkan</span>
                <Select
                    onValueChange={(value) => {
                        setLimit(Number(value));
                        setPage(1);
                    }}
                    value={limit.toString()}
                >
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {limitOptions.map((value) => (
                            <SelectItem key={value} value={value.toString()}>
                                {value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <span>dari {pagination.total} data per halaman</span>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                    size="icon-lg"
                    variant="outline"
                >
                    <IconChevronLeft />
                </Button>

                {paginationItems.map((item, index) =>
                    item === 'ellipsis' ? (
                        <Button
                            disabled
                            key={`ellipsis-${index}`}
                            size="icon-lg"
                            variant="outline"
                        >
                            ...
                        </Button>
                    ) : (
                        <Button
                            key={item}
                            onClick={() => setPage(item)}
                            size="icon-lg"
                            variant={item === page ? 'default' : 'outline'}
                        >
                            {item}
                        </Button>
                    )
                )}

                <Button
                    disabled={page >= totalPages}
                    onClick={() => setPage(page + 1)}
                    size="icon-lg"
                    variant="outline"
                >
                    <IconChevronRight />
                </Button>
            </div>
        </div>
    );
}

export const DataTablePagination = memo(
    DataTablePaginationBase
) as typeof DataTablePaginationBase;
