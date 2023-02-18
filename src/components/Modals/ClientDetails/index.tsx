import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import Image from 'next/image'
import client from '@/aseets/client.png'
import { ClientModalProps } from './types'

const ClientDetails = ({ setPetModalOpen, clientProps }: ClientModalProps) => {
    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.CloseButton>
                    <GrFormClose onClick={() => setPetModalOpen(false)} />
                </S.CloseButton>
                <S.Details>
                    <S.Header>
                        <S.CardImage>
                            <Image src={client} alt="client-image" />
                        </S.CardImage>
                    </S.Header>
                    <S.Description>
                        <S.Client>{clientProps.name}</S.Client>
                        <S.Info>
                            <S.Text>Idade: {clientProps.age} anos</S.Text>
                            <S.Text>Sexo: {clientProps.sex}</S.Text>
                            <S.Text>Rua: {clientProps.street}</S.Text>
                            <S.Text>Bairro: {clientProps.neighborhood}</S.Text>
                            <S.Text>Cidade: {clientProps.city}</S.Text>
                            <S.Text>Numero: {clientProps.house_number}</S.Text>
                        </S.Info>
                    </S.Description>
                </S.Details>
                <S.Button onClick={() => setPetModalOpen(false)}>Finalizar Agendamento</S.Button>
            </S.Content>
        </S.Container>
    )
}

export default ClientDetails