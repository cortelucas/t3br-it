import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Services.module.css";
import logo from "../public/logo.png";

const Services: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>T3BR - IT | Serviços</title>
        <meta name="description" content="IT T3BR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h3 className={styles.title}>
            <span className={styles.title_text}>Serviços</span>
          </h3>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iBR</h2>
              <p>
                <strong>Descrição:</strong> Sistema de suporte à atividade
                administrativa corporativa. O foco deste sistema é a própria
                T3BR e ele oferece total suporte operacional à empresa.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iDesk</h2>
              <p>
                <strong>Descrição:</strong> Sistema de suportes para abertura de
                chamados, atendimento ao cliente, gestão de chamados,
                atendimento ao fornecedor.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iDB</h2>
              <p>
                <strong>Descrição:</strong> Sistema de suportes para correções
                de problemas relacionados ao banco de dados.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iDoc</h2>
              <p>
                <strong>Descrição:</strong> Sistema para a solicitação de
                documentos interdepartamentos.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iNet</h2>
              <p>
                <strong>Descrição:</strong> Sistema para a solicitação de
                atendimentos referente a rede.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <h2>iHelp</h2>
              <p>
                <strong>Descrição:</strong> Sistema para a solicitação de
                atendimentos em geral.
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className={styles.link}>Voltar ao início</a>
        </Link>
      </main>
    </div>
  );
};

export default Services;
