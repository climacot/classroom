import Link from 'next/link'
import Header from '../header/header'
import Google from '../logos/google'

export default function LoaderHeader() {
  return (
    <Header>
      <div className='flex flex-wrap items-center justify-between w-full border-b-2 border-blue-500'>
        <Link href={'/'}>
          <a className='h-16 flex items-center justify-center flex-wrap ml-4 min-h-0'>
            <div className='w-16'>
              <Google />
            </div>
            <p className='text-xl ml-2 text-gray-500 mb-1'>Classroom</p>
          </a>
        </Link>
      </div>
    </Header>
  )
}
