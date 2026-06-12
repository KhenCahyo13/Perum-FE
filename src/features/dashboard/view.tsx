import { memo } from 'react';

import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { PageWrapper } from '@/components/layout';
import type { DashboardData } from '@/types/dashboard';

import BillStats from './components/bill-stats';
import ExpenseStats from './components/expense-stats';
import HouseStats from './components/house-stats';
import MonthlyChart from './components/monthly-chart';
import SummaryStats from './components/summary-stats';

interface DashboardViewProps {
    data?: DashboardData;
    isError: boolean;
    isLoading: boolean;
}

const DashboardViewBase = ({
    data,
    isError,
    isLoading,
}: DashboardViewProps) => (
    <PageWrapper description="Ringkasan data perumahan Anda" title="Dashboard">
        {isLoading ? (
            <LoaderFallback label="Memuat dashboard..." />
        ) : isError ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat data dashboard"
            />
        ) : (
            <>
                <SummaryStats
                    bills={data?.bills}
                    expenses={data?.expenses}
                    houses={data?.houses}
                    residents={data?.residents}
                />
                <MonthlyChart data={data?.monthly ?? []} />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <HouseStats houses={data?.houses} />
                    <BillStats bills={data?.bills} />
                    <ExpenseStats expenses={data?.expenses} />
                </div>
            </>
        )}
    </PageWrapper>
);

export default memo(DashboardViewBase);
