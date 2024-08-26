import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import { NextUIProvider } from "@nextui-org/react";
import { Roboto, Open_Sans, Lato, Montserrat } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <ThemeProvider defaultTheme="light" attribute="class">
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Navbar />
        <main className="pt-20 ">
          <Component {...pageProps} />
        </main>
        <PopupWidget />
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp;
