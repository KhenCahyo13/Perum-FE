import { type ComponentProps, type ElementType, memo } from 'react';
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
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type RhTextInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
> = {
    asCurrency?: boolean;
    control: Control<TFieldValues>;
    description?: string;
    label?: string;
    name: TName;
    prefixIcon?: ElementType;
    prefixText?: string;
    required?: boolean;
    suffixIcon?: ElementType;
    suffixText?: string;
} & Omit<ComponentProps<typeof Input>, 'name'>;

function RhTextInputBase<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>(props: RhTextInputProps<TFieldValues, TName>) {
    const {
        asCurrency,
        control,
        description,
        label,
        name,
        placeholder,
        prefixText,
        required,
        suffixText,
        type,
        ...inputProps
    } = props;
    const PrefixIcon = props.prefixIcon;
    const SuffixIcon = props.suffixIcon;

    const isCurrency = asCurrency && type === 'number';

    const formatRupiah = (value: number | string | undefined) => {
        if (value === '' || value === null || value === undefined) return '';
        const num = Number(String(value).replace(/\./g, ''));
        if (isNaN(num)) return '';
        return num.toLocaleString('id-ID');
    };

    const parseRupiah = (formatted: string) => {
        const raw = formatted.replace(/\./g, '');
        const num = parseInt(raw, 10);
        return isNaN(num) ? '' : String(num);
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    {label && (
                        <FieldLabel htmlFor={field.name}>
                            {label}
                            {required && (
                                <span className="text-destructive">*</span>
                            )}
                        </FieldLabel>
                    )}
                    {description && (
                        <FieldDescription>{description}</FieldDescription>
                    )}

                    <div
                        className={cn(
                            'flex items-center rounded-full border read-only:bg-muted/50',
                            'focus-within:ring-2 focus-within:ring-ring',
                            fieldState.invalid && 'border-destructive'
                        )}
                    >
                        {/* Prefix */}
                        {PrefixIcon && (
                            <span className="flex items-center pl-3 text-muted-foreground">
                                <PrefixIcon className="size-4.5" />
                            </span>
                        )}
                        {(prefixText || isCurrency) && (
                            <span className="flex items-center pl-3 text-sm text-muted-foreground">
                                {isCurrency ? 'Rp' : prefixText}
                            </span>
                        )}

                        {/* Input */}
                        <Input
                            autoComplete="off"
                            {...field}
                            {...inputProps}
                            aria-invalid={fieldState.invalid}
                            className="border-0 bg-muted/50 focus-visible:ring-0"
                            id={field.name}
                            onChange={
                                isCurrency
                                    ? (e) =>
                                          field.onChange(
                                              parseRupiah(e.target.value)
                                          )
                                    : field.onChange
                            }
                            placeholder={placeholder}
                            type={isCurrency ? 'text' : type}
                            value={
                                isCurrency
                                    ? formatRupiah(field.value)
                                    : field.value
                            }
                        />

                        {/* Suffix */}
                        {SuffixIcon && (
                            <span className="flex items-center pr-3 text-muted-foreground">
                                <SuffixIcon className="size-4.5" />
                            </span>
                        )}
                        {suffixText && (
                            <span className="flex items-center pr-3 text-sm text-muted-foreground">
                                {suffixText}
                            </span>
                        )}
                    </div>

                    {fieldState.invalid && (
                        <FieldError
                            className="-mt-0.5 text-[13px]"
                            errors={[fieldState.error]}
                        />
                    )}
                </Field>
            )}
        />
    );
}

export const RhTextInput = memo(RhTextInputBase) as typeof RhTextInputBase;
