import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "simplebar-react/dist/simplebar.min.css";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
