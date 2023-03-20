import LoginForm from '@/components/Forms/LoginForm'
import React from 'react'
import * as S from './style'
import photo from '@/assets/dog.png'

const Login = () => {
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
                <LoginForm />
                {/* <S.ForgotPassword href={'/reset'}>Esqueceu sua senha?</S.ForgotPassword> */}
                <S.Info>
                    <S.Text>Não tem um conta?</S.Text>
                    <S.Register href={'/register-account'}>Registre-se</S.Register>
                </S.Info>
            </S.Content>
        </S.Container>
    )
}

export default Login;