import { useAuthUser } from 'next-firebase-auth'
import { useState } from 'react'
import useModal from '../hooks/useModal'
import PlusSvg from './svg/plus'

export default function CoursesMenu() {
  const [open, setOpen] = useState(false)
  const { handleModalInfo } = useModal()
  const { id } = useAuthUser()

  const handleClick = () => setOpen(!open)

  if (!id) return null

  return (
    <>
      <button onClick={handleClick} className="mr-3 p-3">
        <PlusSvg />
      </button>
      <div className={`${open ? 'block' : 'hidden'} absolute right-0 top-14 mr-5 bg-white`}>
        <div className="w-40 flex flex-col text-center rounded-md shadow-lg border pt-2 pb-2">
          <button className="p-3 hover:bg-gray-100">Unirme a clase</button>
          <button className="p-3 hover:bg-gray-100" onClick={handleModalInfo}>
            Crear clase
          </button>
        </div>
      </div>
    </>
  )
}
