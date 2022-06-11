import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import SignOutButtonGoogle from '../components/buttons/signOut'
import Header from '../components/header/header'
import Link from 'next/link'
import Google from '../components/logos/google'

type ComponentProps = {
  image: string
  name: string
  email: string
}

export default function Home({ image, email, name }: ComponentProps) {
  return (
    <div>
      <Head>
        <title>Clases</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header>
          <div className='flex flex-wrap items-center justify-between w-full border-b'>
            <Link href={'/'}>
              <a className='h-16 flex items-center justify-center flex-wrap ml-4 min-h-0'>
                <div className='w-20'>
                  <Google />
                </div>
                <p className='text-2xl ml-2 text-gray-500 mb-2'>Classroom</p>
              </a>
            </Link>
            <div className='hidden sm:flex items-center mr-5'>
              <SignOutButtonGoogle image={image} name={name} email={email} />
            </div>
          </div>
        </Header>
      </div>
    </div>
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
