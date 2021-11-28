import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/globals.css';

import * as ga from '../lib/ga'

function MyApp ({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {

      // <Head>
      //   <meta charset='utf-8' />
      //   <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      //   <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      //   <meta name='description' content='Description' />
      //   <title>Next.js PWA</title>
      //   <link rel='manifest' href='/manifest.json' />
      //   <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      //   <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      //   <link rel='apple-touch-icon' href='/logo1.png'></link>
      //   <meta name='theme-color' content='#21125e' />
      // </Head>


      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return <Component { ...pageProps } />
}

export default MyApp
