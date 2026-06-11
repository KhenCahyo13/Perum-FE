import { memo, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface TtTableCellProps {
    children: ReactNode;
    className?: string;
}

function DataTableCellBase({ children, className }: TtTableCellProps) {
    return <div className={cn('py-1', className)}>{children}</div>;
}

export const DataTableCell = memo(
    DataTableCellBase
) as typeof DataTableCellBase;
