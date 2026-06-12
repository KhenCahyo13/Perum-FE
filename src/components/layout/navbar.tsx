import {
    IconFileInvoice,
    IconHome2,
    IconLayoutGrid,
    IconLoader2,
    IconLogout,
    IconMoneybag,
    IconUsers,
} from '@tabler/icons-react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useRouterState } from '@tanstack/react-router';

import { logout } from '@/api/auth';
import { useAuthStore } from '@/stores/auth-store';

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '../ui/navigation-menu';
import { Logo } from './logo';

export const navItems = [
    {
        href: '/dashboard',
        icon: IconLayoutGrid,
        label: 'Dashboard',
    },
    {
        href: '/house',
        icon: IconHome2,
        label: 'Rumah',
    },
    {
        href: '/resident',
        icon: IconUsers,
        label: 'Penghuni',
    },
    {
        href: '/bill',
        icon: IconFileInvoice,
        label: 'Tagihan',
    },
    {
        href: '/expense',
        icon: IconMoneybag,
        label: 'Pengeluaran',
    },
];

export const Navbar = () => {
    const { clearAuth, user } = useAuthStore();
    const navigate = useNavigate();
    const pathname = useRouterState({
        select: (s) => s.location.pathname,
    });

    const { isPending, mutate: handleLogout } = useMutation({
        mutationFn: logout,
        onSettled: () => {
            clearAuth();
            navigate({ to: '/auth/login' });
        },
    });

    return (
        <header>
            <nav className="flex items-center justify-between border-b border-border bg-white px-8 py-3">
                <Logo />
                <NavigationMenu>
                    <NavigationMenuList className="gap-x-3">
                        {navItems.map((nav) => (
                            <NavigationMenuItem key={nav.label}>
                                <NavigationMenuLink
                                    data-active={pathname.startsWith(nav.href)}
                                    href={nav.href}
                                >
                                    <nav.icon className="mr-2" />
                                    {nav.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="h-11 rounded-full" variant="outline">
                            <Avatar>
                                <AvatarFallback>
                                    {user?.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            {user?.name}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="min-w-44">
                        <DropdownMenuItem
                            className="text-destructive"
                            disabled={isPending}
                            onClick={() => handleLogout()}
                        >
                            {isPending ? (
                                <IconLoader2 className="animate-spin" />
                            ) : (
                                <IconLogout />
                            )}
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    );
};
