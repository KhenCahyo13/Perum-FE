import { PageWrapper } from '@/components/layout';

import HouseListDataTable from './components/datatable';
import HouseListStats from './components/stats';

const HouseListView = () => (
    <PageWrapper
        description="Manajemen data rumah Anda dengan mudah"
        insideSheetContent={
            <>
                <HouseListStats />
            </>
        }
        title="Rumah"
    >
        <HouseListDataTable />
    </PageWrapper>
);

export default HouseListView;
