// import { auth } from '../next-firebase-auth/firebase'
import { signOut, getAuth } from 'firebase/auth'
import { useAuthUser } from 'next-firebase-auth'
import { useState } from 'react'
import Image from 'next/image'

export default function UserMenu() {
  const { photoURL, displayName, email } = useAuthUser()
  const [open, setOpen] = useState(false)
  const auth = getAuth()

  const handleClick = () => setOpen(!open)
  const handleLogout = () => signOut(auth)

  if (!photoURL) return null

  return (
    <>
      <button className="mr-6" onClick={handleClick}>
        <picture className="flex items-center w-8">
          <Image className="rounded-full" src={photoURL} width={32} height={32} />
        </picture>
      </button>
      <div className={`${open ? 'flex' : 'hidden'} absolute right-0 top-14 mr-5 bg-white`}>
        <div className="flex justify-center flex-col rounded-md shadow-lg border">
          <div className="flex items-center justify-center pt-10">
            <Image className="rounded-full" src={photoURL} width={80} height={80} />
          </div>
          <div className="text-center border-b pl-10 pr-10">
            <p className="font-medium mt-5">{displayName}</p>
            <p className="text-gray-500 mb-5">{email}</p>
          </div>
          <button className="p-2 border m-5 hover:bg-gray-100" onClick={handleLogout}>
            Cerrar sesion
          </button>
        </div>
      </div>
    </>
  )
}
