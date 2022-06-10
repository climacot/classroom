import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ButtonGoogle from "../components/buttons/google";
import Header from "../components/header/header";
import Google from "../components/logos/google";

const Home: NextPage = () => {
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
          <div className="grid sm:grid-cols-2">
            <div className="pt-52 lg:px-20">
              <h1 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-semibold">Productos que potencian la educación</h1>
              <p className="mt-6 text-xl">
                Las herramientas de Google for Education funcionan en conjunto para transformar la enseñanza y el
                aprendizaje, de manera que cada alumno y educador puedan desarrollar su potencial personal.
              </p>
              <div className="flex mt-12">
                <ButtonGoogle>Comienza a usar Google Workspace for Education</ButtonGoogle>
              </div>
            </div>
            <div className="flex justify-center w-full px-4">
              <video
                playsInline
                muted
                autoPlay
                preload="none"
                poster="https://lh3.googleusercontent.com/lBADbh94j0z0i726I2sunyOm8lWjkB1RjTYG3K0Qq4fP0i-ET8_wJT3iH9iAUlI98m5mqCT512NSs-0reWI6fBb53xcdALbl69sD45czZo0QlP0wvQ"
              >
                <source src="/video.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
