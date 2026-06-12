import type { BillStats } from '@/types/bill';
import type {
    HouseDashboardStats,
    ResidentDashboardStats,
} from '@/types/dashboard';
import type { ExpenseStats } from '@/types/expense';

export interface SummaryStatsProps {
    bills: BillStats | undefined;
    expenses: ExpenseStats | undefined;
    houses: HouseDashboardStats | undefined;
    residents: ResidentDashboardStats | undefined;
}
