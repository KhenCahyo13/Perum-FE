import { memo } from 'react';
import {
    type Control,
    Controller,
    type FieldPath,
    type FieldValues,
} from 'react-hook-form';

import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from '@/components/ui/field';
import { SearchableSelect } from '@/components/ui/searchable-select';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import type { SelectOption } from '@/types/components';

type RhSelectInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
> = {
    control: Control<TFieldValues>;
    description?: string;
    label?: string;
    name: TName;
    options: SelectOption[];
    placeholder?: string;
    required?: boolean;
    searchable?: boolean;
};

function RhSelectInputBase<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    control,
    description,
    label,
    name,
    options,
    placeholder,
    required = false,
    searchable = false,
}: RhSelectInputProps<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                const fieldValue =
                    field.value === null || field.value === undefined
                        ? ''
                        : String(field.value);

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
                        {searchable ? (
                            <SearchableSelect
                                allLabel={placeholder ?? 'Pilih...'}
                                onValueChange={(val) =>
                                    field.onChange(val ?? '')
                                }
                                options={options}
                                value={fieldValue || undefined}
                            />
                        ) : (
                            <Select
                                onValueChange={field.onChange}
                                value={fieldValue}
                            >
                                <SelectTrigger
                                    aria-invalid={fieldState.invalid}
                                    className="w-full rounded-full bg-muted/50 px-4 shadow-none"
                                >
                                    <span
                                        className={cn(
                                            'truncate',
                                            !options.find(
                                                (o) =>
                                                    String(o.value) ===
                                                    fieldValue
                                            ) && 'text-muted-foreground'
                                        )}
                                    >
                                        {options.find(
                                            (o) =>
                                                String(o.value) === fieldValue
                                        )?.label ?? placeholder}
                                    </span>
                                </SelectTrigger>
                                <SelectContent
                                    className="max-h-40"
                                    position="popper"
                                >
                                    {options.map((opt) => (
                                        <SelectItem
                                            key={opt.value}
                                            value={String(opt.value)}
                                        >
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                );
            }}
        />
    );
}

export const RhSelectInput = memo(
    RhSelectInputBase
) as typeof RhSelectInputBase;
