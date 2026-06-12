import type { ExpenseStatsProps } from './types';
import ExpenseStatsView from './view';

const ExpenseStats = (props: ExpenseStatsProps) => (
    <ExpenseStatsView {...props} />
);

export default ExpenseStats;
