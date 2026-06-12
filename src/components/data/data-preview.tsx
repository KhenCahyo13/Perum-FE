import type { ElementType, ReactNode } from 'react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

interface DataPreviewProps {
    className?: string;
    icon?: ElementType;
    iconClassName?: string;
    title: ReactNode;
    titlePosition?: 'bottom' | 'top';
    value: ReactNode;
    valueClassName?: string;
}

const DataPreviewBase = ({
    className,
    icon: Icon,
    iconClassName,
    title,
    titlePosition = 'bottom',
    value,
    valueClassName,
}: DataPreviewProps) => (
    <div className={cn('flex gap-x-4', className)}>
        {Icon && (
            <Icon
                className={cn(
                    'size-5 shrink-0 text-muted-foreground',
                    iconClassName
                )}
            />
        )}
        <div className="flex flex-col gap-y-1">
            {titlePosition === 'top' && (
                <p className="text-sm text-muted-foreground">{title}</p>
            )}
            <p className={cn('text-sm font-medium', valueClassName)}>
                {value}
            </p>
            {titlePosition === 'bottom' && (
                <p className="text-sm text-muted-foreground">{title}</p>
            )}
        </div>
    </div>
);

export const DataPreview = memo(DataPreviewBase) as typeof DataPreviewBase;
