/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NextNprogress from 'nextjs-progressbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import theme from '../features/core/index';

config.autoAddCss = false;

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NextNprogress
      color={theme.palette.primary.main}
    />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
