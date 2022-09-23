import Footer from 'components/Main/Footer'
import Header from 'components/Main/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'components/global'

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
