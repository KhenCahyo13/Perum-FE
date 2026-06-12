import { memo } from 'react';

import {
    DataTableFilterDateInput,
    DataTableFilterDialog,
    DataTableFilterSearchableSelect,
    DataTableFilterSelect,
} from '@/components/datatable';

import { isRecurringFilterOptions } from './data';
import type { ExpenseListFiltersViewProps } from './types';

const ExpenseListFiltersView = ({
    activeCount,
    categoryOptions,
    onApply,
    onCategoryChange,
    onIsRecurringChange,
    onMonthChange,
    onOpenChange,
    onReset,
    open,
    pending,
}: ExpenseListFiltersViewProps) => (
    <DataTableFilterDialog
        activeCount={activeCount}
        onApply={onApply}
        onOpenChange={onOpenChange}
        onReset={onReset}
        open={open}
        title="Filter Pengeluaran"
    >
        <DataTableFilterSearchableSelect
            label="Kategori"
            onValueChange={onCategoryChange}
            options={categoryOptions}
            value={pending.categoryId}
        />
        <DataTableFilterSelect
            label="Status Rutin"
            onValueChange={onIsRecurringChange}
            options={isRecurringFilterOptions}
            value={
                pending.isRecurring === undefined
                    ? undefined
                    : String(pending.isRecurring)
            }
        />
        <DataTableFilterDateInput
            label="Bulan"
            onValueChange={onMonthChange}
            value={pending.month}
        />
    </DataTableFilterDialog>
);

export default memo(ExpenseListFiltersView);
