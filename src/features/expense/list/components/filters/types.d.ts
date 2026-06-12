export interface ExpenseListFiltersValue {
    categoryId?: string;
    isRecurring?: boolean;
    month?: string;
}

export interface ExpenseListFiltersProps {
    categoryOptions: { label: string; value: string }[];
    currentFilters: ExpenseListFiltersValue;
    onApply: (filters: ExpenseListFiltersValue) => void;
}

export interface ExpenseListFiltersViewProps {
    activeCount: number;
    categoryOptions: { label: string; value: string }[];
    onApply: () => void;
    onCategoryChange: (value: string | undefined) => void;
    onIsRecurringChange: (value: string | undefined) => void;
    onMonthChange: (value: string | undefined) => void;
    onOpenChange: (open: boolean) => void;
    onReset: () => void;
    open: boolean;
    pending: ExpenseListFiltersValue;
}
