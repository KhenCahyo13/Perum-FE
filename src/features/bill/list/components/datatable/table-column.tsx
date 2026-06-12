import type { ColumnDef } from '@tanstack/react-table';

import { DataTableCell } from '@/components/datatable';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/currency';
import { formatBillingMonth } from '@/lib/datetime';
import { cn } from '@/lib/utils';
import type { BillList } from '@/types/bill';

const statusColorMap: Record<string, string> = {
    'Belum Dibayar': 'bg-yellow-100 text-yellow-600',
    Lunas: 'bg-green-100 text-green-600',
    Terlambat: 'bg-red-100 text-red-600',
};

export const createBillListTableColumns = (): ColumnDef<BillList>[] => [
    {
        accessorKey: '#',
        cell: ({ row }) => <DataTableCell>{row.index + 1}</DataTableCell>,
        header: '#',
    },
    {
        accessorKey: 'houseNumber',
        cell: ({ row }) => (
            <DataTableCell>{row.original.houseNumber}</DataTableCell>
        ),
        header: 'No. Rumah',
    },
    {
        accessorKey: 'residentName',
        cell: ({ row }) => (
            <DataTableCell>{row.original.residentName}</DataTableCell>
        ),
        header: 'Penghuni',
    },
    {
        accessorKey: 'feeTypeName',
        cell: ({ row }) => (
            <DataTableCell>{row.original.feeTypeName}</DataTableCell>
        ),
        header: 'Tipe Biaya',
    },
    {
        accessorKey: 'amount',
        cell: ({ row }) => (
            <DataTableCell>{formatCurrency(row.original.amount)}</DataTableCell>
        ),
        header: 'Jumlah',
    },
    {
        accessorKey: 'billingMonth',
        cell: ({ row }) => (
            <DataTableCell>
                {formatBillingMonth(row.original.billingMonth)}
            </DataTableCell>
        ),
        header: 'Bulan Tagihan',
    },
    {
        accessorKey: 'status',
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <DataTableCell>
                    <Badge
                        className={cn(
                            statusColorMap[status] ??
                                'bg-gray-100 text-gray-600'
                        )}
                    >
                        {status}
                    </Badge>
                </DataTableCell>
            );
        },
        header: 'Status',
    },
];
