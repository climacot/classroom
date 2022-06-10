import Link from "next/link";
import React, { ReactNode } from "react";
import { signInWithPopupFirebase } from "../../firebase/auth";
import useAuth from "../../hooks/useAuth";

export default function LoginButtonGoogle({ children }: { children: ReactNode }) {
  const auth = useAuth();

  return (
    <button
      onClick={() => auth.login()}
      className="grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md"
    >
      {children}
    </button>
  );
}
