import ClientForm from '@/components/Forms/ClientForm'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import * as S from './style'
import hug from '@/assets/hug.png'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const Register = () => {
  return (
    <>
      <Head>
        <title>Cadastro | Your Pet</title>
      </Head>
      <S.Container>
        <Header title='Cadastro de Clientes' />
        <S.Main className='animation-container'>
          <S.Content>
            <S.Section>
              <ClientForm />
            </S.Section>
            <S.ImageContainder>
              <Image src={hug} alt='thumb' />
            </S.ImageContainder>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@nextauth-token']: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}