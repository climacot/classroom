import Link from 'next/link'
import CoursesMenu from './coursesMenu'
import GoogleSvg from './svg/google'
import UserMenu from './userMenu'

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b h-16">
      <Link href={'/'}>
        <a className="flex ml-16">
          <GoogleSvg />
          <p className="text-xl leading-5 ml-1">Classroom</p>
        </a>
      </Link>
      <div className="flex">
        <CoursesMenu />
        <UserMenu />
      </div>
    </header>
  )
}
