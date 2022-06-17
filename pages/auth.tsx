import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { signInWithPopupFirebase } from '../firebase/auth'
import google from '../public/google_g.svg'
import Image from 'next/image'
import LoaderHeader from '../components/Loaders/LoaderHeader'

const RedirectPage = () => {
  return (
    <div className='absolute flex items-center justify-center h-full w-full'>
      <button className='flex shadow-sm p-3 border rounded-md' onClick={signInWithPopupFirebase}>
        <div className='w-8'>
          <div className='flex items-center'>
            <Image src={google} alt='Logo de google minimo' />
          </div>
        </div>
        <span className='ml-3'>Continuar con Google</span>
      </button>
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: LoaderHeader
})(RedirectPage)
