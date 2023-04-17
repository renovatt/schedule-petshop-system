import React from 'react'
import Head from 'next/head'
import * as S from './style'
import cute from '@/assets/cute-register.svg'
import RegisterForm from '@/components/Forms/RegisterForm'

const Register = () => {
    return (
        <>
            <Head>
                <title>Registrar | Cute Pet</title>
            </Head>
            <S.Container className='animation-container'>
                <S.LogoContainer>
                    <S.LogoContent>
                        <S.Logo alt='dog' src={cute} priority={true} />
                    </S.LogoContent>
                    <S.Title>Cute Pet</S.Title>
                    <S.Span>Seu sistema de agendamentos para Pets</S.Span>
                </S.LogoContainer>

                <S.Content>
                    <RegisterForm />
                    <S.Info>
                        <S.Text>Já tem uma conta?</S.Text>
                        <S.Login href={'/'}>Fazer Login</S.Login>
                    </S.Info>
                </S.Content>
            </S.Container>
        </>
    )
}

export default Register;