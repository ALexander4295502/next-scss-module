import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@heartlandone/vega/style/vega.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-scss-module!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
