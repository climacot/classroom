import React, { ReactNode } from 'react'
import { signIn } from 'next-auth/react'

type ComponentProps = {
  children: ReactNode
}

export default function LoginButtonGoogle({ children }: ComponentProps) {
  return (
    <button
      className='grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md'
      onClick={() => signIn()}
    >
      {children}
    </button>
  )
}
