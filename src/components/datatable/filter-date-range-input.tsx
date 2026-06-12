import { CalendarIcon } from 'lucide-react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { memo, useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { Calendar } from '../ui/calendar';

interface DataTableFilterDateRangeInputProps {
    endValue: string | undefined;
    label: string;
    onValueChange: (value: {
        end: string | undefined;
        start: string | undefined;
    }) => void;
    startValue: string | undefined;
}

const formatDateValue = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const parseDateValue = (value: string | undefined) => {
    if (!value) return undefined;

    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    if (Number.isNaN(date.getTime())) return undefined;

    return date;
};

const formatDisplayDate = (date: Date | undefined) => {
    if (!date) return '';

    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};

const formatDisplayRange = (range: DateRange | undefined) => {
    if (!range?.from) return 'Pick a date range';
    if (!range.to) return formatDisplayDate(range.from);

    return `${formatDisplayDate(range.from)} - ${formatDisplayDate(range.to)}`;
};

function DataTableFilterDateRangeInputBase({
    endValue,
    label,
    onValueChange,
    startValue,
}: DataTableFilterDateRangeInputProps) {
    const [open, setOpen] = useState(false);
    const selectedRange: DateRange | undefined =
        startValue || endValue
            ? {
                  from: parseDateValue(startValue),
                  to: parseDateValue(endValue),
              }
            : undefined;

    return (
        <div className="flex flex-col gap-y-2">
            <p className="text-sm font-medium">{label}</p>
            <PopoverPrimitive.Root onOpenChange={setOpen} open={open}>
                <PopoverPrimitive.Trigger asChild>
                    <button
                        className={cn(
                            'flex h-9 w-full items-center justify-between rounded-full border bg-background px-3 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none',
                            'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                            !selectedRange?.from && 'text-muted-foreground'
                        )}
                        type="button"
                    >
                        <span className="truncate">
                            {formatDisplayRange(selectedRange)}
                        </span>
                        <CalendarIcon className="size-4 shrink-0 text-muted-foreground" />
                    </button>
                </PopoverPrimitive.Trigger>
                <PopoverPrimitive.Portal>
                    <PopoverPrimitive.Content
                        align="start"
                        className="z-50 rounded-lg bg-popover p-0 text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-none"
                        sideOffset={4}
                    >
                        <Calendar
                            autoFocus
                            mode="range"
                            onSelect={(range) => {
                                onValueChange({
                                    end: range?.to
                                        ? formatDateValue(range.to)
                                        : undefined,
                                    start: range?.from
                                        ? formatDateValue(range.from)
                                        : undefined,
                                });

                                if (range?.from && range.to) setOpen(false);
                            }}
                            selected={selectedRange}
                        />
                    </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
            </PopoverPrimitive.Root>
        </div>
    );
}

export const DataTableFilterDateRangeInput = memo(
    DataTableFilterDateRangeInputBase
) as typeof DataTableFilterDateRangeInputBase;
