import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
            <Link className={styles.menu_item} href="/quem-somos">
              <a className={styles.link}>Quem somos?</a>
            </Link>
            <Link className={styles.menu_item} href="/servicos">
              <a className={styles.link}>Serviços</a>
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
