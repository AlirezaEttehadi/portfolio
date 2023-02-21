import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Example from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alireza Ettehadi</title>
        <link rel="icon" href="/alireza-main.jpg" />
        <meta name="title" content="Alireza Ettehadi - Portfolio" />
        <meta
          name="description"
          content="Welcome to my portfolio. Here you can find my latest projects and contact information."
        />
        <meta
          name="keywords"
          content="Alireza Ettehadi, Portfolio, Web Development"
        />

        <meta property="og:title" content="Alireza Ettehadi - Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio. Here you can find my latest projects and contact information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alirezaettehadi.com" />
        <meta property="og:image" content="/alireza-main.jpg" />
        <meta property="og:image:alt" content="Alireza Ettehadi - Portfolio" />
      </Head>

      <Example />
    </div>
  );
};

export default Home;
