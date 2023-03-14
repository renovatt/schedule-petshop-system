import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import hug from '@/assets/hug.png'
import Header from '@/components/Header'
import ClientForm from '@/components/Forms/ClientForm'

const ViewRegister = () => {
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

export default ViewRegister;