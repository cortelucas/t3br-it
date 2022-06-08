import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import lucas from "../public/Lucas.jpeg";
import fabio from "../public/fabio.jpg";
import mousarah from "../public/mousarah.jpg";

const QuemSomos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>T3BR - IT | Quem Somos</title>
        <meta name="description" content="IT T3BR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          <span className={styles.title_text}>Quem somos?</span>
        </h3>
        <span className={styles.description}>
          Somos a T3BR - IT, empresa especializada em desenvolvimento de
          sistemas e soluções digitais.
        </span>
        <div className={styles.grid}>
          <section className={styles.description}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div>
                  <Image src={lucas} alt="Foto do CTO Lucas"></Image>
                </div>
                <h2>Lucas</h2>
                <div>
                  <p>
                    <strong>Cargo:</strong> CTO
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <Image src={fabio} alt="Foto do CTO Fabio"></Image>
                </div>
                <h2>Fábio</h2>
                <div>
                  <p>
                    <strong>Cargo:</strong> Analista de Projetos
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <Image src={mousarah} alt="Foto do CTO Mousarah"></Image>
                </div>
                <h2>Mousarah</h2>
                <div>
                  <p>
                    <strong>Cargo:</strong> Analista de Testes
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Link href="/">
          <a className={styles.link}>Voltar ao início</a>
        </Link>
      </main>
    </div>
  );
};

export default QuemSomos;
