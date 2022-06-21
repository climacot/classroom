import { ReactNode, useState } from 'react'
import { createCourse } from '../../firebase/courses'
import useModal from '../../hooks/useModal'

type ComponentProps = {
  children: ReactNode
  owner: string
}

export default function MainContainer({ children, owner }: ComponentProps) {
  const { openModalCreate, handleModalCreate, openModalInfo, handleModalInfo } = useModal()
  const [check, setCheck] = useState(false)
  const [name, setName] = useState('')

  const handleClickAccept = () => {
    setCheck(false)
    handleModalInfo()
    handleModalCreate()
  }

  const handleCreate = () => {
    setName('')
    createCourse(
      {
        name,
        owner,
        id: '',
        timestamp: Date.now()
      },
      handleModalCreate
    )
  }

  return (
    <main>
      {children}
      <div>
        {openModalCreate && (
          <div className='absolute top-0 flex justify-center items-center w-full h-screen bg-black/50'>
            <div className='border rounded-md m-5 p-5 bg-white max-w-xl w-full'>
              <p className='mb-5 font-medium'>Crear clase</p>
              <div className='mb-5'>
                <label>
                  <span className='text-gray-500'>Nombre</span>
                  <input
                    className='p-4 mt-2 outline-none bg-gray-100 hover:bg-gray-200 max-w-xl w-full border-b border-black'
                    placeholder='Nombre de la clase (obligatorio)'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className='flex justify-end gap-4'>
                <button className='font-medium p-2 hover:bg-gray-100 rounded' onClick={handleModalCreate}>
                  Cancelar
                </button>
                <button
                  disabled={!(name.length > 0)}
                  className={`font-medium p-2 ${
                    !(name.length > 0) ? 'text-gray-400' : 'hover:bg-gray-100 rounded text-blue-500'
                  }`}
                  onClick={handleCreate}
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        )}
        {openModalInfo && (
          <div className='absolute top-0 flex justify-center items-center min-h-full min-w-full bg-black/50'>
            <div className='border rounded-md max-w-lg m-5 p-5 bg-white'>
              <p className='font-medium mb-4'>¿Usas Classroom en un centro educativo con alumnos?</p>
              <p className='mb-4'>
                Si es así, el centro debe crear una cuenta gratuita de{' '}
                <span className='text-blue-500'>Google Workspace for Education</span> para que puedas usar Classroom.
                <span className='text-blue-500'>Más información</span>
              </p>
              <p className='mb-4'>
                Google Workspace for Education permite a los centros decidir qué servicios de Google pueden usar sus
                alumnos y ofrece un nivel mayor de <span className='text-blue-500'>privacidad y seguridad</span>, que
                tan importantes son en el entorno educativo. Los alumnos no pueden usar Google Classroom en un centro
                educativo con una cuenta personal.
              </p>
              <div onClick={() => setCheck(!check)} className='flex items-center p-5 bg-gray-100 mb-5'>
                <input
                  checked={check}
                  className='p-2 cursor-pointer'
                  onChange={e => setCheck(e.target.checked)}
                  type='checkbox'
                />
                <p className='ml-5'>
                  He leído y entiendo el aviso anterior; no uso Classroom en un centro educativo con alumnos
                </p>
              </div>
              <div className='flex justify-end gap-4'>
                <button className='font-medium p-2 hover:bg-gray-100 rounded' onClick={handleModalInfo}>
                  Volver
                </button>
                <button
                  disabled={!check}
                  className={`font-medium p-2 ${!check ? 'text-gray-400' : 'hover:bg-gray-100 rounded text-blue-500'}`}
                  onClick={handleClickAccept}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
