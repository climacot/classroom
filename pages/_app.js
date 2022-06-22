import LayoutModals from '../components/layout/modals'
import initAuth from '../next-firebase-auth/initAuth' // the module you created above
import ModalProvider from '../provider/ModalProvider'
import '../styles/global.css'

initAuth()

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
