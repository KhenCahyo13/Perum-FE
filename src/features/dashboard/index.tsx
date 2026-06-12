import { useQuery } from '@tanstack/react-query';

import { fetchDashboard } from '@/api/dashboard';
import { queryKeys } from '@/lib/query-keys';

import DashboardView from './view';

const Dashboard = () => {
    const { data, isError, isLoading } = useQuery({
        queryFn: fetchDashboard,
        queryKey: queryKeys.dashboard.summary(),
    });

    return (
        <DashboardView
            data={data?.data}
            isError={isError}
            isLoading={isLoading}
        />
    );
};

export default Dashboard;
