import Header from '@/components/Header'
import ScheduleCreate from '@/components/ScheduleCreate'
import SchedulesList from '@/components/SchedulesList'
import Head from 'next/head'
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
        <S.Content>
          <SchedulesList />
        </S.Content>
      </S.Container>
    </>
  )
}

export default Schedules