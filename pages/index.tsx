import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="IT T3BR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>T3BR IT</h1>
        <h4 className={styles.description}>Seja bem Vindo</h4>

        <div className={styles.grid}>
          <ul className={styles.grid}>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/quem-somos">
                Quem somos?
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/servicos-ti">
                Serviços à TI
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/servicos-usuarios">
                Serviços a usuários
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/servicos-clientes">
                Serviços a clientes e fornecedores
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
