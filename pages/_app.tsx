import '../fonts/GreycliffCF/styles.css';
import '@mantine/core/styles.css';
import '@mantinex/shiki/styles.css';
import '@mantinex/demo/styles.css';
import '@mantinex/mantine-logo/styles.css';
import '@mantinex/mantine-header/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ShikiProvider } from '@mantinex/shiki';
import { Shell } from '../components/Shell';
import { theme } from '../theme';

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
  });

  return shiki;
}

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Shell>
        <ShikiProvider loadShiki={loadShiki}>
          <Component {...pageProps} />
        </ShikiProvider>
      </Shell>
    </MantineProvider>
  );
}
