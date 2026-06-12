export interface ExpenseList {
    amount: number;
    categoryName: string;
    date: string;
    description: null | string;
    id: string;
    isRecurring: boolean;
}

export type ExpenseDetail = ExpenseList;

export interface ExpenseStats {
    totalExpenseAmount: number;
    totalExpenses: number;
    totalNonRecurringAmount: number;
    totalNonRecurringExpenses: number;
    totalRecurringAmount: number;
    totalRecurringExpenses: number;
}
