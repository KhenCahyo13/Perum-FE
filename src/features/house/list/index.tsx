import { DataTableProvider } from '@/components/datatable';

import HouseListView from './view';

const HouseList = () => (
    <DataTableProvider>
        <HouseListView />
    </DataTableProvider>
);

export default HouseList;
