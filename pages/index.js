import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Headless.Team</title>
        <meta name="description" content="Pro Performance, Pro Attitude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Headless.Team
        </h1>
        <h2>Coming Soon</h2>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
