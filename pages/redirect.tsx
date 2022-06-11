import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function RedirectPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
    if (!session) signIn();
  }, [router, session]);

  return null;
}
