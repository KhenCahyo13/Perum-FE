import type { ExpenseDetail } from '@/types/expense';

export interface ExpenseDetailProps {
    expenseId: string;
    onClose: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

export interface ExpenseDetailViewProps {
    expense: ExpenseDetail | undefined;
    isDeletingExpense: boolean;
    isError: boolean;
    isLoading: boolean;
    onClose: () => void;
    onDelete: () => void;
    onEdit: () => void;
}
