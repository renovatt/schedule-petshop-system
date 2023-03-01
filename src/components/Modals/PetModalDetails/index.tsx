import React from 'react'
import * as S from './style'
import Image from 'next/image'
import { PetModalProps } from './types'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
    deletingScheduleFormToDatabase,
    updatingScheduleFormToDatabase,
    dogsBreedsReferences
} from '@/services'
import { dogFetchProps, ScheduleFormProps } from '@/components/Forms/ScheduleForm/types'
import { CgCloseR } from 'react-icons/cg'
import dayjs from 'dayjs'
import { GlobalContext } from '@/context'

const PetModalDetails = ({ setPetModalOpen, petProps }: PetModalProps) => {
    const { loadSchedules } = React.useContext(GlobalContext)
    const [dogRef, setDogRef] = React.useState<dogFetchProps[]>([])
    const [selectedReferenceImageId, setSelectedReferenceImageId] = React.useState(petProps.reference_image_id);
    const [petImgUrl, setPetImgUrl] = React.useState(`https://cdn2.thedogapi.com/images/${petProps.reference_image_id}.jpg`)

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue } = useForm<ScheduleFormProps>({ defaultValues: petProps });

    const onSubmit: SubmitHandler<ScheduleFormProps> = async data => {
        const { response, error } = await updatingScheduleFormToDatabase(petProps.id, data)
        if (response) {
            toast.success('Dados atualizado com sucesso!')
        } else if (error) {
            toast.error('Lamento, aconteceu algum erro ao atualizar os dados.')
        }
        loadSchedules()
        setPetModalOpen(false)
    }

    const cancelSchedule = async () => {
        const currentDate = new Date()
        const canceledDateFormated = dayjs(currentDate).format('YYYY-MM-DDTHH:mm')
        setValue("status", false);
        setValue("canceled_date", new Date(canceledDateFormated));
        toast.success('Agendamento cancelado com sucesso!')
        loadSchedules()
    }

    const deleteSchedule = async () => {
        const { response, error } = await deletingScheduleFormToDatabase(petProps.id)
        if (response) {
            toast.success('Agendamento finalizado com sucesso!')
        } else if (error) {
            toast.error('Lamento, aconteceu algum erro ao finalizar o agendamento.')
        }
        loadSchedules()
    }

    React.useEffect(() => {
        async function loadDogsReferences() {
            const { response } = await dogsBreedsReferences()
            setDogRef(response)
        }
        setValue("reference_image_id", selectedReferenceImageId);
        loadDogsReferences()
    }, [selectedReferenceImageId])

    const updateBreed = (value: string) => {
        const selectedBreed = dogRef.find((breed) => breed.name === value);
        if (selectedBreed) {
            setSelectedReferenceImageId(selectedBreed.reference_image_id);
        } else {
            setSelectedReferenceImageId("error");
        }
        setValue("breed", value);
    };

    function handleLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
        const target = event.target as HTMLImageElement;
        target.style.opacity = "1";
    }

    function handleError() {
        setPetImgUrl(`https://cdn2.thedogapi.com/images/${petProps.reference_image_id}.png`);
    }

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
                                    src={petImgUrl}
                                    onLoad={handleLoad}
                                    onError={handleError}
                                    alt="pet-image" />
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
                                                onChange={(event) => updateBreed(event.target.value)} />

                                            <S.DataList id="alpha">
                                                {dogRef.map((breed) => (
                                                    <S.Option key={breed.id} value={breed.name}>
                                                        {breed.name}
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
                                                value={dayjs(field.value).format('YYYY-MM-DDTHH:mm')} />
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
                                    })} às {new Date(petProps.date).getHours()}:{new Date(petProps.date).getMinutes()}h
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