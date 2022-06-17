import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import { FC } from 'react'
import { getCourses } from '../firebase/courses'
import { Icourse, Iuser } from 'models/user'
import Google from '../components/logos/google'
import Head from 'next/head'
import Header from '../components/header/header'
import Link from 'next/link'
import LoaderHeader from '../components/Loaders/LoaderHeader'
import MainContainer from '../components/layout/main'
import Menu from '../components/buttons/menu'
import SignOutButtonGoogle from '../components/buttons/signOut'

type ComponentProps = {
  user: Iuser
  courses: Icourse[]
}

const Home: FC<ComponentProps> = ({ user, courses }) => {
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
                <div className='w-16'>
                  <Google />
                </div>
                <p className='text-xl ml-2 text-gray-500 mb-1'>Classroom</p>
              </a>
            </Link>
            <div className='flex'>
              <Menu />
              <div className='hidden sm:flex items-center mr-5'>
                <SignOutButtonGoogle image={user.photoURL} name={user.displayName} email={user.email} />
              </div>
            </div>
          </div>
        </Header>
        <MainContainer owner={user.id}>
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
  const { displayName, email, photoURL, id } = AuthUser

  const courses = await getCourses(id)

  return {
    props: {
      user: {
        displayName,
        email,
        photoURL,
        id
      },
      courses
    }
  }
})

export default withAuthUser<ComponentProps>({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: LoaderHeader
})(Home)
