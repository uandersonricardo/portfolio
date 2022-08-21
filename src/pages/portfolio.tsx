import Head from "next/head";
import Portfolio from "../components/Projects/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio | Uanderson Ricardo</title>
      </Head>
      <main>
        <Portfolio />
      </main>
    </>
  );
};

export default PortfolioPage;
