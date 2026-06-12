import { authenticatedApi } from '@/lib/axios';
import type { ApiPagination, ApiResponse } from '@/types/api';
import type {
    ResidentDetail,
    ResidentList,
    ResidentStats,
    ResidentType,
} from '@/types/resident';

const RESIDENT_API_URL = '/residents';

export interface FetchResidentsParams {
    limit?: number;
    page?: number;
    residentType?: ResidentType;
    search?: string;
}

export const fetchResidents = async (
    params?: FetchResidentsParams
): Promise<ApiResponse<ResidentList[], ApiPagination>> => {
    const { data } = await authenticatedApi.get(RESIDENT_API_URL, { params });

    return data as ApiResponse<ResidentList[], ApiPagination>;
};

export const fetchResidentById = async (
    id: string
): Promise<ApiResponse<ResidentDetail>> => {
    const { data } = await authenticatedApi.get(`${RESIDENT_API_URL}/${id}`);

    return data as ApiResponse<ResidentDetail>;
};

export const fetchResidentStats = async (): Promise<
    ApiResponse<ResidentStats>
> => {
    const { data } = await authenticatedApi.get(`${RESIDENT_API_URL}/stats`);

    return data as ApiResponse<ResidentStats>;
};
