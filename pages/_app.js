import "@/styles/globals.css";
import "@/styles/index.css"
import { ThemeProvider } from "../context/ThemeContext";

import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <ThemeProvider>
        <Component {...pageProps} />

      </ThemeProvider>

    </ParallaxProvider>
  );
}
