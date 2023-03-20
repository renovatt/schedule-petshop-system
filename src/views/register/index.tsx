import React from 'react'
import * as S from './style'
import photo from '@/assets/hug.png'
import RegisterForm from '@/components/Forms/RegisterForm'

const Register = () => {
    return (
        <S.Container className='animation-container'>
            <S.LogoContainer>
                <S.LogoContent>
                    <S.Logo alt='dog' src={photo} />
                </S.LogoContent>
                <S.Title>Cute Pet</S.Title>
                <S.Span>Seu sistema de agendamentos para Pets</S.Span>
            </S.LogoContainer>

            <S.Content>
                <RegisterForm />
                <S.Info>
                    <S.Text>Já tem uma conta?</S.Text>
                    <S.Login href={'/'}>Login</S.Login>
                </S.Info>
            </S.Content>
        </S.Container>
    )
}

export default Register;