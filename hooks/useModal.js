import { ModalContext } from '../context/ModalContext'
import { useContext } from 'react'

export default function useModal() {
  return useContext(ModalContext)
}
