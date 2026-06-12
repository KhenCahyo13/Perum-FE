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
    isRemovingResident: boolean;
    onClose: () => void;
    onDelete: () => void;
    onEdit: () => void;
    onRemoveResident: () => void;
}
