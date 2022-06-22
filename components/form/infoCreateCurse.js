import { useState } from 'react'
import useModal from '../../hooks/useModal'

export default function FormInfoCreateCurse() {
  const { handleModalInfo, handleModalCreate } = useModal()
  const [check, setCheck] = useState(false)

  const handleClickAccept = () => {
    setCheck(false)
    handleModalInfo()
    handleModalCreate()
  }

  return (
    <>
      <p className="font-medium mb-4">¿Usas Classroom en un centro educativo con alumnos?</p>
      <p className="mb-4">
        Si es así, el centro debe crear una cuenta gratuita de{' '}
        <span className="text-blue-500">Google Workspace for Education</span> para que puedas usar Classroom.
        <span className="text-blue-500">Más información</span>
      </p>
      <p className="mb-4">
        Google Workspace for Education permite a los centros decidir qué servicios de Google pueden usar sus alumnos y
        ofrece un nivel mayor de <span className="text-blue-500">privacidad y seguridad</span>, que tan importantes son
        en el entorno educativo. Los alumnos no pueden usar Google Classroom en un centro educativo con una cuenta
        personal.
      </p>
      <div onClick={() => setCheck(!check)} className="flex items-center p-5 bg-gray-100 mb-5">
        <input
          checked={check}
          className="p-2 cursor-pointer"
          onChange={e => setCheck(e.target.checked)}
          type="checkbox"
        />
        <p className="ml-5">
          He leído y entiendo el aviso anterior; no uso Classroom en un centro educativo con alumnos
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button className="font-medium p-2 hover:bg-gray-100 rounded" onClick={handleModalInfo}>
          Volver
        </button>
        <button
          disabled={!check}
          className={`font-medium p-2 ${!check ? 'text-gray-400' : 'hover:bg-gray-100 rounded text-blue-500'}`}
          onClick={handleClickAccept}>
          Continuar
        </button>
      </div>
    </>
  )
}
