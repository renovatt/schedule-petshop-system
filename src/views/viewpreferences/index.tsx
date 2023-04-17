import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import spaceCat from '@/assets/space-cat.svg'
import spaceCat2 from '@/assets/space-cat-2.svg'
import Header from '@/components/Header'
import UserForm from '@/components/Forms/UserForm'

const ViewRegister = () => {
    return (
        <>
            <Head>
                <title>Preferências | Cute Pet</title>
            </Head>
            <S.Container>
                <Header title='Preferências' />
                <S.Main className='animation-container'>
                    <S.Content>
                        <S.Section>
                            <S.Header>
                                <S.Title>Preferências do usuário</S.Title>
                            </S.Header>
                            <UserForm />
                        </S.Section>
                        <S.ImageContainder>
                            <Image src={spaceCat} alt='space-cat' priority={true}/>
                        </S.ImageContainder>

                        <S.ImageContainder2>
                            <Image src={spaceCat2} alt='space-cat' priority={true}/>
                        </S.ImageContainder2>
                    </S.Content>
                </S.Main>
            </S.Container>
        </>
    )
}

export default ViewRegister;