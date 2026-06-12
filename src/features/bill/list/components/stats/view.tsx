import {
    IconCash,
    IconCircleCheck,
    IconCircleX,
    IconClock,
    IconReceipt,
} from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper } from '@/components/layout';
import { formatCurrency } from '@/lib/currency';

import type { BillListStatsViewProps } from './types';

const BillListStatsView = ({
    isErrorStats,
    isLoadingStats,
    stats,
}: BillListStatsViewProps) => (
    <InsideSheetWrapper
        subtitle="Laporan singkat mengenai data tagihan Anda"
        title="Laporan Tagihan"
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
                <StatsCard
                    icon={IconReceipt}
                    iconContainerColor="bg-blue-100 text-blue-600"
                    textColor="text-blue-600"
                    title="Total Tagihan"
                    value={stats?.totalBills ?? 0}
                />
                <StatsCard
                    icon={IconClock}
                    iconContainerColor="bg-yellow-100 text-yellow-600"
                    textColor="text-yellow-600"
                    title="Belum Dibayar"
                    value={stats?.totalUnpaidBills ?? 0}
                />
                <StatsCard
                    icon={IconCircleX}
                    iconContainerColor="bg-red-100 text-red-600"
                    textColor="text-red-600"
                    title="Terlambat"
                    value={stats?.totalLateBills ?? 0}
                />
                <StatsCard
                    icon={IconCircleCheck}
                    iconContainerColor="bg-green-100 text-green-600"
                    textColor="text-green-600"
                    title="Lunas"
                    value={stats?.totalPaidBills ?? 0}
                />
                <div className="md:col-span-full">
                    <StatsCard
                        icon={IconCash}
                        iconContainerColor="bg-orange-100 text-orange-600"
                        textColor="text-orange-600"
                        title="Total Belum Dibayar"
                        value={formatCurrency(stats?.totalUnpaidAmount ?? 0)}
                    />
                </div>
                <div className="md:col-span-full">
                    <StatsCard
                        icon={IconCash}
                        iconContainerColor="bg-green-100 text-green-600"
                        textColor="text-green-600"
                        title="Total Sudah Dibayar"
                        value={formatCurrency(stats?.totalPaidAmount ?? 0)}
                    />
                </div>
            </div>
        )}
    </InsideSheetWrapper>
);

export default BillListStatsView;
