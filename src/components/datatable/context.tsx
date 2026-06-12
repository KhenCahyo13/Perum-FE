import { createContext, useContext } from 'react';
import type { StoreApi } from 'zustand';
import { useStore } from 'zustand';

import type { DataTableStore } from '@/stores/datatable-store';

export const DataTableContext = createContext<null | StoreApi<DataTableStore>>(
    null
);

export const useDataTableContext = <T,>(
    selector: (state: DataTableStore) => T
): T => {
    const store = useContext(DataTableContext);

    if (!store) {
        throw new Error(
            'useDataTableContext must be used within <DataTableProvider>'
        );
    }

    return useStore(store, selector);
};
