import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { ScheduleFormProps } from './types';

const ScheduleForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ScheduleFormProps>();
    const onSubmit: SubmitHandler<ScheduleFormProps> = data => {
        console.log(data);
        reset();
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Nome do Cliente:</S.Span>
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
                <S.Span>Nome do Pet:</S.Span>
                <S.Input type="text"
                    {...register("pet",
                        {
                            required: true, maxLength: {
                                value: 10,
                                message: "*Capacidade máxima de 10 caracteres"
                            }
                        })
                    }
                    placeholder='Nome do Pet' />
                <S.InputAlert>{errors.pet?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Idade do Pet:</S.Span>
                <S.Input type="text"
                    {...register("age",
                        {
                            required: true, maxLength: {
                                value: 2,
                                message: "*Capacidade máxima de 2 caracteres"
                            }
                        })
                    }
                    placeholder='Idade do Pet' />
                <S.InputAlert>{errors.age?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Raça:</S.Span>
                <S.Input type="text"
                    {...register("breed",
                        {
                            required: true, maxLength: {
                                value: 5,
                                message: "*Capacidade máxima de 5 caracteres"
                            }
                        })
                    }
                    placeholder='Raça do Pet' />
                <S.InputAlert>{errors.breed?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Data:</S.Span>
                <S.Input type="date"
                    {...register("createdAt",
                        {
                            required: true, minLength: {
                                value: 1,
                                message: "*Necessário preencher a data!"
                            }
                        })
                    }
                    placeholder='00/00/00' />
                <S.InputAlert>{errors.createdAt?.message}</S.InputAlert>
            </S.Label>

            <S.ButtonContent>
                <S.Button>Confirmar Agendamento</S.Button>
            </S.ButtonContent>
        </S.Form>
    )
}

export default ScheduleForm;