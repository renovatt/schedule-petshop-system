import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import * as S from './style'

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
            <h1>Dashboard</h1>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  )
}

export default Dashboard