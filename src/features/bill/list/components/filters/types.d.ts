import type { BillStatusRaw } from '@/types/bill';

export interface BillListFiltersValue {
    billingMonth?: string;
    status?: BillStatusRaw;
}

export interface BillListFiltersProps {
    currentFilters: BillListFiltersValue;
    onApply: (filters: BillListFiltersValue) => void;
}

export interface BillListFiltersViewProps {
    activeCount: number;
    onApply: () => void;
    onBillingMonthChange: (value: string | undefined) => void;
    onOpenChange: (open: boolean) => void;
    onReset: () => void;
    onStatusChange: (value: string | undefined) => void;
    open: boolean;
    pending: BillListFiltersValue;
}
