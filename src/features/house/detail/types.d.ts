import type { HouseDetail } from '@/types/house';

export interface HouseDetailProps {
    houseId: string;
    onClose: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

export interface HouseDetailViewProps {
    house: HouseDetail | undefined;
    isDeletingHouse: boolean;
    isError: boolean;
    isLoading: boolean;
    onClose: () => void;
    onDelete: () => void;
    onEdit: () => void;
}
