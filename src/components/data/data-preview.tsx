import type { ElementType, FC, ReactNode } from 'react';
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

const DataPreviewBase: FC<DataPreviewProps> = ({
    className,
    icon: Icon,
    iconClassName,
    title,
    titlePosition = 'bottom',
    value,
    valueClassName,
}) => (
    <div className={cn('flex gap-x-3', className)}>
        {Icon && (
            <Icon
                className={cn(
                    'size-5.5 shrink-0 text-muted-foreground',
                    iconClassName
                )}
            />
        )}
        <div className="flex flex-col gap-y-0.5">
            {titlePosition === 'top' && (
                <p className="text-[13px] text-muted-foreground">{title}</p>
            )}
            <p className={cn('text-[13px] font-medium', valueClassName)}>
                {value}
            </p>
            {titlePosition === 'bottom' && (
                <p className="text-[13px] text-muted-foreground">{title}</p>
            )}
        </div>
    </div>
);

export const DataPreview = memo(DataPreviewBase) as typeof DataPreviewBase;
