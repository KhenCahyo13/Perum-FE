import { Notifin } from '@khencahyo13/notifin-react';
import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import type { router } from '@/main';

interface AppProviderProps {
    queryClient: QueryClient;
    router: typeof router;
}

export const AppProvider = ({ queryClient, router }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Notifin colorScheme="light" />
        </QueryClientProvider>
    );
};
