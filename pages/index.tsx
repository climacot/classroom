import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Classroom</div>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/info",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
