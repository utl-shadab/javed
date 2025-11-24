import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";    

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
        <meta name="google-site-verification" content="bxyhBZJowkPzzD8Jr40UQyEywkCubzx7SuSxNq65-6g" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <ScrollProvider>
        <AnimatePresence mode="wait" initial={false}>
          {!hideLayout && <Header />}

          <main className="min-h-screen">
            <Component {...pageProps} key={router.pathname} />
          </main>

          {!hideLayout && (
            <div className="md:p-6">
              <Footer />
            </div>
          )}

          {/* ✅ GLOBAL TOAST CONTAINER */}
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: { background: "#0A1A63", color: "white" },
              },
              error: {
                style: { background: "#ff3333", color: "white" },
              },
            }}
          />
        </AnimatePresence>
      </ScrollProvider>
    </>
  );
}
