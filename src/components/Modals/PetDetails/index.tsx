import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import Image from 'next/image'
import pet from '@/aseets/pet.png'
import { MdPets } from 'react-icons/md'
import { PetModalProps } from './types'

const PetDetails = ({ setPetModalOpen }: PetModalProps) => {
    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.CloseButton>
                    <GrFormClose onClick={() => setPetModalOpen(false)} />
                </S.CloseButton>
                <S.Details>
                    <S.Header>
                        <S.CardImage>
                            <Image src={pet} alt="pet-image" />
                        </S.CardImage>
                        <S.Description>
                            <S.Pet>Jubileu</S.Pet>
                            <S.Info>
                                <S.Text>2 anos</S.Text>
                                <S.Icon>
                                    <MdPets />
                                </S.Icon>
                                <S.Text>25 kg</S.Text>
                            </S.Info>
                            <S.Info>
                                <S.Text>Rusky</S.Text>
                                <S.Icon>
                                    <MdPets />
                                </S.Icon>
                                <S.Text>Macho</S.Text>
                            </S.Info>
                        </S.Description>
                    </S.Header>
                </S.Details>
                <S.Button onClick={() => setPetModalOpen(false)}>Finalizar Agendamento</S.Button>
            </S.Content>
        </S.Container>
    )
}

export default PetDetails