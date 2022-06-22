import Header from '../header'
import Modals from '../modals'

export default function LayoutMain({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Modals />
    </div>
  )
}
