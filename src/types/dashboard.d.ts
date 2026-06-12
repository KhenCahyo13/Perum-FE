import type { BillStats } from './bill';
import type { ExpenseStats } from './expense';

export interface HouseDashboardStats {
    occupiedHouses: number;
    totalHouses: number;
    vacantHouses: number;
}

export interface ResidentDashboardStats {
    totalContractResidents: number;
    totalMarriedResidents: number;
    totalPermanentResidents: number;
    totalResidents: number;
    totalSingleResidents: number;
}

export interface MonthlyFinancial {
    balance: number;
    expenses: number;
    income: number;
    month: string;
}

export interface DashboardData {
    bills: BillStats;
    expenses: ExpenseStats;
    houses: HouseDashboardStats;
    monthly: MonthlyFinancial[];
    residents: ResidentDashboardStats;
}
