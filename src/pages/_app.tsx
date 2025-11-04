import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ScrollProvider = dynamic(() => import("@/components/ScrollProvider"), {
  ssr: false,
});

export default function App({ Component, pageProps, router }: AppProps) {

  // ✅ REGISTER SERVICE WORKER HERE
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then(() => console.log("✅ Service Worker registered"))
          .catch((err) => console.log("❌ SW registration failed", err));
      });
    }
  }, []);

  const currentPath = router.pathname;
  const hideLayout =
    currentPath === "/404" ||
    currentPath === "/_error" ||
    currentPath === "/500";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <ScrollProvider>
        <AnimatePresence mode="wait" initial={false}>
          {!hideLayout && <Header />}

          <main className="min-h-screen">
            <Component {...pageProps} key={router.pathname} />
          </main>

          {!hideLayout && <div className="md:p-6"><Footer /></div>}
        </AnimatePresence>
      </ScrollProvider>
    </>
  );
}
