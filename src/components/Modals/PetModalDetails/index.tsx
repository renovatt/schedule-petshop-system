import React from 'react'
import * as S from './style'
import Image from 'next/image'
import moment from 'moment'
import { toast } from 'react-toastify'
import { PetModalProps } from './types'
import { CgCloseR } from 'react-icons/cg'
import { useTranslation } from "react-i18next";
import { ListContext } from '@/contexts/listContext'
import { AuthContext } from '@/contexts/authContext'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { catsBreedsReferences, dogsBreedsReferences } from '@/services/api'
import { PetFetchProps, ScheduleFormProps } from '@/components/Forms/ScheduleForm/types'
import { deletingScheduleFormToDatabase, updatingScheduleFormToDatabase } from '@/services/schedules'

const PetModalDetails = ({ setPetModalOpen, petProps }: PetModalProps) => {
    const { t } = useTranslation()
    const { isToken } = React.useContext(AuthContext)
    const { loadSchedules } = React.useContext(ListContext)
    const [petRef, setPetRef] = React.useState<PetFetchProps[]>([])
    const [selectedReferenceImageId, setSelectedReferenceImageId] = React.useState(petProps.reference_image_id);
    const [petImgUrl, setPetImgUrl] = React.useState(petProps.specie ?
        `https://cdn2.thedogapi.com/images/${petProps.reference_image_id}.jpg` :
        `https://cdn2.thecatapi.com/images/${petProps.reference_image_id}.jpg`)

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue } = useForm<ScheduleFormProps>({ defaultValues: petProps });

    const onSubmit: SubmitHandler<ScheduleFormProps> = async data => {
        const parsedData = data;

        parsedData.date = new Date(data.date).toISOString();

        const { response, error } = await updatingScheduleFormToDatabase(petProps.id, parsedData, isToken)
        if (response) {
            toast.success('Dados atualizado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        loadSchedules()
        setPetModalOpen(false)
    }

    const cancelSchedule = async () => {
        const currentDate = new Date()
        const canceledDateFormated = new Date(currentDate).toISOString();
        setValue("status", false);
        setValue("canceled_date", canceledDateFormated);
        toast.success('Agendamento cancelado com sucesso!')
    }

    const deleteSchedule = async () => {
        const { response, error } = await deletingScheduleFormToDatabase(petProps.id, isToken)
        if (response) {
            toast.success('Agendamento finalizado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        loadSchedules()
    }

    const loadBreedsReferences = async (specie: string) => {
        const { response } = specie === 'dog'
            ? await dogsBreedsReferences()
            : await catsBreedsReferences()

        if (specie === 'dog') {
            setPetRef(response)
        } else {
            setPetRef(response)
        }
    }

    const updateBreeds = (value: string) => {
        const selectedBreed = petRef.find((breed) => t(breed.name) === value)
        if (selectedBreed) {
            setSelectedReferenceImageId(selectedBreed.reference_image_id);
        } else {
            setSelectedReferenceImageId("https://http.cat/404");
        }
        setValue("breed", value);
    };

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }

    const handleError = () => {
        setPetImgUrl(petProps.specie ?
            `https://cdn2.thedogapi.com/images/${petProps.reference_image_id}.png` :
            `https://cdn2.thecatapi.com/images/${petProps.reference_image_id}.png`)
    }

    React.useEffect(() => {
        setValue("reference_image_id", selectedReferenceImageId);
        loadBreedsReferences(petProps.specie ? "dog" : "cat")
    }, [selectedReferenceImageId])

    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Details>
                        <S.Header>
                            <S.CardImage>
                                <Image
                                    width={500}
                                    height={500}
                                    src={petProps.reference_image_id !== '' ? petImgUrl : "https://http.cat/404"}
                                    onLoad={handleLoad}
                                    onError={handleError}
                                    alt={"pet-image"} />
                            </S.CardImage>
                            <S.ConfirmButton onClick={cancelSchedule}>Cancelar</S.ConfirmButton>
                            <S.Icon>
                                <CgCloseR onClick={() => setPetModalOpen(false)} />
                            </S.Icon>
                        </S.Header>
                        <S.Description>
                            <S.Info>
                                <Controller
                                    name="tutor"
                                    control={control}
                                    defaultValue={petProps.tutor}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 40,
                                            message: "*Capacidade máxima de 40 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Tutor:</S.Span>
                                            <S.Input {...field} type="text" maxLength={41} />
                                            <S.InputAlert>{errors?.tutor?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="pet"
                                    control={control}
                                    defaultValue={petProps.pet}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 20,
                                            message: "*Capacidade máxima de 20 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Pet:</S.Span>
                                            <S.Input {...field} type="text" maxLength={21} />
                                            <S.InputAlert>{errors.pet?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="breed"
                                    control={control}
                                    defaultValue={petProps.breed}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 40,
                                            message: "*Capacidade máxima de 40 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Raça:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                list="alpha"
                                                maxLength={41}
                                                onChange={(event) => updateBreeds(event.target.value)} />

                                            <S.DataList id="alpha">
                                                {petRef.map((breed) => (
                                                    <S.Option key={breed.id} value={t(breed.name).toString()}>
                                                        {t(breed.name)}
                                                    </S.Option>
                                                ))}
                                            </S.DataList>
                                            <S.InputAlert>{errors.breed?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="age"
                                    control={control}
                                    defaultValue={petProps.age}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 2,
                                            message: "*Capacidade máxima de 2 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Idade:</S.Span>
                                            <S.Input {...field} type="number" />
                                            <S.InputAlert>{errors.age?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="weight"
                                    control={control}
                                    defaultValue={petProps.weight}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 2,
                                            message: "*Capacidade máxima de 2 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Peso:</S.Span>
                                            <S.Input {...field} type="text" />
                                            <S.InputAlert>{errors.weight?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="sex"
                                    control={control}
                                    defaultValue={petProps.sex}
                                    rules={{ required: "*Campo obrigatório." }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Sexo:</S.Span>
                                            <S.Select {...field}>
                                                <S.Option value="" defaultChecked>Escolha</S.Option>
                                                <S.Option value="Macho">Macho</S.Option>
                                                <S.Option value="Fêmea">Fêmea</S.Option>
                                            </S.Select>
                                            <S.InputAlert>{errors.sex?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="date"
                                    control={control}
                                    defaultValue={petProps.date}
                                    rules={{ required: "*Campo obrigatório." }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Data:</S.Span>
                                            <S.Input {...field}
                                                type="datetime-local"
                                                value={moment(field.value).format('YYYY-MM-DDTHH:mm')} />
                                            <S.InputAlert>{errors.date?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <S.ScheduleDate>Agendamento realizado em: {new Date(petProps.created_at)
                                    .toLocaleDateString('pt-br', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </S.ScheduleDate>

                                <S.Text>Agendado para: {new Date(petProps.date)
                                    .toLocaleDateString('pt-br', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })} às {new Date(petProps.date)
                                        .toLocaleString("pt-br", {
                                            hour: 'numeric',
                                            minute: 'numeric'
                                        })}
                                </S.Text>
                            </S.Info>
                        </S.Description>
                    </S.Details>
                    <S.SaveButton type="submit">Salvar</S.SaveButton>
                    <S.DeleteButton onClick={deleteSchedule}>Finalizar</S.DeleteButton>
                </S.Form>
            </S.Content>
        </S.Container>
    )
}

export default PetModalDetails