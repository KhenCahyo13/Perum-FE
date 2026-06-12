import { memo, useCallback, useState } from 'react';

import { useDataTableContext } from '@/components/datatable';
import type { BillStatusRaw } from '@/types/bill';

import type { BillListFiltersProps, BillListFiltersValue } from './types';
import BillListFiltersView from './view';

const BillListFilters = ({ currentFilters, onApply }: BillListFiltersProps) => {
    const activeCount = useDataTableContext((s) => s.filters.length);
    const [open, setOpen] = useState(false);
    const [pending, setPending] =
        useState<BillListFiltersValue>(currentFilters);

    const handleOpenChange = useCallback(
        (val: boolean) => {
            if (val) setPending(currentFilters);
            setOpen(val);
        },
        [currentFilters]
    );

    const handleStatusChange = useCallback((value: string | undefined) => {
        setPending((prev) => ({
            ...prev,
            status: value as BillStatusRaw,
        }));
    }, []);

    const handleBillingMonthChange = useCallback(
        (value: string | undefined) => {
            setPending((prev) => ({ ...prev, billingMonth: value }));
        },
        []
    );

    const handleApply = useCallback(() => {
        onApply(pending);
        setOpen(false);
    }, [onApply, pending]);

    const handleReset = useCallback(() => {
        const empty: BillListFiltersValue = {};
        setPending(empty);
        onApply(empty);
        setOpen(false);
    }, [onApply]);

    return (
        <BillListFiltersView
            activeCount={activeCount}
            onApply={handleApply}
            onBillingMonthChange={handleBillingMonthChange}
            onOpenChange={handleOpenChange}
            onReset={handleReset}
            onStatusChange={handleStatusChange}
            open={open}
            pending={pending}
        />
    );
};

export default memo(BillListFilters);
