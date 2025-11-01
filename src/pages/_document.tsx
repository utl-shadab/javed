import Link from 'next/dist/client/link'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/logo.png" />
          <meta name="theme-color" content="#243E8C" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link rel="icon" href="/icons/favicon-32.png" />
        </Head>
        <body>
          <Link href="#main" className="skip-link">Skip to content</Link>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
