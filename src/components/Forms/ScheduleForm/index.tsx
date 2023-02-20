import React from 'react'
import * as S from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { dogFetchProps, ScheduleFormProps } from './types';

const options = ["Macho", "Fêmea"]

const ScheduleForm = () => {
    const base_url = `https://api.thedogapi.com/v1/breeds`

    const dogFetchApi = async () => {
        const response = await fetch(base_url)
        const data = await response.json()
        try {
            const petResponse = data.map((item: dogFetchProps) => ({
                id: item.id,
                name: item.name,
                image: item.image.url,
                reference_image_id: item.reference_image_id
            }))
            setDogInfo(petResponse)
        } catch (error) {
            console.log(error)
        }
    }

    const sendingDataToDB = async (data: ScheduleFormProps) => {
        try {
            await fetch('/api/schedules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log("Success")
        } catch (error) {
            console.log("POST error: ", error)
        }
    }

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<ScheduleFormProps>();
    const [isClient, setClientCheckBox] = React.useState(false)
    const [dogInfo, setDogInfo] = React.useState<dogFetchProps[]>([])
    const [selectedReferenceImageId, setSelectedReferenceImageId] = React.useState('');

    const onSubmit: SubmitHandler<ScheduleFormProps> = data => {
        sendingDataToDB(data)
        reset();
        setClientCheckBox(!isClient);
    }

    React.useEffect(() => {
        setValue("reference_image_id", selectedReferenceImageId);
        dogFetchApi()
    }, [selectedReferenceImageId])

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
                <S.Span>Tutor:</S.Span>
                <S.Input
                    maxLength={41}
                    type="text"
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
                <S.Input
                    maxLength={21}
                    type="text"
                    {...register("pet",
                        {
                            required: true, maxLength: {
                                value: 20,
                                message: "*Capacidade máxima de 20 caracteres."
                            }
                        })
                    }
                    placeholder='Nome do pet' />
                <S.InputAlert>{errors.pet?.message}</S.InputAlert>
            </S.Label>

            <S.Label htmlFor="breeds">
                <S.Span>Raça:</S.Span>
                <S.Input
                    maxLength={42}
                    type="text"
                    list="alpha"
                    id="breeds"
                    {...register("breed", {
                        required: true, maxLength: {
                            value: 40,
                            message: "*Capacidade máxima de 40 caracteres."
                        }
                    })}
                    placeholder='Raça'
                    onChange={(event) => {
                        const selectedBreed = dogInfo.find((breed) => breed.name === event.target.value);
                        if (selectedBreed) {
                            setSelectedReferenceImageId(selectedBreed.reference_image_id);
                        } else {
                            setSelectedReferenceImageId("error")
                        }
                    }} />
                <S.DataList id="alpha">
                    {dogInfo.map((breed) => (
                        <S.Option key={breed.id} value={breed.name}>{breed.name}</S.Option>
                    ))}
                </S.DataList>
                <S.InputAlert>{errors.breed?.message}</S.InputAlert>
            </S.Label>

            <S.Label>
                <S.Span>Idade:</S.Span>
                <S.Input
                    type="number"
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
                <S.Input
                    type="number"
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

export default ScheduleForm;