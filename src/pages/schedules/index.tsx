import dog from '@/aseets/dog.png'
import ScheduleForm from '@/components/Forms/ScheduleForm'
import Header from '@/components/Header'
import Table from '@/components/table'
import Head from 'next/head'
import Image from 'next/image'
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
                <Table />
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