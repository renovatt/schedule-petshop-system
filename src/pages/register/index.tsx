import Form from '@/components/Forms/ClientForm'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import * as S from './style'

const Register = () => {
  return (
    <>
      <Head>
        <title>Cadastro | Your Pet</title>
      </Head>
      <S.Container>
        <Header title='Cadastro de Clientes' />
        <S.Content>
          <Form />
        </S.Content>
      </S.Container>
    </>
  )
}

export default Register