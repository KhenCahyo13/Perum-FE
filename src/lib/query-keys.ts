import type { FetchHousesParams } from '@/api/houses';
import type { FetchResidentsParams } from '@/api/residents';

export const queryKeys = {
    houses: {
        all: ['houses'] as const,
        detail: (id: string) =>
            [...queryKeys.houses.all, 'detail', id] as const,
        list: (params?: FetchHousesParams) =>
            [...queryKeys.houses.all, 'list', params] as const,
        stats: () => [...queryKeys.houses.all, 'stats'] as const,
    },
    residents: {
        all: ['residents'] as const,
        detail: (id: string) =>
            [...queryKeys.residents.all, 'detail', id] as const,
        list: (params?: FetchResidentsParams) =>
            [...queryKeys.residents.all, 'list', params] as const,
        stats: () => [...queryKeys.residents.all, 'stats'] as const,
    },
};
