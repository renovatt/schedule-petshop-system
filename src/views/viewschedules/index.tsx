import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import dog from '@/assets/dog.png'
import Header from '@/components/Header'
import ScheduleForm from '@/components/Forms/ScheduleForm'
import ScheduleTable from '@/components/Tables/ScheduleTable'

const ViewSchedules = () => {
  return (
    <>
      <Head>
        <title>Agendamentos | Cute Pet</title>
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

export default ViewSchedules;