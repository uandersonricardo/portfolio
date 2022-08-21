import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import "simplebar-react/dist/simplebar.min.css";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
