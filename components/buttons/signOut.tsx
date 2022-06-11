import Image from 'next/image'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

type ComponentProps = {
  image: string
  name: string
  email: string
}

export default function SignOutButtonGoogle({ image, name, email }: ComponentProps) {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)

  return (
    <>
      <button onClick={handleClick}>
        <div className='flex items-center'>
          <Image className='rounded-full' width={32} height={32} src={image} />
        </div>
      </button>
      <div className={`${open ? 'flex' : 'hidden'} absolute right-0 top-14 mr-5 bg-white`}>
        <div className='flex justify-center flex-col rounded-md shadow-lg border'>
          <div className='flex items-center justify-center pt-10'>
            <Image className='rounded-full' src={image} width={80} height={80} />
          </div>
          <div className='text-center border-b pl-10 pr-10'>
            <p className='font-medium mt-5'>{name}</p>
            <p className='text-gray-500 mb-5'>{email}</p>
          </div>
          <button className='p-2 border m-5 hover:bg-gray-100' onClick={() => signOut()}>
            Cerrar sesion
          </button>
        </div>
      </div>
    </>
  )
}
