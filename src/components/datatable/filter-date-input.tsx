import { CalendarIcon } from 'lucide-react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { memo, useState } from 'react';

import { cn } from '@/lib/utils';

import { Calendar } from '../ui/calendar';

interface DataTableFilterDateInputProps {
    label: string;
    onValueChange: (value: string | undefined) => void;
    value: string | undefined;
}

const formatDateValue = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const parseDateValue = (value: string | undefined) => {
    if (!value) return undefined;

    const date = new Date(value);

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

function DataTableFilterDateInputBase({
    label,
    onValueChange,
    value,
}: DataTableFilterDateInputProps) {
    const [open, setOpen] = useState(false);
    const selectedDate = parseDateValue(value);

    return (
        <div className="flex flex-col gap-y-2">
            <p className="text-sm font-medium">{label}</p>
            <PopoverPrimitive.Root onOpenChange={setOpen} open={open}>
                <PopoverPrimitive.Trigger asChild>
                    <button
                        className={cn(
                            'flex h-9 w-full items-center justify-between rounded-full border bg-background px-3 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none',
                            'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                            !selectedDate && 'text-muted-foreground'
                        )}
                        type="button"
                    >
                        <span>
                            {formatDisplayDate(selectedDate) || 'Pick a date'}
                        </span>
                        <CalendarIcon className="size-4 text-muted-foreground" />
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
                            mode="single"
                            onSelect={(date) => {
                                onValueChange(
                                    date === undefined
                                        ? date
                                        : formatDateValue(date)
                                );
                                setOpen(false);
                            }}
                            selected={selectedDate}
                        />
                    </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
            </PopoverPrimitive.Root>
        </div>
    );
}

export const DataTableFilterDateInput = memo(
    DataTableFilterDateInputBase
) as typeof DataTableFilterDateInputBase;
