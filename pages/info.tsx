import classroom from "../public/classroom.svg";
import Head from "next/head";
import Header from "../components/header/header";
import Image from "next/image";
import InitialVideo from "../components/videos/initialVideo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Classroom</title>
        <meta
          name="description"
          content="Google Classroom es un lugar central donde se unen la enseñanza y el
                  aprendizaje. Esta herramienta segura y fácil de usar ayuda a los educadores a
                  administrar, medir y enriquecer las experiencias de aprendizaje."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Header />
        </div>
        <section className="container mx-auto 2xl:px-28 px-4">
          <div className="sm:grid sm:grid-cols-2 flex flex-col-reverse">
            <div className="pt-11 lg:pt-36 lg:px-20">
              <Image src={classroom} alt="logo de classroom" />
              <h1 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-semibold">
                Productos que potencian la educación
              </h1>
              <p className="mt-6 text-xl">
                Las herramientas de Google for Education funcionan en conjunto para transformar la enseñanza y el
                aprendizaje, de manera que cada alumno y educador puedan desarrollar su potencial personal.
              </p>
              <div className="hidden md:flex mt-12">
                <Link href={"/redirect"}>
                  <a className="grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md">
                    Accede a Classroom
                  </a>
                </Link>
              </div>
              <div className="flex md:hidden mt-12">
                <Link href={"/redirect"}>
                  <a className="grow text-center text-lg p-3 text-white bg-blue-500 hover:bg-blue-600 duration-700 rounded-md">
                    Accede a Classroom
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full px-4">
              <InitialVideo />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}