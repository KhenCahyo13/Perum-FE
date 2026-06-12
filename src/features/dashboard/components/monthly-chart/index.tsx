import type { MonthlyChartProps } from './types';
import MonthlyChartView from './view';

const MonthlyChart = (props: MonthlyChartProps) => (
    <MonthlyChartView {...props} />
);

export default MonthlyChart;
