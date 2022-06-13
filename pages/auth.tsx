import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { signInWithPopupFirebase } from '../firebase/auth'

const RedirectPage = () => {
  return (
    <div>
      <button onClick={signInWithPopupFirebase}>Iniciar con google</button>
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER
})(RedirectPage)
