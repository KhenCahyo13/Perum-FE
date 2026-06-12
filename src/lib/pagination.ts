export const getPaginationPages = (
    current: number,
    last: number
): ('ellipsis' | number)[] => {
    if (last <= 3) {
        return Array.from({ length: last }, (_, i) => i + 1);
    }

    const pages: ('ellipsis' | number)[] = [];

    pages.push(1);

    if (current > 3) {
        pages.push('ellipsis');
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(last - 1, current + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (current < last - 2) {
        pages.push('ellipsis');
    }

    pages.push(last);

    return pages;
};
