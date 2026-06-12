import { DataTableProvider } from '@/components/datatable';

import ExpenseListView from './view';

const ExpenseList = () => (
    <DataTableProvider>
        <ExpenseListView />
    </DataTableProvider>
);

export default ExpenseList;
