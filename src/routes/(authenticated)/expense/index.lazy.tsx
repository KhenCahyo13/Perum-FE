import { createLazyFileRoute } from '@tanstack/react-router';

import ExpenseList from '@/features/expense/list';

export const Route = createLazyFileRoute('/(authenticated)/expense/')({
    component: ExpenseList,
});
