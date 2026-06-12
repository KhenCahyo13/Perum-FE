export const formatBillingMonth = (value: string): string => {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric',
    });
};
