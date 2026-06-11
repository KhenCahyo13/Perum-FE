import { memo } from 'react';

import type { SelectOption } from '@/types/components';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

interface DataTableFilterSelectProps {
    allLabel?: string;
    label: string;
    onValueChange: (value: string | undefined) => void;
    options: SelectOption[];
    value: string | undefined;
}

function DataTableFilterSelectBase({
    allLabel = 'Semua',
    label,
    onValueChange,
    options,
    value,
}: DataTableFilterSelectProps) {
    return (
        <div className="flex flex-col gap-y-2">
            <p className="text-sm font-medium">{label}</p>
            <Select
                onValueChange={(val) =>
                    onValueChange(val === '__all__' ? undefined : val)
                }
                value={value ?? '__all__'}
            >
                <SelectTrigger className="w-full rounded-full">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                    <SelectItem value="__all__">{allLabel}</SelectItem>
                    {options.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export const DataTableFilterSelect = memo(
    DataTableFilterSelectBase
) as typeof DataTableFilterSelectBase;
