import Head from "next/head";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

//Components
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Zaan Crop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={'homeSection'}>
        <SideBar />
        <section className={'mainContentSection'}>
          <Header />
          <Component {...pageProps} />
        </section>
      </section>
    </>
  );
}
