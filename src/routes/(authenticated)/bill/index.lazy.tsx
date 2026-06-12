import { createLazyFileRoute } from '@tanstack/react-router';

import BillList from '@/features/bill/list';

export const Route = createLazyFileRoute('/(authenticated)/bill/')({
    component: BillList,
});
