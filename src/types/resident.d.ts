export type ResidentType = 'Kontrak' | 'Tetap';

export interface ResidentList {
    fullName: string;
    houseAddress: string;
    houseNumber: string;
    id: string;
    isMarried: boolean;
    phoneNumber: string;
    residentType: ResidentType;
}

export interface ResidentDetail extends ResidentList {
    ktpFileUrl: string;
}

export interface ResidentStats {
    totalContractResidents: number;
    totalMarriedResidents: number;
    totalPermanentResidents: number;
    totalResidents: number;
    totalSingleResidents: number;
}
