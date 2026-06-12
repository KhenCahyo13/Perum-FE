import { DataTableProvider } from '@/components/datatable';

import BillListView from './view';

const BillList = () => (
    <DataTableProvider>
        <BillListView />
    </DataTableProvider>
);

export default BillList;
