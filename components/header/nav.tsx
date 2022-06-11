import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='hidden md:block'>
      <ul className='flex'>
        {items.map((item, index) => (
          <li key={index} className='pb-1'>
            <Link href={item.href}>
              <a className='text-lg p-3 text-gray-600 rounded-md duration-700 hover:bg-gray-100'>{item.content}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const items = [
  {
    content: 'Por qué Google',
    href: '/'
  },
  {
    content: 'Google Workspace for Education',
    href: '/'
  },
  {
    content: 'Comenzar',
    href: '/'
  },
  {
    content: 'Para educadores',
    href: '/'
  }
]
