import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>T3BR - IT | Home</title>
        <meta name="description" content="IT T3BR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="logo"></Image>

        <div className={styles.grid}>
          <ul className={styles.grid}>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/quem-somos">
                Quem somos?
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/servicos">
                Serviços
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
