import {
    IconBuildingCommunity,
    IconDoorEnter,
    IconDoorOff,
} from '@tabler/icons-react';
import type { FC } from 'react';

import { StatsCard } from '@/components/data/stats-card';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper } from '@/components/layout';

import type { HouseListStatsViewProps } from './types';

const HouseListStatsView: FC<HouseListStatsViewProps> = ({
    isErrorStats,
    isLoadingStats,
    stats,
}) => (
    <InsideSheetWrapper
        subtitle="Laporan singkat mengenai data rumah Anda"
        title="Laporan Rumah"
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
                        icon={IconBuildingCommunity}
                        iconContainerColor="bg-blue-100 text-blue-600"
                        title="Total Rumah"
                        value={stats?.totalHouses ?? 0}
                    />
                </div>
                <StatsCard
                    icon={IconDoorEnter}
                    iconContainerColor="bg-green-100 text-green-600"
                    textColor="text-green-600"
                    title="Total Rumah Dihuni"
                    value={stats?.occupiedHouses ?? 0}
                />
                <StatsCard
                    icon={IconDoorOff}
                    iconContainerColor="bg-yellow-100 text-yellow-600"
                    textColor="text-yellow-600"
                    title="Total Rumah Kosong"
                    value={stats?.vacantHouses ?? 0}
                />
            </div>
        )}
    </InsideSheetWrapper>
);

export default HouseListStatsView;
