import Head from "next/head";
import React from "react";
import { SelectApps } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>DevSH Installations</title>
      </Head>
      <SelectApps />
    </>
  );
};

export default Home;
