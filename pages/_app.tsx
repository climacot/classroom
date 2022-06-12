import { SessionProvider } from 'next-auth/react'
import ModalProvider from '../provider/ModalProvider'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </SessionProvider>
    </div>
  )
}

export default MyApp
