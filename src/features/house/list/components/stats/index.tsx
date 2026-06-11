import { useQuery } from '@tanstack/react-query';

import { fetchHouseStats } from '@/api/houses';
import { queryKeys } from '@/lib/query-keys';

import HouseListStatsView from './view';

const HouseListStats = () => {
    const {
        data: stats,
        isError: isErrorStats,
        isLoading: isLoadingStats,
    } = useQuery({
        queryFn: () => fetchHouseStats(),
        queryKey: queryKeys.houses.stats(),
    });

    return (
        <HouseListStatsView
            isErrorStats={isErrorStats}
            isLoadingStats={isLoadingStats}
            stats={stats?.data}
        />
    );
};

export default HouseListStats;
