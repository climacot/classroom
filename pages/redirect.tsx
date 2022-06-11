import { getSession, signIn } from 'next-auth/react'
import { NextPageContext } from 'next'
import { useEffect } from 'react'

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
        permanent: true
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
