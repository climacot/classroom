import classroom from '../public/classroom.svg'
import Google from '../components/logos/google'
import Head from 'next/head'
import Header from '../components/header/header'
import Image from 'next/image'
import InitialVideo from '../components/videos/initialVideo'
import Link from 'next/link'
import LinkGoogle from '../components/buttons/google'
import Nav from '../components/header/nav'

const InfoPage = () => {
  return (
    <div>
      <Head>
        <title>Classroom</title>
        <meta
          name='description'
          content='Google Classroom es un lugar central donde se unen la enseñanza y el
                  aprendizaje. Esta herramienta segura y fácil de usar ayuda a los educadores a
                  administrar, medir y enriquecer las experiencias de aprendizaje.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header>
          <div className='flex flex-wrap items-center justify-between w-full'>
            <Link href={'/'}>
              <a className='h-16 flex items-center justify-center flex-wrap ml-4 min-h-0'>
                <div className='w-16'>
                  <Google />
                </div>
                <p className='text-xl ml-2 text-gray-500 mb-1'>for Education</p>
              </a>
            </Link>
            <div className='grow justify-start ml-0 lg:ml-10'>
              <Nav />
            </div>
            <div className='hidden xl:flex items-center mr-5'>
              <LinkGoogle>Comenzar gratis</LinkGoogle>
            </div>
          </div>
        </Header>
        <main className='container mx-auto 2xl:px-28 px-4 mb-10'>
          <div className='sm:grid sm:grid-cols-2 flex flex-col-reverse'>
            <section className='pt-11 lg:pt-36 lg:px-20'>
              <div>
                <Image src={classroom} alt='logo de classroom' />
              </div>
              <h1 className='text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-semibold'>
                Productos que potencian la educación
              </h1>
              <p className='mt-6 text-xl'>
                Las herramientas de Google for Education funcionan en conjunto para transformar la enseñanza y el
                aprendizaje, de manera que cada alumno y educador puedan desarrollar su potencial personal.
              </p>
              <div className='hidden md:flex mt-12'>
                <Link href={'/auth'}>
                  <a className='grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md'>
                    Accede a Classroom
                  </a>
                </Link>
              </div>
              <div className='flex md:hidden mt-12'>
                <Link href={'/auth'}>
                  <a className='grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md'>
                    Accede a Classroom
                  </a>
                </Link>
              </div>
            </section>
            <section className='flex justify-center w-full px-4'>
              <InitialVideo />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default InfoPage
