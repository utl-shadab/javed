import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import Link from 'next/link'

const data:any = {
  'corporate-law': { title: 'Corporate Law', body: 'Corporate advisory including M&A, regulatory compliance and corporate governance.' },
  'litigation': { title: 'Litigation', body: 'Civil and criminal litigation handled by senior advocates.' },
  'arbitration': { title: 'Arbitration', body: 'Support for domestic and international arbitration matters.' }
}

export default function ServiceDetail(){
  const router = useRouter()
  const { slug } = router.query
  const service = slug ? data[slug as string] : null

  if (!service) return (
    <>
      <Header />
      <main className="pt-28">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <p>Loading...</p>
        </section>
      </main>
      <Footer />
    </>
  )

  return (
    <>
      <SEO title={`${service.title} - TILA`} />
      <Header />
      <main className="pt-28">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="font-heading text-4xl mb-6">{service.title}</h1>
          <p className="text-tila-lightText">{service.body}</p>
          <Link href="/services" className="mt-6 inline-block text-tila-primary">← Back to services</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
