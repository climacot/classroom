import initAuth from '../initAuth' // the module you created above
import ModalProvider from '../provider/ModalProvider'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

initAuth()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
