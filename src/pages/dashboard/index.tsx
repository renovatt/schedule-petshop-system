import Header from '@/components/Header'
import ClientTable from '@/components/Tables/ClientTable'
import Head from 'next/head'
import React from 'react'
import * as S from './style'
import { BiSearch } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import SchedulesCount from '@/components/Cards/SchedulesCount'
import Goal from '@/components/Cards/Goal'
import SchedulesCanceled from '@/components/Cards/SchedulesCanceled'
import Image from 'next/image'
import thumb from '@/aseets/thumb.jpg'
import SchedulesCountDaily from '@/components/Cards/SchedulesCountDaily'


const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Your Pet</title>
      </Head>
      <S.Container>
        <Header title='Dashboard' />
        <S.Main className='animation-container'>
          <S.Content>

            <S.CardThumbContent>
              <S.SectionCards>
                <SchedulesCount />
                <SchedulesCanceled />
                <Goal />
                <SchedulesCountDaily />
              </S.SectionCards>

              <S.Thumb>
                <Image src={thumb} alt="thumb" />
              </S.Thumb>
            </S.CardThumbContent>

            <S.Section>
              <S.LastRegister>
                <S.Header>
                  <S.TitleContent>
                    <FaUsers />
                    <S.Title>Clientes</S.Title>
                  </S.TitleContent>
                  <S.Form>
                    <S.Search type="search" placeholder='Procurar cliente' />
                    <S.Button>
                      <BiSearch />
                    </S.Button>
                  </S.Form>
                </S.Header>
                <ClientTable />
              </S.LastRegister>
            </S.Section>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default Dashboard