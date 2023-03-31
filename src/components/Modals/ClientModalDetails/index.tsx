import React from 'react'
import * as S from './style'
import Image from 'next/image'
import male from '@/assets/male-client.png'
import female from '@/assets/female-client.png'
import { ClientModalProps } from './types'
import { ClientFormProps } from '@/components/Forms/ClientForm/types'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { CgCloseR } from 'react-icons/cg'
import { ListContext } from '@/contexts/listContext'
import { AuthContext } from '@/contexts/authContext'
import { deletingClientFormToDatabase, updatingClientFormToDatabase } from '@/services/clients'

const ClientModalDetails = ({ setClientModalOpen, clientProps }: ClientModalProps) => {
    const { isToken } = React.useContext(AuthContext)
    const { loadClients } = React.useContext(ListContext)

    const { control, handleSubmit, formState: { errors } } = useForm<ClientFormProps>({ defaultValues: clientProps });
    const onSubmit: SubmitHandler<ClientFormProps> = async data => {
        const { response, error } = await updatingClientFormToDatabase(clientProps.id, data, isToken)
        if (response) {
            toast.success('Dados atualizado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        loadClients()
        setClientModalOpen(false)
    }

    const deleteClient = async () => {
        const { response, error } = await deletingClientFormToDatabase(clientProps.id, isToken)
        if (response) {
            toast.success('Cliente deletado com sucesso!')
        } else if (error) {
            toast.error(error.toString())
        }
        loadClients()
        setClientModalOpen(false)
    }

    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.Details>
                        <S.Header>
                            <S.CardImage>
                                <Image src={clientProps.sex === "Masculino" ? male : female} alt="client-image" />
                            </S.CardImage>
                            <S.Icon>
                                <CgCloseR onClick={() => setClientModalOpen(false)} />
                            </S.Icon>
                        </S.Header>
                        <S.Description>
                            <S.Info>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue={clientProps.name}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 40,
                                            message: "*Capacidade máxima de 40 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Nome:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                placeholder="Nome do cliente"
                                                maxLength={41} />
                                            <S.InputAlert>{errors.name?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="age"
                                    control={control}
                                    defaultValue={clientProps.age}
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
                                            <S.Input {...field}
                                                type="number"
                                                placeholder="Idade do cliente" />
                                            <S.InputAlert>{errors.age?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="sex"
                                    control={control}
                                    defaultValue={clientProps.sex}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 40,
                                            message: "*Capacidade máxima de 40 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Sexo:</S.Span>
                                            <S.Select {...field}>
                                                <S.Option value="" defaultChecked>Escolha</S.Option>
                                                <S.Option value="Masculino">Masculino</S.Option>
                                                <S.Option value="Feminino">Feminino</S.Option>
                                            </S.Select>
                                            <S.InputAlert>{errors.sex?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="street"
                                    control={control}
                                    defaultValue={clientProps.street}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 40,
                                            message: "*Capacidade máxima de 40 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Endereço:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                maxLength={41}
                                                placeholder="Endereço do cliente" />
                                            <S.InputAlert>{errors.street?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="house_number"
                                    control={control}
                                    defaultValue={clientProps.house_number}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 5,
                                            message: "*Capacidade máxima de 5 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>N°:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                placeholder="Numero da casa" />
                                            <S.InputAlert>{errors.house_number?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="neighborhood"
                                    control={control}
                                    defaultValue={clientProps.neighborhood}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 20,
                                            message: "*Capacidade máxima de 20 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Bairro:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                maxLength={21}
                                                placeholder="Bairro" />
                                            <S.InputAlert>{errors.neighborhood?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue={clientProps.city}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 20,
                                            message: "*Capacidade máxima de 20 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Cidade:</S.Span>
                                            <S.Input {...field}
                                                type="text"
                                                maxLength={21}
                                                placeholder="Cidade" />
                                            <S.InputAlert>{errors.city?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <Controller
                                    name="contact"
                                    control={control}
                                    defaultValue={clientProps.contact}
                                    rules={{
                                        required: "*Campo obrigatório.",
                                        maxLength: {
                                            value: 15,
                                            message: "*Capacidade máxima de 15 caracteres."
                                        }
                                    }}
                                    render={({ field }) => (
                                        <S.Label>
                                            <S.Span>Contato:</S.Span>
                                            <S.ContactInputMask
                                                {...field}
                                                mask="(99) 99999-9999"
                                                maskChar={null}
                                                placeholder='(99) 99999-9999' />
                                            <S.InputAlert>{errors.contact?.message}</S.InputAlert>
                                        </S.Label>
                                    )} />

                                <S.Text>Cliente desde: {new Date(clientProps.created_at)
                                    .toLocaleDateString('pt-br', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </S.Text>
                            </S.Info>
                        </S.Description>
                    </S.Details>
                    <S.SaveButton type="submit">Salvar</S.SaveButton>
                    <S.DeleteButton onClick={deleteClient}>Excuir</S.DeleteButton>
                </S.Form>
            </S.Content>
        </S.Container>
    )
}

export default ClientModalDetails