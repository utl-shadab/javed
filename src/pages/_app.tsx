import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const ScrollProvider = dynamic(() => import('@/components/ScrollProvider'), {
  ssr: false,
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ScrollProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </ScrollProvider>
    </>
  )
}
