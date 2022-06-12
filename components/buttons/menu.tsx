import { useState } from 'react'
import Image from 'next/image'
import useModal from '../../hooks/useModal'

export default function Menu() {
  const [open, setOpen] = useState(false)
  const { handleModalInfo } = useModal()

  const handleClick = () => setOpen(!open)

  return (
    <>
      <button onClick={handleClick} className='rounded-full p-2 flex items-center mr-3 hover:bg-gray-100'>
        <Image className='pointer-events-none' src={'/plus.png'} width={34} height={34} />
      </button>
      <div className={`${open ? 'block' : 'hidden'} absolute right-0 top-14 mr-5 bg-white`}>
        <div className='w-40 flex flex-col text-center rounded-md shadow-lg border pt-2 pb-2'>
          <button className='p-3 hover:bg-gray-100'>Unirme a clase</button>
          <button onClick={handleModalInfo} className='p-3 hover:bg-gray-100'>
            Crear clase
          </button>
        </div>
      </div>
    </>
  )
}
