import Head from "next/head";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IMPACTO PET</title>
      </Head>
      <main className="mainContainer">
        <img src="/images/header.JPG" alt="logo" className=".img" />
      </main>
      <footer>
        <p>Desenvolvido por César Augusto Costa</p>
      </footer>
    </>
  );
}
