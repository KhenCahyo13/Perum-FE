import { IconCash, IconFileInvoice } from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/currency';

import type { BillStatsProps } from './types';

const BillStatsView = ({ bills }: BillStatsProps) => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
                <IconFileInvoice className="size-5 text-yellow-600" />
                Status Tagihan
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
            <StatsCard
                icon={IconCash}
                iconContainerColor="bg-green-100 text-green-600"
                textColor="text-green-600"
                title="Total Terbayar"
                value={formatCurrency(bills?.totalPaidAmount ?? 0)}
            />
            <StatsCard
                icon={IconCash}
                iconContainerColor="bg-red-100 text-red-600"
                textColor="text-red-600"
                title="Total Belum Dibayar"
                value={formatCurrency(bills?.totalUnpaidAmount ?? 0)}
            />
        </CardContent>
    </Card>
);

export default BillStatsView;
