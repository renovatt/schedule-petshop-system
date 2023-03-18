import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import { HiUsers } from 'react-icons/hi'
import thumb from '@/assets/thumb.jpg'
import Goal from '@/components/Cards/Goal'
import ClientTable from '@/components/Tables/ClientTable'
import SchedulesCanceled from '@/components/Cards/SchedulesCanceled'
import SchedulesMonthCount from '@/components/Cards/SchedulesMonthCount'
import SchedulesCountDaily from '@/components/Cards/SchedulesDailyCount'

const ViewDashboard = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Dashboard | Cute Pet</title>
      </Head>
      <S.Container>
        <Header title='Dashboard' />
        <S.Main className='animation-container'>
          <S.Content>
            <S.CardThumbContent>
              <S.SectionCards>
                <SchedulesMonthCount />
                <SchedulesCountDaily />
                <SchedulesCanceled />
                <Goal />
              </S.SectionCards>
              <S.Thumb>
                <Image src={thumb} alt="thumb" />
              </S.Thumb>
            </S.CardThumbContent>
            <S.Section>
              <S.LastRegister>
                <S.Header>
                  <S.TitleContent>
                    <HiUsers />
                    <S.Title>Clientes</S.Title>
                  </S.TitleContent>
                  <S.Form>
                    <S.Search
                      type="search"
                      value={searchValue}
                      placeholder='Procurar cliente'
                      onChange={handleSearchInputChange} />
                  </S.Form>
                </S.Header>
                <ClientTable searchValue={searchValue} />
              </S.LastRegister>
            </S.Section>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default ViewDashboard;