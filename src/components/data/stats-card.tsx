import { TrendingDown, TrendingUp, TrendingUpDown } from 'lucide-react';
import type { ElementType } from 'react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

type StatsTrendType = 'down' | 'flat' | 'up';
type StatsIconPosition = 'left' | 'top';

interface StatsCardProps {
    containerClassName?: string;
    icon: ElementType;
    iconContainerColor: string;
    iconPosition?: StatsIconPosition;
    textColor?: string;
    title: string;
    titleColor?: string;
    trendType?: StatsTrendType;
    trendTypeLabel?: string;
    value: number | string;
}

const StatsCardBase = ({
    containerClassName,
    icon: Icon,
    iconContainerColor,
    iconPosition = 'top',
    textColor,
    title,
    titleColor,
    trendType,
    trendTypeLabel,
    value,
}: StatsCardProps) => (
    <div className={cn('rounded-lg border px-4 py-4', containerClassName)}>
        <div
            className={cn(
                'flex gap-y-4',
                iconPosition === 'left'
                    ? 'flex-row items-start gap-x-4'
                    : 'flex-col'
            )}
        >
            <div
                className={cn(
                    'flex size-10 items-center justify-center rounded-lg',
                    iconContainerColor
                )}
            >
                <Icon className="size-5" />
            </div>
            <div className="flex flex-col gap-y-1">
                <div className="flex flex-col gap-y-1">
                    <p
                        className={cn(
                            'text-sm font-medium text-muted-foreground',
                            titleColor
                        )}
                    >
                        {title}
                    </p>
                    <span className={cn('text-lg font-semibold', textColor)}>
                        {value}
                    </span>
                </div>
            </div>
        </div>
        {trendType && trendTypeLabel && (
            <div className="mt-3 flex items-center justify-between">
                <span
                    className={cn(
                        'text-sm font-medium',
                        trendType === 'up' && 'text-primary',
                        trendType === 'down' && 'text-destructive',
                        trendType === 'flat' && 'text-muted-foreground'
                    )}
                >
                    {trendTypeLabel}
                </span>

                {trendType === 'up' && <TrendingUp className="text-primary" />}
                {trendType === 'down' && (
                    <TrendingDown className="text-destructive" />
                )}
                {trendType === 'flat' && (
                    <TrendingUpDown className="text-muted-foreground" />
                )}
            </div>
        )}
    </div>
);

export const StatsCard = memo(StatsCardBase) as typeof StatsCardBase;
