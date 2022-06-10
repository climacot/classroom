import Link from "next/link";
import ButtonGoogle from "../buttons/google";
import Google from "../logos/google";

const items = [
  {
    content: "Por qué Google",
    href: "/",
  },
  {
    content: "Google Workspace for Education",
    href: "/",
  },
  {
    content: "Comenzar",
    href: "/",
  },
  {
    content: "Para educadores",
    href: "/",
  },
];

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between">
      <div className="flex items-center flex-wrap">
        <Link href={"/"}>
          <a className="h-16 flex items-center justify-center flex-wrap ml-4 min-h-0">
            <div className="w-20">
              <Google />
            </div>
            <p className="text-2xl ml-2 text-gray-500 mb-2">for Education</p>
          </a>
        </Link>
        <nav className="hidden md:block ml-0 lg:ml-10">
          <ul className="flex">
            {items.map((item, index) => (
              <li key={index} className="pb-1">
                <Link href={item.href}>
                  <a className="text-lg p-3 text-gray-600 rounded-md duration-700 hover:bg-gray-100">{item.content}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden xl:flex items-center mr-5">
        <ButtonGoogle>Comenzar gratis</ButtonGoogle>
      </div>
    </header>
  );
}
