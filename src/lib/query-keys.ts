import type { FetchHousesParams } from '@/api/houses';

export const queryKeys = {
    houses: {
        all: ['houses'] as const,
        list: (params?: FetchHousesParams) =>
            [...queryKeys.houses.all, 'list', params] as const,
        stats: () => [...queryKeys.houses.all, 'stats'] as const,
    },
};
