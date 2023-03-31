import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { ClientFormProps } from './types';
import { toast } from 'react-toastify';
import { AuthContext } from '@/contexts/authContext';
import { sendingClientFormToDatabase } from '@/services/clients';

const ClientForm = () => {
    const { isToken } = React.useContext(AuthContext)
    const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<ClientFormProps>();

    const onSubmit: SubmitHandler<ClientFormProps> = async data => {
        const { response, error } = await sendingClientFormToDatabase(data, isToken)
        if (response) {
            toast.success('Cliente cadastrado realizado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        reset();
        setValue("contact", "")
    }
    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Nome:</S.Span>
                <S.Input type="text"
                    maxLength={40}
                    {...register("name",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Nome do cliente' />
                <S.InputAlert>{errors.name?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Sexo:</S.Span>
                <S.Select {...register("sex", {
                    required: "*Campo obrigatório.",
                })}>
                    <S.Option value="" defaultChecked>Escolha</S.Option>
                    <S.Option value="Masculino">Masculino</S.Option>
                    <S.Option value="Feminino">Feminino</S.Option>
                </S.Select>
                <S.InputAlert>{errors.sex?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Idade:</S.Span>
                <S.Input type="number"
                    {...register("age",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 2,
                                message: "*Capacidade de máxima 2 caracteres."
                            }
                        })
                    }
                    placeholder='Idade do cliente' />
                <S.InputAlert>{errors.age?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Endereço:</S.Span>
                <S.Input type="text"
                    {...register("street",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Endereço do cliente' />
                <S.InputAlert>{errors.street?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Número:</S.Span>
                <S.Input type="number"
                    {...register("house_number",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 5,
                                message: "*Capacidade máxima de 5 caracteres."
                            }
                        })
                    }
                    placeholder='Número da casa' />
                <S.InputAlert>{errors.house_number?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Bairro:</S.Span>
                <S.Input type="text"
                    {...register("neighborhood",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 20,
                                message: "*Capacidade máxima de 20 caracteres."
                            }
                        })
                    }
                    placeholder='Bairro' />
                <S.InputAlert>{errors.neighborhood?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Cidade:</S.Span>
                <S.Input type="text"
                    {...register("city",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 20,
                                message: "*Capacidade máxima de 20 caracteres."
                            }
                        })
                    }
                    placeholder='Cidade' />
                <S.InputAlert>{errors.city?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Contato:</S.Span>
                <S.ContactInputMask
                    mask="(99) 99999-9999"
                    maskChar={null}
                    {...register("contact",
                        {
                            required: "*Campo obrigatório.",
                            maxLength: {
                                value: 15,
                                message: "*Capacidade máxima de 15 caracteres."
                            },
                        })
                    }
                    placeholder='(99) 99999-9999' />
                <S.InputAlert>{errors.contact?.message}</S.InputAlert>
            </S.Label>

            <S.ButtonContent>
                <S.Button>Confirmar Cadastro</S.Button>
            </S.ButtonContent>
        </S.Form>
    )
}

export default ClientForm