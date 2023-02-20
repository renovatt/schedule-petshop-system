import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { ClientFormProps } from './types';

const options = ["Masculino", "Feminino"]

const ClientForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientFormProps>();
    const onSubmit: SubmitHandler<ClientFormProps> = async data => {
        sendingDataToDB(data)
        reset();
    }

    const sendingDataToDB = async (data: ClientFormProps) => {
        await fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Nome:</S.Span>
                <S.Input type="text"
                    maxLength={40}
                    {...register("name",
                        {
                            required: true, maxLength: {
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
                    required: true
                })}>
                    <S.Option value="" defaultChecked>Escolha</S.Option>
                    {options.map((value, index) => (
                        <S.Option key={index} value={value}>
                            {value}
                        </S.Option>
                    ))}
                </S.Select>
            </S.Label>

            <S.Label>
                <S.Span>Idade:</S.Span>
                <S.Input type="number"
                    {...register("age",
                        {
                            required: true, maxLength: {
                                value: 2,
                                message: "*Capacidade de máxima 2 caracteres."
                            }
                        })
                    }
                    placeholder='Idade' />
                <S.InputAlert>{errors.age?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Endereço:</S.Span>
                <S.Input type="text"
                    {...register("street",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Endereço' />
                <S.InputAlert>{errors.street?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Número:</S.Span>
                <S.Input type="number"
                    {...register("house_number",
                        {
                            required: true, maxLength: {
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
                            required: true, maxLength: {
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
                            required: true, maxLength: {
                                value: 10,
                                message: "*Capacidade máxima de 10 caracteres."
                            }
                        })
                    }
                    placeholder='Cidade' />
                <S.InputAlert>{errors.city?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Contato:</S.Span>
                <S.Input type="number"
                    {...register("contact",
                        {
                            required: true, maxLength: {
                                value: 11,
                                message: "*Capacidade máxima de 12 caracteres."
                            }
                        })
                    }
                    placeholder='(00) 00000-0000' />
                <S.InputAlert>{errors.contact?.message}</S.InputAlert>
            </S.Label>

            <S.ButtonContent>
                <S.Button>Confirmar Cadastro</S.Button>
            </S.ButtonContent>
        </S.Form>
    )
}

export default ClientForm