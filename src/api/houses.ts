import { authenticatedApi } from '@/lib/axios';
import type { ApiPagination, ApiResponse } from '@/types/api';
import type {
    HouseDetail,
    HouseList,
    HouseStats,
    HouseStatusType,
} from '@/types/house';

const HOUSE_API_URL = '/houses';

export interface FetchHousesParams {
    limit?: number;
    page?: number;
    search?: string;
    status?: HouseStatusType;
}

export const fetchHouses = async (
    params?: FetchHousesParams
): Promise<ApiResponse<HouseList[], ApiPagination>> => {
    const { data } = await authenticatedApi.get(HOUSE_API_URL, { params });

    return data as ApiResponse<HouseList[], ApiPagination>;
};

export const fetchHouseById = async (
    id: string
): Promise<ApiResponse<HouseDetail>> => {
    const { data } = await authenticatedApi.get(`${HOUSE_API_URL}/${id}`);

    return data as ApiResponse<HouseDetail>;
};

export const fetchHouseStats = async (): Promise<ApiResponse<HouseStats>> => {
    const { data } = await authenticatedApi.get(`${HOUSE_API_URL}/stats`);

    return data as ApiResponse<HouseStats>;
};
