import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import Layout from '@/components/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { GlobalContextProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
        <ToastContainer />
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </>
  )
}
