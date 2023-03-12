import dog from '@/assets/dog.png'
import ScheduleForm from '@/components/Forms/ScheduleForm'
import Header from '@/components/Header'
import ScheduleTable from '@/components/Tables/ScheduleTable'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import React from 'react'
import * as S from './style'

const Schedules = () => {
  return (
    <>
      <Head>
        <title>Agendamentos | Your Pet</title>
      </Head>
      <S.Container>
        <Header title='Agendamentos' />
        <S.Main className='animation-container'>
          <S.Content>
            <S.Section>
              <S.LastRegister>
                <S.Header>
                  <S.Title>Agendamentos do Dia</S.Title>
                  <S.Date>
                    <S.Span>Data:</S.Span><S.Input type="date" />
                  </S.Date>
                </S.Header>
                <ScheduleTable />
              </S.LastRegister>
            </S.Section>
            <S.Section>
              <ScheduleForm />
            </S.Section>
            <S.ImageContainder>
              <Image src={dog} alt="thumb-dog" />
            </S.ImageContainder>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default Schedules

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