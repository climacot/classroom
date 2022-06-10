import Link from "next/link";
import React, { ReactNode } from "react";

export default function LinkGoogle({ children }: { children: ReactNode }) {
  return (
    <Link href={"/"}>
      <a className="grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md">
        {children}
      </a>
    </Link>
  );
}
