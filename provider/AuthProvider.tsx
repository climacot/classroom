import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext, Iuser, userInit } from "../context/AuthContext";
import { auth } from "../firebase";
import { signInWithPopupFirebase } from "../firebase/auth";

type ComponentProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: ComponentProps) {
  const [user, setUser] = useState<Iuser | undefined>(undefined);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, function (user) {
      console.log(user);
    });

    return () => unsuscribe();
  }, []);

  const login = async () => {
    const userLogin = await signInWithPopupFirebase();
    const decorateUser = {
      displayName: userLogin?.displayName,
      email: userLogin?.email,
      photoUrl: userLogin?.photoURL,
    };
    setUser(decorateUser);
    window.localStorage.setItem("session", JSON.stringify(decorateUser));
    console.log(userLogin);
  };

  const signOut = () => {
    const userLogin = signInWithPopupFirebase();
    console.log(userLogin);
  };

  return <AuthContext.Provider value={{ user, login, signOut }}>{children}</AuthContext.Provider>;
}
