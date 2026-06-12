import { memo } from 'react';

import {
    DataTableFilterDialog,
    DataTableFilterSelect,
} from '@/components/datatable';

import { statusOptions } from './data';
import type { HouseListFiltersViewProps } from './types';

const HouseListFiltersView = ({
    activeCount,
    onApply,
    onOpenChange,
    onReset,
    onStatusChange,
    open,
    pending,
}: HouseListFiltersViewProps) => (
    <DataTableFilterDialog
        activeCount={activeCount}
        onApply={onApply}
        onOpenChange={onOpenChange}
        onReset={onReset}
        open={open}
        title="Filter Rumah"
    >
        <DataTableFilterSelect
            label="Status"
            onValueChange={onStatusChange}
            options={statusOptions}
            value={pending.status}
        />
    </DataTableFilterDialog>
);

export default memo(HouseListFiltersView);
