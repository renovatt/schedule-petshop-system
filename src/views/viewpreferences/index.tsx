import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import hug from '@/assets/hug.png'
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
                            <Image src={hug} alt='thumb' priority={true}/>
                        </S.ImageContainder>
                    </S.Content>
                </S.Main>
            </S.Container>
        </>
    )
}

export default ViewRegister;