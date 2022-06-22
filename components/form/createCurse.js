import { createCourse } from '../../services/course'
import { useAuthUser } from 'next-firebase-auth'
import { useState } from 'react'
import useModal from '../../hooks/useModal'
import { useRouter } from 'next/router'

export default function FormCreateCurse() {
  const [name, setName] = useState('')
  const { handleModalCreate } = useModal()
  const { id } = useAuthUser()
  const location = useRouter()

  const handleCreate = () => {
    setName('')
    createCourse({ name, owner: id }, () => {
      handleModalCreate()
      location.push(`/${id}`)
    })
  }

  return (
    <>
      <p className="mb-5 font-medium">Crear clase</p>
      <div className="mb-5">
        <label>
          <span className="text-gray-500">Nombre</span>
          <input
            className="p-4 mt-2 outline-none bg-gray-100 hover:bg-gray-200 max-w-xl w-full border-b border-black"
            placeholder="Nombre de la clase (obligatorio)"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="flex justify-end gap-4">
        <button className="font-medium p-2 hover:bg-gray-100 rounded" onClick={handleModalCreate}>
          Cancelar
        </button>
        <button
          disabled={!(name.length > 0)}
          className={`font-medium p-2 ${
            !(name.length > 0) ? 'text-gray-400' : 'hover:bg-gray-100 rounded text-blue-500'
          }`}
          onClick={handleCreate}>
          Crear
        </button>
      </div>
    </>
  )
}
