import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';
import { sendingUserFormToDatabase } from '@/services';
import { UserFormProps } from '../LoginForm/type';

const RegisterForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormProps>();

    const onSubmit: SubmitHandler<UserFormProps> = async data => {
        const { response, error } = await sendingUserFormToDatabase(data)
        if (response) {
            toast.success('Cadastro realizado com sucesso!')
        } else if (error) {
            toast.error('Lamento, aconteceu algum erro durante o cadastro!')
        }
        reset();
    }
    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Nome:</S.Span>
                <S.Input type="text"
                    maxLength={40}
                    {...register("username",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Nome do cliente' />
                <S.InputAlert>{errors.username?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>E-mail:</S.Span>
                <S.Input type="email"
                    {...register("email",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade de máxima 2 caracteres."
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

            <S.ButtonContent>
                <S.Button>Confirmar Cadastro</S.Button>
            </S.ButtonContent>
        </S.Form>
    )
}

export default RegisterForm;