import { memo, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Card } from '../ui/card';

interface DataTableProps {
    children: ReactNode;
    className?: string;
}

function DataTableBase({ children, className }: DataTableProps) {
    return (
        <Card
            className={cn(
                'flex flex-col gap-6 overflow-hidden py-6',
                className
            )}
        >
            {children}
        </Card>
    );
}

export const DataTable = memo(DataTableBase) as typeof DataTableBase;
