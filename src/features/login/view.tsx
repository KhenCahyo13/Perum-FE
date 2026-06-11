import { IconHome2Filled } from '@tabler/icons-react';

import { RhSubmitButton, RhTextInput } from '@/components/rh-form';
import { FieldGroup } from '@/components/ui/field';

import type { LoginViewProps } from './types';

const LoginView = ({ form, onSubmit }: LoginViewProps) => (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
            <div className="mb-8 flex flex-col items-center gap-2 text-center">
                <a
                    className="flex flex-col items-center gap-2 font-medium"
                    href="#"
                >
                    <div className="flex size-8 items-center justify-center rounded-md">
                        <IconHome2Filled className="size-6" />
                    </div>
                    <span className="sr-only">Acme Inc.</span>
                </a>
                <h1 className="text-xl font-semibold">
                    Selamat datang di Perum App
                </h1>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <RhTextInput
                        control={form.control}
                        label="Email"
                        name="email"
                        placeholder="Masukkan email Anda"
                        required
                    />
                    <RhTextInput
                        control={form.control}
                        label="Password"
                        name="password"
                        placeholder="Masukkan password Anda"
                        required
                        type="password"
                    />
                    <RhSubmitButton isLoading={false}>Login</RhSubmitButton>
                </FieldGroup>
            </form>
        </div>
    </div>
);

export default LoginView;
