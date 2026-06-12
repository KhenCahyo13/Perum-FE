import {
    IconFileInvoice,
    IconHome2,
    IconMoneybag,
    IconUsers,
} from '@tabler/icons-react';

import { StatsCard } from '@/components/data';

import type { SummaryStatsProps } from './types';

const SummaryStatsView = ({
    bills,
    expenses,
    houses,
    residents,
}: SummaryStatsProps) => (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatsCard
            containerClassName="bg-white"
            icon={IconHome2}
            iconContainerColor="bg-blue-100 text-blue-600"
            textColor="text-blue-600"
            title="Total Rumah"
            value={houses?.totalHouses ?? 0}
        />
        <StatsCard
            containerClassName="bg-white"
            icon={IconUsers}
            iconContainerColor="bg-purple-100 text-purple-600"
            textColor="text-purple-600"
            title="Total Penghuni"
            value={residents?.totalResidents ?? 0}
        />
        <StatsCard
            containerClassName="bg-white"
            icon={IconFileInvoice}
            iconContainerColor="bg-yellow-100 text-yellow-600"
            textColor="text-yellow-600"
            title="Total Tagihan"
            value={bills?.totalBills ?? 0}
        />
        <StatsCard
            containerClassName="bg-white"
            icon={IconMoneybag}
            iconContainerColor="bg-orange-100 text-orange-600"
            textColor="text-orange-600"
            title="Total Pengeluaran"
            value={expenses?.totalExpenses ?? 0}
        />
    </div>
);

export default SummaryStatsView;
