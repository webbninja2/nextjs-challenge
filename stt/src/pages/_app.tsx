
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PersonContextProvider } from "@/contexts/PersonContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PersonContextProvider>
      <Component {...pageProps} />
    </PersonContextProvider>
  );
}
