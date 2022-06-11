import Image from 'next/image'
import google from '../../public/google.svg'

export default function Google() {
  return (
    <div className='flex items-center'>
      <Image src={google} alt='Logo Google' />
    </div>
  )
}
