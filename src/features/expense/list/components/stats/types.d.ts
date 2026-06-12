import type { ExpenseStats } from '@/types/expense';

export interface ExpenseListStatsViewProps {
    isErrorStats: boolean;
    isLoadingStats: boolean;
    stats: ExpenseStats | undefined;
}
