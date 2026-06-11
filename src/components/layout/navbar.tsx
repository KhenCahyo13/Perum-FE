import {
    IconHome2,
    IconLayoutGrid,
    IconLogout,
    IconUsers,
} from '@tabler/icons-react';

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

export const navItems = [
    {
        href: '/dashboard',
        icon: IconLayoutGrid,
        label: 'Dashboard',
    },
    {
        href: '/dashboard',
        icon: IconHome2,
        label: 'Rumah',
    },
    {
        href: '/dashboard',
        icon: IconUsers,
        label: 'Penghuni',
    },
];

export const Navbar = () => (
    <header>
        <nav className="flex items-center justify-between border-b border-border bg-white px-8 py-3">
            <h1 className="font-medium">Perum App</h1>
            <NavigationMenu>
                <NavigationMenuList className="gap-x-3">
                    {navItems.map((nav) => (
                        <NavigationMenuItem key={nav.label}>
                            <NavigationMenuLink href={nav.href}>
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
                            <AvatarFallback>KH</AvatarFallback>
                        </Avatar>
                        Khen Cahyo
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="min-w-44">
                    <DropdownMenuItem className="text-destructive">
                        <IconLogout /> Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    </header>
);
