import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/charts.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
