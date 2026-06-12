import type { SummaryStatsProps } from './types';
import SummaryStatsView from './view';

const SummaryStats = (props: SummaryStatsProps) => (
    <SummaryStatsView {...props} />
);

export default SummaryStats;
