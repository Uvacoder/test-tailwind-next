/* eslint-disable import/no-extraneous-dependencies */
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';

const MyApp = function ({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark'
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
