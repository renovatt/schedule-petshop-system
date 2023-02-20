import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import Layout from '@/components/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
