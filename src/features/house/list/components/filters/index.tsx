import { type FC, memo, useCallback, useState } from 'react';

import { useDataTableContext } from '@/components/datatable';
import type { HouseStatusType } from '@/types/house';

import type { HouseListFiltersProps, HouseListFiltersValue } from './types';
import HouseListFiltersView from './view';

const HouseListFilters: FC<HouseListFiltersProps> = ({
    currentFilters,
    onApply,
}) => {
    const activeCount = useDataTableContext((s) => s.filters.length);
    const [open, setOpen] = useState(false);
    const [pending, setPending] =
        useState<HouseListFiltersValue>(currentFilters);

    const handleOpenChange = useCallback(
        (val: boolean) => {
            if (val) setPending(currentFilters);
            setOpen(val);
        },
        [currentFilters]
    );

    const handleStatusChange = useCallback((value: string | undefined) => {
        setPending((prev) => ({ ...prev, status: value as HouseStatusType }));
    }, []);

    const handleApply = useCallback(() => {
        onApply(pending);
        setOpen(false);
    }, [onApply, pending]);

    const handleReset = useCallback(() => {
        const empty: HouseListFiltersValue = {};
        setPending(empty);
        onApply(empty);
        setOpen(false);
    }, [onApply]);

    return (
        <HouseListFiltersView
            activeCount={activeCount}
            onApply={handleApply}
            onOpenChange={handleOpenChange}
            onReset={handleReset}
            onStatusChange={handleStatusChange}
            open={open}
            pending={pending}
        />
    );
};

export default memo(HouseListFilters);
