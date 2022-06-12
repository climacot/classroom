import { createContext } from 'react'

export const userInit = {
  user: {
    displayName: undefined,
    email: undefined,
    photoUrl: undefined
  },
  userIsLoggedIn: false,
  login: () => {},
  signOut: () => {}
}

export interface IuserContext {
  user: Iuser | undefined
  userIsLoggedIn: boolean
  login: () => void
  signOut: () => void
}

export interface Iuser {
  displayName: string | undefined | null
  email: string | undefined | null
  photoUrl: string | undefined | null
}

export const AuthContext = createContext<IuserContext>(userInit)
