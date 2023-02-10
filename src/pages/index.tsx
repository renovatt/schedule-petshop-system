import Head from 'next/head'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aperiam, et, vero cupiditate quaerat blanditiis reiciendis ullam veniam odit cumque magnam. Sed hic mollitia voluptas unde aspernatur est dolor velit!</h1>
      </main>
    </>
  )
}
