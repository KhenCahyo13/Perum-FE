import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { login } from '@/api/auth';
import { ERROR_MESSAGE_TITLE } from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { useAuthStore } from '@/stores/auth-store';

import { loginFormDefaultValues, loginFormSchema } from './schema';
import type { LoginFormValues } from './types';
import LoginView from './view';

const Login = () => {
    const navigate = useNavigate();
    const { setToken, setUser } = useAuthStore();

    const form = useForm({
        defaultValues: loginFormDefaultValues,
        resolver: zodResolver(loginFormSchema),
    });

    const mutation = useMutation({
        mutationFn: (values: LoginFormValues) => login(values),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: (data) => {
            setToken(data.meta);
            setUser(data.data);

            navigate({ to: '/dashboard' });
        },
    });

    const onSubmit = useCallback(
        (values: LoginFormValues) => {
            mutation.mutate(values);
        },
        [mutation]
    );

    return (
        <LoginView
            form={form}
            isLoadingLogin={mutation.isPending}
            onSubmit={onSubmit}
        />
    );
};

export default Login;
