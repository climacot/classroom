// import { auth } from '../next-firebase-auth/firebase'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import Header from '../components/header'

const provider = new GoogleAuthProvider()

const AuthPage = () => {
  const auth = getAuth()

  const signInWithPopupGoogleFirebase = () => {
    signInWithPopup(auth, provider)
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Header />
      <h1>Auth page!</h1>
      <button onClick={signInWithPopupGoogleFirebase}>Sign in With Google</button>
    </div>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER
})(AuthPage)
