import { memo } from 'react';

import type { SelectOption } from '@/types/components';

import { SearchableSelect } from '../ui/searchable-select';

interface DataTableFilterSearchableSelectProps {
    allLabel?: string;
    label: string;
    onValueChange: (value: string | undefined) => void;
    options: SelectOption[];
    value: string | undefined;
}

function DataTableFilterSearchableSelectBase({
    allLabel,
    label,
    onValueChange,
    options,
    value,
}: DataTableFilterSearchableSelectProps) {
    return (
        <div className="flex flex-col gap-y-2">
            <p className="text-sm font-medium">{label}</p>
            <SearchableSelect
                allLabel={allLabel}
                listClassName="max-h-60"
                onValueChange={onValueChange}
                options={options}
                value={value}
            />
        </div>
    );
}

export const DataTableFilterSearchableSelect = memo(
    DataTableFilterSearchableSelectBase
) as typeof DataTableFilterSearchableSelectBase;
