import { useQuery } from '@tanstack/react-query';

import { fetchBillStats } from '@/api/bills';
import { queryKeys } from '@/lib/query-keys';

import BillListStatsView from './view';

const BillListStats = () => {
    const {
        data: stats,
        isError: isErrorStats,
        isLoading: isLoadingStats,
    } = useQuery({
        queryFn: () => fetchBillStats(),
        queryKey: queryKeys.bills.stats(),
    });

    return (
        <BillListStatsView
            isErrorStats={isErrorStats}
            isLoadingStats={isLoadingStats}
            stats={stats?.data}
        />
    );
};

export default BillListStats;
