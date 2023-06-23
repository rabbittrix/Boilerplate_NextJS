import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Layout from '../components/layout'
import { DataProvider } from '../context/data'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wella Company - Boilerplate</title>
        <link rel="shortcut icon" href="/img/wellaLogo.png" />
        <link rel="apple-touch-icon" href="/img/wellaLogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="-webkit-linear-gradient #06092b, #cccccc"
        />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </>
  )
}
