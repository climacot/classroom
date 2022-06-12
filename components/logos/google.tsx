import Image from 'next/image'
import google from '../../public/google.svg'

export default function Google() {
  return (
    <div draggable='false' className='flex items-center'>
      <Image className='pointer-events-none' src={google} alt='Logo Google' />
    </div>
  )
}
