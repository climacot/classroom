import Header from '../header'
import Modals from '../modals'

export default function LayoutMain({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Modals />
    </>
  )
}
