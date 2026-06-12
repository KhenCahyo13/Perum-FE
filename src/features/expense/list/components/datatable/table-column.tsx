import type { ColumnDef } from '@tanstack/react-table';

import { DataTableCell } from '@/components/datatable';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/currency';
import type { ExpenseList } from '@/types/expense';

export const createExpenseListTableColumns = (): ColumnDef<ExpenseList>[] => [
    {
        accessorKey: '#',
        cell: ({ row }) => <DataTableCell>{row.index + 1}</DataTableCell>,
        header: '#',
    },
    {
        accessorKey: 'categoryName',
        cell: ({ row }) => (
            <DataTableCell>{row.original.categoryName}</DataTableCell>
        ),
        header: 'Kategori',
    },
    {
        accessorKey: 'amount',
        cell: ({ row }) => (
            <DataTableCell>{formatCurrency(row.original.amount)}</DataTableCell>
        ),
        header: 'Jumlah',
    },
    {
        accessorKey: 'date',
        cell: ({ row }) => <DataTableCell>{row.original.date}</DataTableCell>,
        header: 'Tanggal',
    },
    {
        accessorKey: 'isRecurring',
        cell: ({ row }) => (
            <DataTableCell>
                <Badge
                    className={
                        row.original.isRecurring
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                    }
                >
                    {row.original.isRecurring ? 'Rutin' : 'Non-Rutin'}
                </Badge>
            </DataTableCell>
        ),
        header: 'Status',
    },
];
