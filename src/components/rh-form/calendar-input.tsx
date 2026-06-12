import { CalendarIcon } from 'lucide-react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { type ComponentProps, memo, useState } from 'react';
import {
    type Control,
    Controller,
    type FieldPath,
    type FieldValues,
} from 'react-hook-form';

import { Calendar } from '@/components/ui/calendar';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from '@/components/ui/field';
import { cn } from '@/lib/utils';

type RhCalendarInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
> = {
    control: Control<TFieldValues>;
    description?: string;
    label?: string;
    name: TName;
    required?: boolean;
    valueAsDate?: boolean;
} & Omit<ComponentProps<typeof Calendar>, 'mode' | 'onSelect' | 'selected'>;

const formatDateValue = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const parseDateValue = (value: unknown) => {
    if (value instanceof Date) return value;
    if (typeof value !== 'string' || !value) return undefined;

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

function RhCalendarInputBase<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    className,
    control,
    description,
    label,
    name,
    required = false,
    valueAsDate = false,
    ...calendarProps
}: RhCalendarInputProps<TFieldValues, TName>) {
    const [open, setOpen] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                const selectedDate = parseDateValue(field.value);

                return (
                    <Field data-invalid={fieldState.invalid}>
                        {label && (
                            <FieldLabel>
                                {label}
                                {required && (
                                    <span className="text-destructive">*</span>
                                )}
                            </FieldLabel>
                        )}
                        {description && (
                            <FieldDescription>{description}</FieldDescription>
                        )}
                        <PopoverPrimitive.Root
                            onOpenChange={setOpen}
                            open={open}
                        >
                            <PopoverPrimitive.Trigger asChild>
                                <button
                                    aria-invalid={fieldState.invalid}
                                    className={cn(
                                        'flex h-9 w-full items-center justify-between rounded-full border bg-background px-3 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none',
                                        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                                        !selectedDate &&
                                            'text-muted-foreground',
                                        fieldState.invalid &&
                                            'border-destructive ring-destructive/20',
                                        className
                                    )}
                                    id={field.name}
                                    type="button"
                                >
                                    <span>
                                        {formatDisplayDate(selectedDate) ||
                                            'Pick a date'}
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
                                        {...calendarProps}
                                        autoFocus
                                        mode="single"
                                        onSelect={(date) => {
                                            field.onChange(
                                                valueAsDate ||
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
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                );
            }}
        />
    );
}

export const RhCalendarInput = memo(
    RhCalendarInputBase
) as typeof RhCalendarInputBase;
