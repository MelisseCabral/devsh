import type AppProps from "next/app";
import React from "react";
import { Footer, Header, InstallationGuide } from "../components";
import { Article, Main } from "../components/UI/styles";
import GlobalStyle from "../styles/globals";
import Theme from "../styles/Theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
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
    </Theme>
  );
};

export default App;
