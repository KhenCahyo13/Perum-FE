import { createStore } from 'zustand';

export interface DataTableState {
    filters: string[];
    limit: number;
    openFiltersDialog: boolean;
    page: number;
    search: string;
}

export interface DataTableActions {
    reset: () => void;
    setFilters: (filters: string[]) => void;
    setLimit: (limit: number) => void;
    setOpenFiltersDialog: (open: boolean) => void;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
}

export type DataTableStore = DataTableActions & DataTableState;

export const defaultDataTableState: DataTableState = {
    filters: [],
    limit: 10,
    openFiltersDialog: false,
    page: 1,
    search: '',
};

export const createDataTableStore = (initialState?: Partial<DataTableState>) =>
    createStore<DataTableStore>((set) => ({
        ...defaultDataTableState,
        ...initialState,
        reset: () => set(defaultDataTableState),
        setFilters: (filters) => set({ filters }),
        setLimit: (limit) => set({ limit, page: 1 }),
        setOpenFiltersDialog: (openFiltersDialog) => set({ openFiltersDialog }),
        setPage: (page) => set({ page }),
        setSearch: (search) => set({ page: 1, search }),
    }));
