import Link from "next/link";
import React, { ReactNode } from "react";

export default function ButtonGoogle({ children }: { children: ReactNode }) {
  return (
    <Link href={"/"}>
      <a className="text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md mr-5">{children}</a>
    </Link>
  );
}
