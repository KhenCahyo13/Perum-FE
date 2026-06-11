import type { HouseDetail } from '@/types/house';

export interface HouseDetailProps {
    houseId: string;
    onClose: () => void;
}

export interface HouseDetailViewProps {
    house: HouseDetail | undefined;
    isError: boolean;
    isLoading: boolean;
    onClose: () => void;
}
