import Head from "next/head";
import AboutMe from "../components/Home/AboutMe";
import AreasOfInterest from "../components/Home/AreasOfInterest";
import Contact from "../components/Home/Contact";
import EducationAndExperience from "../components/Home/EducationAndExperience";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Uanderson Ricardo | Desenvolvedor Fullstack</title>
      </Head>
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <EducationAndExperience />
        <AreasOfInterest />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
