export type HouseStatusType = 'Dihuni' | 'Kosong';

export interface HouseList {
    address: string;
    houseNumber: string;
    id: string;
    status: HouseStatusType;
}

export interface HouseStats {
    occupiedHouses: number;
    totalHouses: number;
    vacantHouses: number;
}
