import type { ElementType } from 'react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

interface BoxPreviewProps {
    icon: ElementType;
    title: string;
    value: string;
    valueClassName?: string;
}

const BoxPreviewBase = ({
    icon: Icon,
    title,
    value,
    valueClassName,
}: BoxPreviewProps) => (
    <div className="rounded-lg border p-4">
        <div className="flex gap-x-3">
            <Icon className="size-5 text-muted-foreground" />
            <div className="flex flex-col gap-y-0.5">
                <p className="text-xs text-muted-foreground">{title}</p>
                <p className={cn('text-[13px] font-medium', valueClassName)}>
                    {value}
                </p>
            </div>
        </div>
    </div>
);

export const BoxPreview = memo(BoxPreviewBase) as typeof BoxPreviewBase;
