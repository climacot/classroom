import React, { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";
import { signIn, signOut, useSession } from "next-auth/react";

type ComponentProps = {
  children: ReactNode;
};

export default function SignOutButtonGoogle({ children }: ComponentProps) {
  const auth = useAuth();

  return (
    <a
      href={`/api/auth/signout`}
      className="grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      {children}
    </a>
  );
}
