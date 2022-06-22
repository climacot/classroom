import Header from '../header'
import LayoutModals from './modals'

export default function LayoutMain({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <LayoutModals />
    </>
  )
}
