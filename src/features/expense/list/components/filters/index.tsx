import { memo, useCallback, useState } from 'react';

import { useDataTableContext } from '@/components/datatable';

import type { ExpenseListFiltersProps, ExpenseListFiltersValue } from './types';
import ExpenseListFiltersView from './view';

const ExpenseListFilters = ({
    categoryOptions,
    currentFilters,
    onApply,
}: ExpenseListFiltersProps) => {
    const activeCount = useDataTableContext((s) => s.filters.length);
    const [open, setOpen] = useState(false);
    const [pending, setPending] =
        useState<ExpenseListFiltersValue>(currentFilters);

    const handleOpenChange = useCallback(
        (val: boolean) => {
            if (val) setPending(currentFilters);
            setOpen(val);
        },
        [currentFilters]
    );

    const handleCategoryChange = useCallback((value: string | undefined) => {
        setPending((prev) => ({ ...prev, categoryId: value }));
    }, []);

    const handleIsRecurringChange = useCallback((value: string | undefined) => {
        setPending((prev) => ({
            ...prev,
            isRecurring: value === undefined ? undefined : value === 'true',
        }));
    }, []);

    const handleMonthChange = useCallback((value: string | undefined) => {
        setPending((prev) => ({
            ...prev,
            month: value ? value.slice(0, 7) : undefined,
        }));
    }, []);

    const handleApply = useCallback(() => {
        onApply(pending);
        setOpen(false);
    }, [onApply, pending]);

    const handleReset = useCallback(() => {
        const empty: ExpenseListFiltersValue = {};
        setPending(empty);
        onApply(empty);
        setOpen(false);
    }, [onApply]);

    return (
        <ExpenseListFiltersView
            activeCount={activeCount}
            categoryOptions={categoryOptions}
            onApply={handleApply}
            onCategoryChange={handleCategoryChange}
            onIsRecurringChange={handleIsRecurringChange}
            onMonthChange={handleMonthChange}
            onOpenChange={handleOpenChange}
            onReset={handleReset}
            open={open}
            pending={pending}
        />
    );
};

export default memo(ExpenseListFilters);
