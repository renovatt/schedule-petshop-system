import Header from '@/components/Header'
import ClientTable from '@/components/Tables/ClientTable'
import Head from 'next/head'
import React from 'react'
import * as S from './style'
import { BiSearch } from 'react-icons/bi'

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

            <S.Section>
              <h2>Contagem de todos os agendamentos do mês</h2>
              <h2>sistema de busca de clientes</h2>
            </S.Section>

            <S.Section>
              <S.LastRegister>
                <S.Header>
                  <S.Title>Clientes</S.Title>
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