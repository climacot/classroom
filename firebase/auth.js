import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

export const signInWithPopupFirebase = () => signInWithPopup(auth, provider)
export const signOutFirebase = () => signOut(auth)
