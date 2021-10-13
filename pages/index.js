import Head from 'next/head'
// Components
import Nav from '../components/Nav/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Headless.Team</title>
        <meta name="description" content="Pro Performance, Pro Attitude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
