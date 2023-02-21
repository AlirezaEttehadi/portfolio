import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Example from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/alireza-main.jpg" />
      </Head>

      <Example />
    </div>
  );
};

export default Home;
