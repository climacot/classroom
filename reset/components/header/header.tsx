import { ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
}

export default function Header({ children }: ComponentProps) {
  return <header className='flex justify-center md:justify-start'>{children}</header>
}
