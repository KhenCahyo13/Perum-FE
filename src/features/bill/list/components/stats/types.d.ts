import type { BillStats } from '@/types/bill';

export interface BillListStatsViewProps {
    isErrorStats: boolean;
    isLoadingStats: boolean;
    stats: BillStats | undefined;
}
