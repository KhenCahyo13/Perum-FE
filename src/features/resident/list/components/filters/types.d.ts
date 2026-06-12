import type { ResidentType } from '@/types/resident';

export interface ResidentListFiltersValue {
    residentType?: ResidentType;
}

export interface ResidentListFiltersProps {
    currentFilters: ResidentListFiltersValue;
    onApply: (filters: ResidentListFiltersValue) => void;
}

export interface ResidentListFiltersViewProps {
    activeCount: number;
    onApply: () => void;
    onOpenChange: (open: boolean) => void;
    onReset: () => void;
    onResidentTypeChange: (value: string | undefined) => void;
    open: boolean;
    pending: ResidentListFiltersValue;
}
