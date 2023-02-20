import React from 'react'
import * as S from './style'
import { GrFormClose } from 'react-icons/gr'
import Image from 'next/image'
import pet from '@/aseets/pet.png'
import { MdPets } from 'react-icons/md'
import { PetModalProps } from './types'


const PetDetails = ({ setPetModalOpen, petProps }: PetModalProps) => {
    const petImage = `https://cdn2.thedogapi.com/images/${petProps.reference_image_id}.jpg`

    function handleLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
        const target = event.target as HTMLImageElement;
        target.style.opacity = "1";
    }

    return (
        <S.Container className='animation-container'>
            <S.Content>
                <S.CloseButton>
                    <GrFormClose onClick={() => setPetModalOpen(false)} />
                </S.CloseButton>
                <S.Details>
                    <S.Header>
                        <S.CardImage>
                            <Image
                                src={petImage}
                                alt="pet-image"
                                width="500"
                                height="500"
                                decoding='async'
                                data-nimg='1'
                                loading='lazy'
                                // style='color: transparent'
                                onLoad={handleLoad} />
                        </S.CardImage>
                        <S.Description>
                            <S.Pet>{petProps.pet}</S.Pet>
                            <S.Info>
                                <S.Text>{petProps.age} anos</S.Text>
                                <S.Icon>
                                    <MdPets />
                                </S.Icon>
                                <S.Text>{petProps.weight} kg</S.Text>
                            </S.Info>
                            <S.Info>
                                <S.Text>{petProps.breed}</S.Text>
                                <S.Icon>
                                    <MdPets />
                                </S.Icon>
                                <S.Text>{petProps.sex}</S.Text>
                                <S.Text>{petProps.time}h</S.Text>

                                <S.Text>{new Date(petProps.date)
                                    .toLocaleDateString('pt-br', {
                                        year: 'numeric',
                                        month: 'long',
                                        weekday: 'long',
                                        day: 'numeric',
                                    })}</S.Text>

                                <S.Text>{new Date(petProps.created_at)
                                    .toLocaleDateString('pt-br', {
                                        year: 'numeric',
                                        month: 'long',
                                        weekday: 'long',
                                        day: 'numeric',
                                    })}</S.Text>
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