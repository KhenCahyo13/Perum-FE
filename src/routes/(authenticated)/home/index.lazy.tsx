import { createLazyFileRoute } from '@tanstack/react-router';

import Home from '@/features/home';

export const Route = createLazyFileRoute('/(authenticated)/home/')({
    component: Home,
});
