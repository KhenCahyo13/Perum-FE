import { DataTableProvider } from '@/components/datatable';

import ResidentListView from './view';

const ResidentList = () => (
    <DataTableProvider>
        <ResidentListView />
    </DataTableProvider>
);

export default ResidentList;
