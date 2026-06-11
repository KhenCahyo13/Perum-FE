import { IconHome2Filled } from '@tabler/icons-react';

export const Logo = () => (
    <div className="flex items-center gap-x-3">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <IconHome2Filled className="size-4.5" />
        </div>
        <span className="font-semibold">Perum</span>
    </div>
);
