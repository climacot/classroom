import { auth } from '../firebase'
import { AuthContext, Iuser, userInit } from '../context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { ReactNode, useEffect, useState } from 'react'
import { signInWithPopupFirebase, signOutFirebase } from '../firebase/auth'

type ComponentProps = {
  children: ReactNode
}

export default function AuthProvider({ children }: ComponentProps) {
  const [user, setUser] = useState<Iuser | undefined>(undefined)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, function (user) {
      if (!user) {
        setUser(undefined)
        return
      }

      const decorateUser = {
        displayName: user?.displayName,
        email: user?.email,
        photoUrl: user?.photoURL
      }

      setUser(decorateUser)
    })

    return () => unsuscribe()
  }, [])

  const login = async () => {
    const userLogin = await signInWithPopupFirebase()
    const decorateUser = {
      displayName: userLogin?.displayName,
      email: userLogin?.email,
      photoUrl: userLogin?.photoURL
    }
    setUser(decorateUser)
    window.localStorage.setItem('session', JSON.stringify(decorateUser))
  }

  const signOut = async () => {
    await signOutFirebase()
  }

  const userIsLoggedIn = user ? true : false

  return <AuthContext.Provider value={{ user, login, signOut, userIsLoggedIn }}>{children}</AuthContext.Provider>
}
