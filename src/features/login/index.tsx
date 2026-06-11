import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginFormDefaultValues, loginFormSchema } from './schema';
import type { LoginFormValues } from './types';
import LoginView from './view';

const Login = () => {
    const form = useForm({
        defaultValues: loginFormDefaultValues,
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = (values: LoginFormValues) => {
        console.log(values);
    };

    return <LoginView form={form} onSubmit={onSubmit} />;
};

export default Login;
