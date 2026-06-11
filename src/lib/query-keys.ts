import type { FetchHousesParams } from '@/api/houses';

export const queryKeys = {
    houses: {
        all: ['houses'] as const,
        detail: (id: string) =>
            [...queryKeys.houses.all, 'detail', id] as const,
        list: (params?: FetchHousesParams) =>
            [...queryKeys.houses.all, 'list', params] as const,
        stats: () => [...queryKeys.houses.all, 'stats'] as const,
    },
};
