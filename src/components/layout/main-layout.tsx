import { Outlet } from '@tanstack/react-router';

import { Navbar } from './navbar';

export const MainLayout = () => (
    <main className="min-h-screen bg-muted">
        <Navbar />
        <Outlet />
    </main>
);
