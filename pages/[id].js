import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import LayoutMain from '../components/layout'

const IndexPage = () => {
  return <LayoutMain>curso</LayoutMain>
}

export const getServerSideProps = withAuthUserTokenSSR({ whenUnauthed: AuthAction.REDIRECT_TO_LOGIN })(() => {
  return {
    props: {}
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(IndexPage)
