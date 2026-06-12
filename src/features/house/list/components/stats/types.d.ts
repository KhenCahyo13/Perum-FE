import type { HouseStats } from '@/types/house';

export interface HouseListStatsViewProps {
    isErrorStats: boolean;
    isLoadingStats: boolean;
    stats: HouseStats | undefined;
}
