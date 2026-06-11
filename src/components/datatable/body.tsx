import {
    flexRender,
    type Row,
    type Table as TanstackTableType,
} from '@tanstack/react-table';
import { type JSX } from 'react';

import { ActionFallback, ImageFallback, LoaderFallback } from '../fallback';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';

interface DataTableBodyProps<TTable> {
    fallbackMessage?: string;
    isError: boolean;
    isLoading: boolean;
    loaderMessage?: string;
    onRowClick?: (row: Row<TTable>) => void;
    refetchData: () => void;
    table: TanstackTableType<TTable>;
}

function DataTableBodyBase<TTable>({
    fallbackMessage = 'Data not found.',
    isError,
    isLoading,
    loaderMessage = 'Loading data...',
    onRowClick,
    refetchData,
    table,
}: DataTableBodyProps<TTable>): JSX.Element {
    return (
        <div className="px-6">
            <Table>
                <TableHeader className="bg-muted/70">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell
                                className="py-8 text-center"
                                colSpan={
                                    table.getHeaderGroups()[0].headers.length
                                }
                            >
                                <LoaderFallback label={loaderMessage} />
                            </TableCell>
                        </TableRow>
                    ) : isError ? (
                        <TableRow>
                            <TableCell
                                className="py-8 text-center"
                                colSpan={
                                    table.getHeaderGroups()[0].headers.length
                                }
                            >
                                <ActionFallback onAction={refetchData} />
                            </TableCell>
                        </TableRow>
                    ) : table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className={
                                    onRowClick ? 'cursor-pointer' : undefined
                                }
                                data-state={row.getIsSelected() && 'selected'}
                                key={row.id}
                                onClick={
                                    onRowClick
                                        ? () => onRowClick(row)
                                        : undefined
                                }
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                className="py-8 text-center"
                                colSpan={
                                    table.getHeaderGroups()[0].headers.length
                                }
                            >
                                <ImageFallback label={fallbackMessage} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export const DataTableBody = DataTableBodyBase;
