import { AuthAction, getFirebaseAdmin, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Course from '../components/course'
import LayoutMain from '../components/layout'

const IndexPage = ({ courses }) => {
  return (
    <LayoutMain>
      <ol className="flex flex-wrap gap-6 p-5">
        {courses.map(c => (
          <li key={c.id}>
            <Course key={c.id} {...c} />
          </li>
        ))}
      </ol>
    </LayoutMain>
  )
}

export const getServerSideProps = withAuthUserTokenSSR({ whenUnauthed: AuthAction.REDIRECT_TO_LOGIN })(
  async ({ AuthUser }) => {
    const { id } = AuthUser
    const db = getFirebaseAdmin().firestore()
    const querySnapshot = await db.collection('courses').where('owner', '==', id).get()
    const courses = []

    querySnapshot.forEach(doc => {
      courses.push({
        id: doc.id,
        ...doc.data()
      })
    })

    return {
      props: {
        courses
      }
    }
  }
)

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(IndexPage)
