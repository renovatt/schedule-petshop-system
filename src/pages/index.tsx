import Head from 'next/head'
import { Poppins } from '@next/font/google'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Login from '@/views/login'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | Cute Pet</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Wildemberg Renovato de Lima" />
        <meta name="description" content="Cute Pet - Sistema de Agendamentos para PetShop" />
        <meta name="keywords" content="petshop, sistema para petshop, Pet Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta property="og:title" content="Cute Pet" />
        <meta property="og:description" content="Sistemas de Agendamentos para PetShop" />
        <meta property="og:image" content="https://schedule-petshop-system.vercel.app/web-1.png" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  )
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