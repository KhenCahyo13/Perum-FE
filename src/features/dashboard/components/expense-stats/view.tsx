import {
    IconMoneybag,
    IconTrendingDown,
    IconTrendingUp,
} from '@tabler/icons-react';

import { StatsCard } from '@/components/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/currency';

import type { ExpenseStatsProps } from './types';

const ExpenseStatsView = ({ expenses }: ExpenseStatsProps) => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
                <IconMoneybag className="size-5 text-orange-600" />
                Rincian Pengeluaran
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
            <StatsCard
                icon={IconTrendingUp}
                iconContainerColor="bg-orange-100 text-orange-600"
                textColor="text-orange-600"
                title="Pengeluaran Rutin"
                value={formatCurrency(expenses?.totalRecurringAmount ?? 0)}
            />
            <StatsCard
                icon={IconTrendingDown}
                iconContainerColor="bg-yellow-100 text-yellow-600"
                textColor="text-yellow-600"
                title="Pengeluaran Non-Rutin"
                value={formatCurrency(expenses?.totalNonRecurringAmount ?? 0)}
            />
        </CardContent>
    </Card>
);

export default ExpenseStatsView;
