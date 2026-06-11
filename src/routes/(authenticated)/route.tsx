import { createFileRoute, redirect } from '@tanstack/react-router';

import { MainLayout } from '@/components/layout';
import { useAuthStore } from '@/stores/auth-store';

export const Route = createFileRoute('/(authenticated)')({
    beforeLoad: () => {
        const { setToken, setUser, token } = useAuthStore.getState();

        if (!token?.token) {
            setUser(null);
            setToken(null);
            throw redirect({ to: '/auth/login' });
        }
    },
    component: () => <MainLayout />,
});
