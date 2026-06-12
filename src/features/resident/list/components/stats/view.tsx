import {
    IconHeart,
    IconUser,
    IconUserCheck,
    IconUsers,
    IconUserX,
} from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper } from '@/components/layout';

import type { ResidentListStatsViewProps } from './types';

const ResidentListStatsView = ({
    isErrorStats,
    isLoadingStats,
    stats,
}: ResidentListStatsViewProps) => (
    <InsideSheetWrapper
        subtitle="Laporan singkat mengenai data penghuni Anda"
        title="Laporan Penghuni"
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
                        icon={IconUsers}
                        iconContainerColor="bg-blue-100 text-blue-600"
                        textColor="text-blue-600"
                        title="Total Penghuni"
                        value={stats?.totalResidents ?? 0}
                    />
                </div>
                <StatsCard
                    icon={IconUserCheck}
                    iconContainerColor="bg-green-100 text-green-600"
                    textColor="text-green-600"
                    title="Penghuni Tetap"
                    value={stats?.totalPermanentResidents ?? 0}
                />
                <StatsCard
                    icon={IconUser}
                    iconContainerColor="bg-yellow-100 text-yellow-600"
                    textColor="text-yellow-600"
                    title="Penghuni Kontrak"
                    value={stats?.totalContractResidents ?? 0}
                />
                <StatsCard
                    icon={IconHeart}
                    iconContainerColor="bg-pink-100 text-pink-600"
                    textColor="text-pink-600"
                    title="Sudah Menikah"
                    value={stats?.totalMarriedResidents ?? 0}
                />
                <StatsCard
                    icon={IconUserX}
                    iconContainerColor="bg-slate-100 text-slate-600"
                    textColor="text-slate-600"
                    title="Belum Menikah"
                    value={stats?.totalSingleResidents ?? 0}
                />
            </div>
        )}
    </InsideSheetWrapper>
);

export default ResidentListStatsView;
