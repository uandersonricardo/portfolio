import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Uanderson Ricardo | Desenvolvedor Fullstack</title>
      </Head>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
