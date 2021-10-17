import Head from 'next/head'
// Components
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Headless.Team</title>
        <meta name="description" content="Pro Performance, Pro Attitude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Nav /> */}
        <div style = {{textAlign: 'center', marginBottom: '5rem'}}>
          <h1 style = {{fontSize: '61px'}}>Headless Team</h1>
          <h2>Coming soon...</h2>
        </div>
        <Newsletter />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
