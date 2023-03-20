import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';
import { AuthContext } from '@/components/contexts/authContext';
import { SignInData } from '@/components/contexts/authContext/types';

const LoginForm = () => {
    const { signIn } = React.useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SignInData>();

    const onSubmit: SubmitHandler<SignInData> = async data => {
        const { response, error } = await signIn(data)
        if (response) {
            toast.success('Seja bem vindo!')
        } else if (error) {
            toast.error(error.toString())
        }
        reset();
    }
    return (
        <S.Form action='login' onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>E-mail:</S.Span>
                <S.Input type="email"
                    {...register("email",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Deve ser um e-mail válido!"
                            }
                        })
                    }
                    placeholder='e-mail' />
                <S.InputAlert>{errors.email?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Senha:</S.Span>
                <S.Input type="password"
                    {...register("password",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Senha' />
                <S.InputAlert>{errors.password?.message}</S.InputAlert>
            </S.Label>

            <S.Button>Fazer Login</S.Button>
        </S.Form>
    )
}

export default LoginForm;