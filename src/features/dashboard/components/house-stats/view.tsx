import { IconBuildingCommunity, IconHome2 } from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { HouseStatsProps } from './types';

const HouseStatsView = ({ houses }: HouseStatsProps) => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
                <IconBuildingCommunity className="size-5 text-blue-600" />
                Status Rumah
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
            <StatsCard
                icon={IconHome2}
                iconContainerColor="bg-green-100 text-green-600"
                textColor="text-green-600"
                title="Terisi"
                value={houses?.occupiedHouses ?? 0}
            />
            <StatsCard
                icon={IconHome2}
                iconContainerColor="bg-gray-100 text-gray-600"
                textColor="text-gray-600"
                title="Kosong"
                value={houses?.vacantHouses ?? 0}
            />
        </CardContent>
    </Card>
);

export default HouseStatsView;
