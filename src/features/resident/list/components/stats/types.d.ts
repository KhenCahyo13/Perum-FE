import type { ResidentStats } from '@/types/resident';

export interface ResidentListStatsViewProps {
    isErrorStats: boolean;
    isLoadingStats: boolean;
    stats: ResidentStats | undefined;
}
