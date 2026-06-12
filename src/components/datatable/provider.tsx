import { memo, type ReactNode, useState } from 'react';

import {
    createDataTableStore,
    type DataTableState,
} from '@/stores/datatable-store';

import { DataTableContext } from './context';

interface DataTableProviderProps {
    children: ReactNode;
    initialState?: Partial<DataTableState>;
}

function DataTableProviderBase({
    children,
    initialState,
}: DataTableProviderProps) {
    const [store] = useState(() => createDataTableStore(initialState));

    return (
        <DataTableContext.Provider value={store}>
            {children}
        </DataTableContext.Provider>
    );
}

export const DataTableProvider = memo(
    DataTableProviderBase
) as typeof DataTableProviderBase;
