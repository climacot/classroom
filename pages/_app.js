import initAuth from '../next-firebase-auth/initAuth' // the module you created above
import '../styles/global.css'

initAuth()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
