export type HouseStatusType = 'Dihuni' | 'Kosong';
export type HouseResidentType = 'Kontrak' | 'Tetap';

export interface HouseList {
    address: string;
    houseNumber: string;
    id: string;
    status: HouseStatusType;
}

export interface HouseDetail extends HouseList {
    currentResident: HouseCurrentResident | null;
    history: HouseHistory[] | null;
}

export interface HouseCurrentResident {
    fullName: string;
    id: string;
    isMarried: boolean;
    ktpFileUrl: string;
    phoneNumber: string;
    residentType: HouseResidentType;
}

export interface HouseHistory {
    endDate: string;
    id: string;
    isActive: boolean;
    residentKtpFileUrl: string;
    residentName: string;
    residentPhoneNumber: string;
    startDate: string;
}

export interface HouseStats {
    occupiedHouses: number;
    totalHouses: number;
    vacantHouses: number;
}
