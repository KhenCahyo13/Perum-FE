import { memo } from 'react';

import {
    DataTableFilterDateInput,
    DataTableFilterDialog,
    DataTableFilterSelect,
} from '@/components/datatable';

import { billStatusOptions } from './data';
import type { BillListFiltersViewProps } from './types';

const BillListFiltersView = ({
    activeCount,
    onApply,
    onBillingMonthChange,
    onOpenChange,
    onReset,
    onStatusChange,
    open,
    pending,
}: BillListFiltersViewProps) => (
    <DataTableFilterDialog
        activeCount={activeCount}
        onApply={onApply}
        onOpenChange={onOpenChange}
        onReset={onReset}
        open={open}
        title="Filter Tagihan"
    >
        <DataTableFilterSelect
            label="Status"
            onValueChange={onStatusChange}
            options={billStatusOptions}
            value={pending.status}
        />
        <DataTableFilterDateInput
            label="Bulan Tagihan"
            onValueChange={onBillingMonthChange}
            value={pending.billingMonth}
        />
    </DataTableFilterDialog>
);

export default memo(BillListFiltersView);
