import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
} from '@tabler/icons-react';
import { memo } from 'react';

import { getPaginationPages } from '@/lib/pagination';
import type { ApiPagination } from '@/types/api';

import { Button } from '../ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
} from '../ui/pagination';
import { useDataTableContext } from './context';

interface DataTablePaginationProps {
    pagination: ApiPagination | undefined;
}

function DataTablePaginationBase({ pagination }: DataTablePaginationProps) {
    const page = useDataTableContext((s) => s.page);
    const setPage = useDataTableContext((s) => s.setPage);

    const pages = getPaginationPages(page, pagination?.lastPage ?? 1);

    return (
        <div className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between">
            <span className="text-sm text-nowrap text-muted-foreground">
                Menampilkan {pagination?.perPage} dari {pagination?.total} data
            </span>
            <Pagination className="justify-center lg:justify-end">
                <PaginationContent>
                    <Button
                        disabled={page <= 1}
                        onClick={() => setPage(1)}
                        variant="outline"
                    >
                        <IconChevronsLeft />
                    </Button>
                    <Button
                        disabled={page <= 1}
                        onClick={() => setPage(page - 1)}
                        variant="outline"
                    >
                        <IconChevronLeft />
                    </Button>
                    {pages.map((page, index) =>
                        page === 'ellipsis' ? (
                            <PaginationItem key={`ellipsis-${index}`}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={page}>
                                <Button
                                    className="size-9"
                                    onClick={() => setPage(Number(page))}
                                    variant={
                                        pagination?.currentPage === page
                                            ? 'outline'
                                            : 'ghost'
                                    }
                                >
                                    {page}
                                </Button>
                            </PaginationItem>
                        )
                    )}
                    <Button
                        disabled={
                            (pagination?.currentPage ?? 1) >=
                            (pagination?.lastPage ?? 1)
                        }
                        onClick={() => setPage(pagination?.lastPage ?? 1)}
                        variant="outline"
                    >
                        <IconChevronsRight />
                    </Button>
                    <Button
                        disabled={
                            (pagination?.currentPage ?? 1) >=
                            (pagination?.lastPage ?? 1)
                        }
                        onClick={() =>
                            setPage((pagination?.currentPage ?? 1) + 1)
                        }
                        variant="outline"
                    >
                        <IconChevronRight />
                    </Button>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export const DataTablePagination = memo(
    DataTablePaginationBase
) as typeof DataTablePaginationBase;
