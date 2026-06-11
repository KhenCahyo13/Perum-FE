import type { ColumnDef } from '@tanstack/react-table';

import { DataTableCell } from '@/components/datatable';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { HouseList } from '@/types/house';

export const createHouseListTableColumns = (): ColumnDef<HouseList>[] => [
    {
        accessorKey: '#',
        cell: ({ row }) => (
            <DataTableCell className="text-muted-foreground">
                {row.index + 1}
            </DataTableCell>
        ),
        header: '#',
    },
    {
        accessorKey: 'houseNumber',
        cell: ({ row }) => (
            <DataTableCell className="font-medium">
                {row.original.houseNumber}
            </DataTableCell>
        ),
        header: 'No. Rumah',
    },
    {
        accessorKey: 'address',
        cell: ({ row }) => (
            <DataTableCell className="max-w-64 truncate text-muted-foreground">
                {row.original.address}
            </DataTableCell>
        ),
        header: 'Alamat',
    },
    {
        accessorKey: 'status',
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <DataTableCell>
                    <Badge
                        className={cn(
                            status === 'Dihuni'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-red-100 text-red-600'
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
