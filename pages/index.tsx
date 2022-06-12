import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import Google from '../components/logos/google'
import Head from 'next/head'
import Header from '../components/header/header'
import Link from 'next/link'
import Menu from '../components/buttons/menu'
import SignOutButtonGoogle from '../components/buttons/signOut'
import MainContainer from '../components/layout/main'

type ComponentProps = {
  image: string
  name: string
  email: string
}

export default function Home({ image, email, name }: ComponentProps) {
  return (
    <>
      <Head>
        <title>Clases</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Header>
          <div className='flex flex-wrap items-center justify-between w-full border-b'>
            <Link href={'/'}>
              <a className='h-16 flex items-center justify-center flex-wrap ml-4 min-h-0 select-none'>
                <div className='w-20'>
                  <Google />
                </div>
                <p className='text-2xl ml-2 text-gray-500 mb-2'>Classroom</p>
              </a>
            </Link>
            <div className='flex'>
              <Menu />
              <div className='hidden sm:flex items-center mr-5'>
                <SignOutButtonGoogle image={image} name={name} email={email} />
              </div>
            </div>
          </div>
        </Header>
        <MainContainer>
          <section className='flex flex-wrap gap-6 p-5'>
            <div className='flex flex-col justify-between rounded-lg border w-80 h-72 hover:shadow-md cursor-pointer'>
              <Link href={'/'}>
                <a className=''>
                  <div className='rounded-t-lg border-b h-24 p-4 bg-green-600'>
                    <h2 className='text-white truncate hover:underline hover:underline-offset-1'>
                      <div className='text-2xl'>Informatica</div>
                      <div className='truncate'>informacion</div>
                    </h2>
                  </div>
                </a>
              </Link>
              <div></div>
              <div className='h-14 border-t'></div>
            </div>
          </section>
        </MainContainer>
      </>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/info',
        permanent: false,
        dd: ''
      }
    }
  }

  return {
    props: {
      session,
      image: session.user?.image,
      name: session.user?.name,
      email: session.user?.email
    }
  }
}
