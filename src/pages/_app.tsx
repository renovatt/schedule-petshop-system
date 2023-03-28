import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import Layout from '@/components/Layout'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { ListContextProvider } from '@/contexts/listContext';
import { AuthProvider } from '../contexts/authContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <ListContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ListContextProvider>
      </AuthProvider>
    </>
  )
}
