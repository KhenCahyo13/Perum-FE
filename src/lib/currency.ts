export const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        style: 'currency',
    }).format(amount);
