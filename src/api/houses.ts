import type { CreateHouseFormValues } from '@/features/house/create/types';
import type { UpdateHouseFormValues } from '@/features/house/update/types';
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

export const createHouse = async (
    payload: CreateHouseFormValues
): Promise<ApiResponse<HouseList>> => {
    const { data } = await authenticatedApi.post(HOUSE_API_URL, payload);

    return data as ApiResponse<HouseList>;
};

export const updateHouse = async (
    id: string,
    payload: UpdateHouseFormValues
): Promise<ApiResponse<HouseList>> => {
    const { data } = await authenticatedApi.patch(
        `${HOUSE_API_URL}/${id}`,
        payload
    );

    return data as ApiResponse<HouseList>;
};

export const deleteHouse = async (id: string): Promise<void> => {
    await authenticatedApi.delete(`${HOUSE_API_URL}/${id}`);
};

export const removeResident = async (id: string): Promise<void> => {
    await authenticatedApi.delete(`${HOUSE_API_URL}/${id}/remove-resident`);
};
