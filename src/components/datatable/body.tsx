import {
    flexRender,
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
    refetchData: () => void;
    table: TanstackTableType<TTable>;
}

function DataTableBodyBase<TTable>({
    fallbackMessage = 'Data not found.',
    isError,
    isLoading,
    loaderMessage = 'Loading data...',
    refetchData,
    table,
}: DataTableBodyProps<TTable>): JSX.Element {
    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {isLoading ? (
                    <TableRow>
                        <TableCell
                            className="py-8 text-center"
                            colSpan={table.getHeaderGroups()[0].headers.length}
                        >
                            <LoaderFallback label={loaderMessage} />
                        </TableCell>
                    </TableRow>
                ) : isError ? (
                    <TableRow>
                        <TableCell
                            className="py-8 text-center"
                            colSpan={table.getHeaderGroups()[0].headers.length}
                        >
                            <ActionFallback onAction={refetchData} />
                        </TableCell>
                    </TableRow>
                ) : (
                    <>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                    key={row.id}
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
                                        table.getHeaderGroups()[0].headers
                                            .length
                                    }
                                >
                                    <ImageFallback label={fallbackMessage} />
                                </TableCell>
                            </TableRow>
                        )}
                    </>
                )}
            </TableBody>
        </Table>
    );
}

export const DataTableBody = DataTableBodyBase;
