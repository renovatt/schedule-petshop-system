import React from 'react'
import * as S from './style'
import { toast } from 'react-toastify';
import { FaCat, FaDog } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { ListContext } from '@/contexts/listContext';
import { AuthContext } from '@/contexts/authContext';
import { useForm, SubmitHandler } from "react-hook-form";
import { PetFetchProps, ScheduleFormProps } from './types';
import { sendingScheduleFormToDatabase } from '@/services/schedules';
import { catsBreedsReferences, dogsBreedsReferences } from '@/services/api';

const ScheduleForm = () => {
    const { t } = useTranslation()
    const { isToken } = React.useContext(AuthContext)
    const { loadSchedules } = React.useContext(ListContext)
    const [isClient, setClientCheckBox] = React.useState(false)
    const [specie, setSpecie] = React.useState(true)
    const [dogRef, setDogRef] = React.useState<PetFetchProps[]>([])
    const [catRef, setCatRef] = React.useState<PetFetchProps[]>([])
    const [selectedReferenceImageId, setSelectedReferenceImageId] = React.useState('');
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<ScheduleFormProps>();

    const onSubmit: SubmitHandler<ScheduleFormProps> = async data => {
        const parsedData = data;

        parsedData.date = new Date(parsedData.date).toISOString()

        const { response, error } = await sendingScheduleFormToDatabase(parsedData, isToken)
        if (response) {
            toast.success('Agendamento realizado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        reset();
        setClientCheckBox(!isClient);
        loadSchedules()
    }

    const loadBreedsReferences = async (specie: string) => {
        const { response } = specie === 'dog'
            ? await dogsBreedsReferences()
            : await catsBreedsReferences()

        if (specie === 'dog') {
            setDogRef(response)
        } else {
            setCatRef(response)
        }
    }

    React.useEffect(() => {
        loadBreedsReferences("dog")
        setValue("reference_image_id", selectedReferenceImageId);
        setValue("specie", specie)
    }, [selectedReferenceImageId, setValue, specie])

    React.useEffect(() => {
        loadBreedsReferences("cat")
        setValue("reference_image_id", selectedReferenceImageId);
        setValue("specie", specie)
    }, [selectedReferenceImageId, setValue, specie])

    return (
        <>
            {specie ? (
                <S.SvgContent>
                    <FaDog onClick={() => setSpecie(!specie)} />
                </S.SvgContent>) :
                (<S.SvgContent>
                    <FaCat onClick={() => setSpecie(!specie)} />
                </S.SvgContent>)}

            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.Label>
                    <S.Span>Tutor:</S.Span>
                    <S.Input
                        maxLength={41}
                        type="text"
                        {...register("tutor",
                            {
                                required: "*Campo obrigatório.",
                                maxLength: {
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
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 20,
                                    message: "*Capacidade máxima de 20 caracteres."
                                }
                            })
                        }
                        placeholder='Nome do pet' />
                    <S.InputAlert>{errors.pet?.message}</S.InputAlert>
                </S.Label>

                {specie ? (
                    <S.Label htmlFor="breeds">
                        <S.Span>Raça:</S.Span>
                        <S.Input
                            maxLength={42}
                            type="text"
                            list="alpha"
                            id="breeds"
                            {...register("breed", {
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 40,
                                    message: "*Capacidade máxima de 40 caracteres."
                                }
                            })}
                            placeholder='Raça'
                            onChange={(event) => {
                                const selectedBreed = dogRef.find((breed) => t(breed.name) === event.target.value);
                                if (selectedBreed) {
                                    setSelectedReferenceImageId(selectedBreed.reference_image_id);
                                } else {
                                    setSelectedReferenceImageId("error")
                                }
                            }} />
                        <S.DataList id="alpha">
                            {dogRef.map((breed) => (
                                <S.Option key={breed.id} value={t(breed.name).toString()}>
                                    {t(breed.name)}
                                </S.Option>
                            ))}
                        </S.DataList>
                        <S.InputAlert>{errors.breed?.message}</S.InputAlert>
                    </S.Label>

                ) : (

                    <S.Label htmlFor="breeds">
                        <S.Span>Raça:</S.Span>
                        <S.Input
                            maxLength={42}
                            type="text"
                            list="alpha"
                            id="breeds"
                            {...register("breed", {
                                required: "*Campo obrigatório.",
                                maxLength: {
                                    value: 40,
                                    message: "*Capacidade máxima de 40 caracteres."
                                }
                            })}
                            placeholder='Raça'
                            onChange={(event) => {
                                const selectedBreed = catRef.find((breed) => t(breed.name) === event.target.value);
                                if (selectedBreed) {
                                    setSelectedReferenceImageId(selectedBreed.reference_image_id);
                                } else {
                                    setSelectedReferenceImageId("error")
                                }
                            }} />
                        <S.DataList id="alpha">
                            {catRef.map((breed) => (
                                <S.Option key={breed.id} value={t(breed.name).toString()}>
                                    {t(breed.name)}
                                </S.Option>
                            ))}
                        </S.DataList>
                        <S.InputAlert>{errors.breed?.message}</S.InputAlert>
                    </S.Label>
                )}

                <S.Label>
                    <S.Span>Idade:</S.Span>
                    <S.Input
                        type="number"
                        {...register("age",
                            {
                                required: "*Campo obrigatório.",
                                maxLength: {
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
                                required: "*Campo obrigatório.",
                                maxLength: {
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
                        required: "*Campo obrigatório."
                    })}>
                        <S.Option value="" defaultChecked>Escolha</S.Option>
                        <S.Option value="Macho">Macho</S.Option>
                        <S.Option value="Fêmea">Fêmea</S.Option>
                    </S.Select>
                    <S.InputAlert>{errors.sex?.message}</S.InputAlert>
                </S.Label>

                <S.Label>
                    <S.Span>Data:</S.Span>
                    <S.Input type="datetime-local"
                        {...register("date", {
                            required: "*Campo obrigatório."
                        })} />
                    <S.InputAlert>{errors.date?.message}</S.InputAlert>
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
        </>
    )
}

export default ScheduleForm;