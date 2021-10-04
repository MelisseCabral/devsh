import type AppProps from "next/app";
import React from "react";
import { ThemeProvider } from 'styled-components';
import { Footer, Header, InstallationGuide } from "../components";
import { Article, Main } from "../components/UI/styles";
import GlobalStyle from "../styles/globals";
import { theme } from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Article>
          <Header />
        </Article>
        <Article>
          <Component {...pageProps} />
        </Article>
        <Article>
          <InstallationGuide />
          <Footer />
        </Article>
      </Main>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
