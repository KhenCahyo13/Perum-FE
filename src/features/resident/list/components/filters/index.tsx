import { memo, useCallback, useState } from 'react';

import { useDataTableContext } from '@/components/datatable';
import type { ResidentType } from '@/types/resident';

import type {
    ResidentListFiltersProps,
    ResidentListFiltersValue,
} from './types';
import ResidentListFiltersView from './view';

const ResidentListFilters = ({
    currentFilters,
    onApply,
}: ResidentListFiltersProps) => {
    const activeCount = useDataTableContext((s) => s.filters.length);
    const [open, setOpen] = useState(false);
    const [pending, setPending] =
        useState<ResidentListFiltersValue>(currentFilters);

    const handleOpenChange = useCallback(
        (val: boolean) => {
            if (val) setPending(currentFilters);
            setOpen(val);
        },
        [currentFilters]
    );

    const handleResidentTypeChange = useCallback(
        (value: string | undefined) => {
            setPending((prev) => ({
                ...prev,
                residentType: value as ResidentType,
            }));
        },
        []
    );

    const handleApply = useCallback(() => {
        onApply(pending);
        setOpen(false);
    }, [onApply, pending]);

    const handleReset = useCallback(() => {
        const empty: ResidentListFiltersValue = {};
        setPending(empty);
        onApply(empty);
        setOpen(false);
    }, [onApply]);

    return (
        <ResidentListFiltersView
            activeCount={activeCount}
            onApply={handleApply}
            onOpenChange={handleOpenChange}
            onReset={handleReset}
            onResidentTypeChange={handleResidentTypeChange}
            open={open}
            pending={pending}
        />
    );
};

export default memo(ResidentListFilters);
