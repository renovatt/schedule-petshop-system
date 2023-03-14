import React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import ViewSchedules from '@/views/viewschedules'

export default function Schedules() {
  return <ViewSchedules />
}

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