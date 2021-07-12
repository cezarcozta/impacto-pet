import Head from "next/head";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IMPACTO PET</title>
      </Head>
      <header className={styles.headerContainer}>
        <img src="/images/header.JPG" alt="logo" className={styles.img} />
      </header>
      <main className={styles.mainContainer}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <div className={styles.row}>
              <img
                src="/images/white-orange-logo.png"
                alt="item-menu"
                className={styles.item}
              />
              BANHO
            </div>
          </li>

          <li>
            <div className={styles.row}>
              <img
                src="/images/white-orange-logo.png"
                alt="item-menu"
                className={styles.item}
              />
              TOSA
            </div>
          </li>
          <li>
            <div className={styles.row}>
              <img
                src="/images/white-orange-logo.png"
                alt="item-menu"
                className={styles.item}
              />
              PET SHOP
            </div>
          </li>
          <li>
            <div className={styles.row}>
              <img
                src="/images/white-orange-logo.png"
                alt="item-menu"
                className={styles.item}
              />
              TÁXI DOG
            </div>
          </li>
          <li>
            <div className={styles.row}>
              <img
                src="/images/white-orange-logo.png"
                alt="item-menu"
                className={styles.item}
              />
              DISK ENTREGA
            </div>
          </li>
        </ul>
        <div className={styles.social}>
          <span className={styles.icon}>
            <FaInstagram size={60} />
          </span>
          <span className={styles.icon}>
            <FaWhatsapp size={60} />
          </span>
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <p>
          <strong>
            <small>Desenvolvido por César Augusto Costa</small>
          </strong>
        </p>
      </footer>
    </>
  );
}
