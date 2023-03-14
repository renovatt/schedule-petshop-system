import React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import ViewDashboard from '@/views/viewdashboard'

export default function Dashboard() {
  return <ViewDashboard />
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