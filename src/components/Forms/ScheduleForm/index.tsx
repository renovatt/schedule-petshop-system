import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './types';

const options = ["Macho", "Fêmea"]

const ScheduleForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        reset();
        setClientCheckBox(!isClient)
    }

    const [isClient, setClientCheckBox] = React.useState(false)

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Tutor:</S.Span>
                <S.Input type="text"
                    {...register("tutor",
                        {
                            required: true, maxLength: {
                                value: 40,
                                message: "*Capacidade máxima de 40 caracteres."
                            }
                        })
                    }
                    placeholder='Nome do tutor' />
                <S.InputAlert>{errors.tutor?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Pet:</S.Span>
                <S.Input type="text"
                    maxLength={20}
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
                    maxLength={20}
                    {...register("breed",
                        {
                            required: true, minLength: {
                                value: 5,
                                message: "*Deve ter pelo menos 5 caracteres."
                            }
                        })
                    }
                    placeholder='Raça' />
                <S.InputAlert>{errors.breed?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Idade:</S.Span>
                <S.Input type="number"
                    {...register("age",
                        {
                            required: true, maxLength: {
                                value: 2,
                                message: "*Capacidade máxima de 2 caracteres."
                            }
                        })
                    }
                    placeholder='Idade do pet' />
                <S.InputAlert>{errors.age?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Peso:</S.Span>
                <S.Input type="number"
                    {...register("weight",
                        {
                            required: true, maxLength: {
                                value: 2,
                                message: "*Capacidade máxima de 2 caracteres."
                            }
                        })
                    }
                    placeholder='Peso do pet' />
                <S.InputAlert>{errors.weight?.message}</S.InputAlert>
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
                <S.Span>Data:</S.Span>
                <S.Input type="date"
                    {...register("date", {
                        required: true
                    })} />
                <S.InputAlert>{errors.date?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Hora:</S.Span>
                <S.Input type="time"
                    {...register("time", {
                        required: true
                    })} />
                <S.InputAlert>{errors.time?.message}</S.InputAlert>
            </S.Label>

            <S.CheckLabel>
                <S.CheckInput
                    type="checkbox"
                    checked={isClient}
                    {...register("client",
                        { onChange: () => setClientCheckBox(!isClient) }
                    )} />
                <S.Span>Já é cliente?</S.Span>
                <S.InputAlert>{errors.client?.message}</S.InputAlert>
            </S.CheckLabel>

            <S.ButtonContent>
                {!isClient ? <S.Button disabled>Confirmar Agendamento</S.Button> :
                    <S.Button>Confirmar Agendamento</S.Button>}
            </S.ButtonContent>
        </S.Form>
    )
}

export default ScheduleForm