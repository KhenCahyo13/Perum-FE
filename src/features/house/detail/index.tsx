import { useQuery } from '@tanstack/react-query';

import { fetchHouseById } from '@/api/houses';
import { queryKeys } from '@/lib/query-keys';

import type { HouseDetailProps } from './types';
import HouseDetailView from './view';

const HouseDetail = ({ houseId, onClose }: HouseDetailProps) => {
    const { data, isError, isLoading } = useQuery({
        queryFn: () => fetchHouseById(houseId),
        queryKey: queryKeys.houses.detail(houseId),
    });

    return (
        <HouseDetailView
            house={data?.data}
            isError={isError}
            isLoading={isLoading}
            onClose={onClose}
        />
    );
};

export default HouseDetail;
