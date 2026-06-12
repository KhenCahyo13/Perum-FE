import { useQuery } from '@tanstack/react-query';

import { fetchResidentStats } from '@/api/residents';
import { queryKeys } from '@/lib/query-keys';

import ResidentListStatsView from './view';

const ResidentListStats = () => {
    const { data, isError, isLoading } = useQuery({
        queryFn: fetchResidentStats,
        queryKey: queryKeys.residents.stats(),
    });

    return (
        <ResidentListStatsView
            isErrorStats={isError}
            isLoadingStats={isLoading}
            stats={data?.data}
        />
    );
};

export default ResidentListStats;
