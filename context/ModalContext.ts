import { createContext } from 'react'

export const modalInit = {
  openModalCreate: false,
  openModalInfo: false,
  handleModalInfo: () => {},
  handleModalCreate: () => {}
}

export const ModalContext = createContext(modalInit)
