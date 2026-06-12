import {
    IconCash,
    IconCircleOff,
    IconReceipt,
    IconRefresh,
} from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper } from '@/components/layout';
import { formatCurrency } from '@/lib/currency';

import type { ExpenseListStatsViewProps } from './types';

const ExpenseListStatsView = ({
    isErrorStats,
    isLoadingStats,
    stats,
}: ExpenseListStatsViewProps) => (
    <InsideSheetWrapper
        subtitle="Laporan singkat mengenai data pengeluaran Anda"
        title="Laporan Pengeluaran"
    >
        {isLoadingStats ? (
            <LoaderFallback label="Memuat laporan..." />
        ) : isErrorStats ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat data laporan"
            />
        ) : (
            <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-full">
                    <StatsCard
                        icon={IconReceipt}
                        iconContainerColor="bg-blue-100 text-blue-600"
                        textColor="text-blue-600"
                        title="Total Pengeluaran"
                        value={stats?.totalExpenses ?? 0}
                    />
                </div>
                <div className="md:col-span-full">
                    <StatsCard
                        icon={IconCash}
                        iconContainerColor="bg-red-100 text-red-600"
                        textColor="text-red-600"
                        title="Total Nominal"
                        value={formatCurrency(stats?.totalExpenseAmount ?? 0)}
                    />
                </div>
                <StatsCard
                    icon={IconRefresh}
                    iconContainerColor="bg-indigo-100 text-indigo-600"
                    textColor="text-indigo-600"
                    title="Rutin"
                    value={stats?.totalRecurringExpenses ?? 0}
                />
                <StatsCard
                    icon={IconCircleOff}
                    iconContainerColor="bg-gray-100 text-gray-600"
                    textColor="text-gray-600"
                    title="Non-Rutin"
                    value={stats?.totalNonRecurringExpenses ?? 0}
                />
                <StatsCard
                    icon={IconCash}
                    iconContainerColor="bg-indigo-100 text-indigo-600"
                    textColor="text-indigo-600"
                    title="Nominal Rutin"
                    value={formatCurrency(stats?.totalRecurringAmount ?? 0)}
                />
                <StatsCard
                    icon={IconCash}
                    iconContainerColor="bg-gray-100 text-gray-600"
                    textColor="text-gray-600"
                    title="Nominal Non-Rutin"
                    value={formatCurrency(stats?.totalNonRecurringAmount ?? 0)}
                />
            </div>
        )}
    </InsideSheetWrapper>
);

export default ExpenseListStatsView;
