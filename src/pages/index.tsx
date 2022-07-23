import Head from "next/head";
import AboutMe from "../components/AboutMe";
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
      <AboutMe />
    </>
  );
};

export default Home;
