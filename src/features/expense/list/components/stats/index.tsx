import { useQuery } from '@tanstack/react-query';

import { fetchExpenseStats } from '@/api/expenses';
import { queryKeys } from '@/lib/query-keys';

import ExpenseListStatsView from './view';

const ExpenseListStats = () => {
    const {
        data: stats,
        isError: isErrorStats,
        isLoading: isLoadingStats,
    } = useQuery({
        queryFn: () => fetchExpenseStats(),
        queryKey: queryKeys.expenses.stats(),
    });

    return (
        <ExpenseListStatsView
            isErrorStats={isErrorStats}
            isLoadingStats={isLoadingStats}
            stats={stats?.data}
        />
    );
};

export default ExpenseListStats;
