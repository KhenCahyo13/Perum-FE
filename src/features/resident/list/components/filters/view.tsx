import { memo } from 'react';

import {
    DataTableFilterDialog,
    DataTableFilterSelect,
} from '@/components/datatable';

import { residentTypeOptions } from './data';
import type { ResidentListFiltersViewProps } from './types';

const ResidentListFiltersView = ({
    activeCount,
    onApply,
    onOpenChange,
    onReset,
    onResidentTypeChange,
    open,
    pending,
}: ResidentListFiltersViewProps) => (
    <DataTableFilterDialog
        activeCount={activeCount}
        onApply={onApply}
        onOpenChange={onOpenChange}
        onReset={onReset}
        open={open}
        title="Filter Penghuni"
    >
        <DataTableFilterSelect
            label="Tipe Penghuni"
            onValueChange={onResidentTypeChange}
            options={residentTypeOptions}
            value={pending.residentType}
        />
    </DataTableFilterDialog>
);

export default memo(ResidentListFiltersView);
