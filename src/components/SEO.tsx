import Head from 'next/head'
export default function SEO({ title = 'The Indian Legal Associates', description = 'Strategic legal solutions across India.' } : { title?: string, description?: string }){
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
