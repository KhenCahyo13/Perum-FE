import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { formatCurrency } from '@/lib/currency';

import type { MonthlyChartProps } from './types';

const chartConfig = {
    expenses: {
        color: 'hsl(var(--destructive))',
        label: 'Pengeluaran',
    },
    income: {
        color: 'hsl(var(--primary))',
        label: 'Pemasukan',
    },
} satisfies ChartConfig;

const formatMonthLabel = (value: string) => {
    const [year, month] = value.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString('id-ID', { month: 'short' });
};

const MonthlyChartView = ({ data }: MonthlyChartProps) => (
    <Card>
        <CardHeader>
            <CardTitle>Keuangan Bulanan</CardTitle>
            <CardDescription>
                Pemasukan dan pengeluaran 12 bulan terakhir
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer className="h-72 w-full" config={chartConfig}>
                <BarChart
                    data={data}
                    margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        axisLine={false}
                        dataKey="month"
                        tickFormatter={formatMonthLabel}
                        tickLine={false}
                        tickMargin={8}
                    />
                    <YAxis
                        axisLine={false}
                        tickFormatter={(v: number) =>
                            `${(v / 1_000_000).toFixed(0)}jt`
                        }
                        tickLine={false}
                        tickMargin={8}
                        width={48}
                    />
                    <ChartTooltip
                        content={
                            <ChartTooltipContent
                                formatter={(value, name) => (
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted-foreground">
                                            {chartConfig[
                                                name as keyof typeof chartConfig
                                            ]?.label ?? name}
                                        </span>
                                        <span className="font-mono font-medium">
                                            {formatCurrency(Number(value))}
                                        </span>
                                    </div>
                                )}
                                labelFormatter={(label) => {
                                    const [year, month] = (
                                        label as string
                                    ).split('-');
                                    const date = new Date(
                                        Number(year),
                                        Number(month) - 1
                                    );
                                    return date.toLocaleDateString('id-ID', {
                                        month: 'long',
                                        year: 'numeric',
                                    });
                                }}
                            />
                        }
                        cursor={false}
                    />
                    <Bar
                        dataKey="income"
                        fill="var(--color-income)"
                        radius={[4, 4, 0, 0]}
                    />
                    <Bar
                        dataKey="expenses"
                        fill="var(--color-expenses)"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ChartContainer>
        </CardContent>
    </Card>
);

export default MonthlyChartView;
