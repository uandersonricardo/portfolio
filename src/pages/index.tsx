import Head from "next/head";
import AboutMe from "../components/AboutMe";
import AreasOfInterest from "../components/AreasOfInterest";
import EducationAndExperience from "../components/EducationAndExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Uanderson Ricardo | Desenvolvedor Fullstack</title>
      </Head>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <EducationAndExperience />
      <AreasOfInterest />
    </>
  );
};

export default Home;
