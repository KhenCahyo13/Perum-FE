export type BillStatusType = 'Belum Dibayar' | 'Lunas' | 'Terlambat';
export type BillStatusRaw = 'late' | 'paid' | 'unpaid';

export interface BillList {
    amount: number;
    billingMonth: string;
    dueDate: string;
    feeTypeName: string;
    houseNumber: string;
    id: string;
    residentName: string;
    status: BillStatusType;
}

export interface BillPayment {
    amount: number;
    id: string;
    notes: null | string;
    paymentDate: string;
}

export interface BillDetail extends BillList {
    payment: BillPayment | null;
}

export interface BillStats {
    totalBills: number;
    totalLateBills: number;
    totalPaidAmount: number;
    totalPaidBills: number;
    totalUnpaidAmount: number;
    totalUnpaidBills: number;
}
