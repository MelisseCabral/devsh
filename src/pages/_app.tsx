import type AppProps from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer, Header, InstallationGuide, SelectApps } from '../components';
import { Article, Main } from '../components/UI/styles';
import GlobalStyle from '../styles/globals';

const theme = {
  colors: {
    primary: {
      one: '#1abc9c'
    },
    secondary: {
      one: '#e67e22'
    },
    tertiary: {
      one: '#ffffff',
      two: '#666666'
    },
    quaternary: {
      one: '#000000'
    }
  }
};

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Article>
          <Header />
        </Article>
        <Article>
          <SelectApps />
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
