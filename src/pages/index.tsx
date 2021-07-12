import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import headerImg from "../../public/images/header.png";
import itemImg from "../../public/images/white-orange-logo.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IMPACTO PET</title>
      </Head>
      <header className={styles.headerContainer}>
        <Image src={headerImg} alt="logo" />
      </header>
      <main className={styles.mainContainer}>
        <ul style={{ listStyle: "none" }}>
          <li className={styles.item}>
            <div className={styles.row}>
              <Image
                src={itemImg}
                alt="item-menu"
                layout="intrinsic"
                width={50}
                height={50}
              />
              BANHO E TOSA
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.row}>
              <Image
                src={itemImg}
                alt="item-menu"
                layout="intrinsic"
                width={50}
                height={50}
              />
              UBER DOG
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.row}>
              <Image
                src={itemImg}
                alt="item-menu"
                layout="intrinsic"
                width={50}
                height={50}
              />
              DISK ENTREGA
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.row}>
              <Image
                src={itemImg}
                alt="item-menu"
                layout="intrinsic"
                width={50}
                height={50}
              />
              ACESSÓRIOS
            </div>
          </li>
        </ul>
        <div className={styles.social}>
          <span className={styles.icon}>
            <FaInstagram size={60} color="#028fcb" />
          </span>
          <span className={styles.icon}>
            <FaWhatsapp size={60} color="#028fcb" />
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
