import React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import ViewRegister from '@/views/viewregister'

export default function ClientRegister() {
  return <ViewRegister />
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