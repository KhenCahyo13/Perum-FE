import { memo, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Card, CardContent } from '../ui/card';

interface DataTableProps {
    children: ReactNode;
    className?: string;
}

function DataTableBase({ children, className }: DataTableProps) {
    return (
        <Card>
            <CardContent>
                <div className={cn('flex flex-col gap-6', className)}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}

export const DataTable = memo(DataTableBase) as typeof DataTableBase;
