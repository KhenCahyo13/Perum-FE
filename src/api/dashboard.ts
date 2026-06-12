import { authenticatedApi } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { DashboardData } from '@/types/dashboard';

const DASHBOARD_API_URL = '/reports/dashboard';

export const fetchDashboard = async (): Promise<ApiResponse<DashboardData>> => {
    const { data } = await authenticatedApi.get(DASHBOARD_API_URL);

    return data as ApiResponse<DashboardData>;
};
