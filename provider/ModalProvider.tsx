import { ReactNode, useState } from 'react'
import { ModalContext } from '../context/ModalContext'

type ComponentProps = {
  children: ReactNode
}

export default function ModalProvider({ children }: ComponentProps) {
  const [openModalInfo, setOpenModalInfo] = useState(false)
  const [openModalCreate, setOpenModalCreate] = useState(false)

  const handleModalInfo = () => setOpenModalInfo(!openModalInfo)
  const handleModalCreate = () => setOpenModalCreate(!openModalCreate)

  return (
    <ModalContext.Provider value={{ openModalInfo, openModalCreate, handleModalInfo, handleModalCreate }}>
      {children}
    </ModalContext.Provider>
  )
}
