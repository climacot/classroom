import { AuthAction, getFirebaseAdmin, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import { getCourses, Icourse } from '../firebase/courses'
import Google from '../components/logos/google'
import Head from 'next/head'
import Header from '../components/header/header'
import Link from 'next/link'
import MainContainer from '../components/layout/main'
import Menu from '../components/buttons/menu'
import SignOutButtonGoogle from '../components/buttons/signOut'
import { FC } from 'react'
import { signInWithCustomToken } from 'firebase/auth'
import { auth } from '../firebase'

type ComponentProps = {
  image: string
  name: string
  email: string
  owner: string
  courses: Icourse[]
}

const Home: FC<ComponentProps> = ({ image, email, name, owner, courses }) => {
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
        <MainContainer owner={owner}>
          <section className='flex flex-wrap gap-6 p-5'>
            {courses.map(c => (
              <div
                key={c.id}
                className='flex flex-col justify-between rounded-lg border w-80 h-72 hover:shadow-md cursor-pointer'
              >
                <Link href={'/'}>
                  <a className=''>
                    <div className='rounded-t-lg border-b h-24 p-4 bg-green-600'>
                      <h2 className='text-white truncate hover:underline hover:underline-offset-1'>
                        <div className='text-2xl'>{c.name}</div>
                        <div className='truncate'>...</div>
                      </h2>
                    </div>
                  </a>
                </Link>
                <div></div>
                <div className='h-14 border-t'></div>
              </div>
            ))}
          </section>
        </MainContainer>
      </div>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async ({ AuthUser }) => {
  const uid = AuthUser.id

  const admin = getFirebaseAdmin()
  const token = await admin.auth().createCustomToken(uid)
  signInWithCustomToken(auth, token)
  const courses = await getCourses({ uid })

  return {
    props: {
      image: AuthUser.photoURL,
      name: AuthUser.displayName,
      email: AuthUser.email,
      owner: AuthUser.id,
      courses
    }
  }
})

export default withAuthUser<ComponentProps>({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Home)
