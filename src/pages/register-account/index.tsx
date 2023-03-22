import Register from '@/views/register'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'

export default function RegisterAccount() {
  return <Register />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@nextauth-token']: token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}