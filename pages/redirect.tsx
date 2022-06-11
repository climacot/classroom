import { getSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { NextPageContext } from 'next'

export default function RedirectPage() {
  useEffect(() => {
    signIn()
  }, [])

  return null
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        origin: 'info',
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
