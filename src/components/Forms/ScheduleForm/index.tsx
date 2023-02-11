import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './types';

const ScheduleForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        reset();
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Nome:</S.Span>
                <S.Input type="text"
                    {...register("name",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres"
                            }
                        })
                    }
                    placeholder='Nome do cliente' />
                <S.InputAlert>{errors.name?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Pet:</S.Span>
                <S.Input type="text"
                    {...register("pet",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Preencha todos os campos."
                            }
                        })
                    }
                    placeholder='Nome do pet' />
                <S.InputAlert>{errors.pet?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Raça:</S.Span>
                <S.Input type="text"
                    {...register("breed",
                        {
                            required: true, minLength: {
                                value: 3,
                                message: "*Preencha todos os campos."
                            }
                        })
                    }
                    placeholder='Raça' />
                <S.InputAlert>{errors.breed?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Idade:</S.Span>
                <S.Input type="text"
                    {...register("age",
                        {
                            required: true, maxLength: {
                                value: 20,
                                message: "*Capacidade máxima de 20 caracteres"
                            }
                        })
                    }
                    placeholder='Idade do pet' />
                <S.InputAlert>{errors.age?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Peso:</S.Span>
                <S.Input type="text"
                    {...register("weight",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Preencha todos os campos."
                            }
                        })
                    }
                    placeholder='Peso do pet' />
                <S.InputAlert>{errors.weight?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Sexo:</S.Span>
                <S.Input type="text"
                    {...register("sex",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Preencha todos os campos."
                            }
                        })
                    }
                    placeholder='Sexo do pet' />
                <S.InputAlert>{errors.sex?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Data:</S.Span>
                <S.Input type="date"
                    {...register("date",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Preencha todos os campos."
                            }
                        })
                    } />
                <S.InputAlert>{errors.date?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Hora:</S.Span>
                <S.Input type="time"
                    {...register("time",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Preencha todos os campos."
                            }
                        })
                    } />
                <S.InputAlert>{errors.time?.message}</S.InputAlert>
            </S.Label>

            <S.CheckLabel>
                <S.CheckInput type="checkbox" {...register("client")} />
                <S.Span>Já é cliente?</S.Span>
                <S.InputAlert>{errors.client?.message}</S.InputAlert>
            </S.CheckLabel>

            <S.ButtonContent>
                <S.Button>Confirmar Agendamento</S.Button>
            </S.ButtonContent>
        </S.Form>
    )
}

export default ScheduleForm