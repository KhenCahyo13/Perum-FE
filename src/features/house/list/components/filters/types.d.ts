import type { HouseStatusType } from '@/types/house';

export interface HouseListFiltersValue {
    status?: HouseStatusType;
}

export interface HouseListFiltersProps {
    currentFilters: HouseListFiltersValue;
    onApply: (filters: HouseListFiltersValue) => void;
}

export interface HouseListFiltersViewProps {
    activeCount: number;
    onApply: () => void;
    onOpenChange: (open: boolean) => void;
    onReset: () => void;
    onStatusChange: (value: string | undefined) => void;
    open: boolean;
    pending: HouseListFiltersValue;
}
