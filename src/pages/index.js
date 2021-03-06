import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>  
    <div className={styles.container}>
      <Head>
        <title>Protagonistas de Saia</title>
        <meta name="description" content="Protagonistas de Saia - Mentoria Feminina" />
        <meta name="facebook-domain-verification" content="9coctruo1yg1tk66ebi4g7zx2b6kz2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Protagonistas de Saia</h2>
        <h1 className={styles.title}>
          Em <a href="https://www.instagram.com/protagonistasdesaia/">Construção</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por Otima Consultoria, Comunicação e Desing
        </a>
      </footer>
    </div>
</>
  )
}
