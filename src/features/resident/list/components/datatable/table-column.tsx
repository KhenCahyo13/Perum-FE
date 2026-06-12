import type { ColumnDef } from '@tanstack/react-table';

import { DataTableCell } from '@/components/datatable';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { ResidentList } from '@/types/resident';

export const createResidentListTableColumns = (): ColumnDef<ResidentList>[] => [
    {
        accessorKey: '#',
        cell: ({ row }) => (
            <DataTableCell>
                {row.index + 1}
            </DataTableCell>
        ),
        header: '#',
    },
    {
        accessorKey: 'fullName',
        cell: ({ row }) => (
            <DataTableCell>
                {row.original.fullName}
            </DataTableCell>
        ),
        header: 'Nama Lengkap',
    },
    {
        accessorKey: 'phoneNumber',
        cell: ({ row }) => (
            <DataTableCell>
                {row.original.phoneNumber}
            </DataTableCell>
        ),
        header: 'No. Telepon',
    },
    {
        accessorKey: 'houseNumber',
        cell: ({ row }) => (
            <DataTableCell>{row.original.houseNumber ?? '-'}</DataTableCell>
        ),
        header: 'No. Rumah',
    },
    {
        accessorKey: 'residentType',
        cell: ({ row }) => {
            const type = row.original.residentType;
            return (
                <DataTableCell>
                    <Badge
                        className={cn(
                            type === 'Tetap'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-yellow-100 text-yellow-600'
                        )}
                    >
                        {type}
                    </Badge>
                </DataTableCell>
            );
        },
        header: 'Tipe',
    },
];
