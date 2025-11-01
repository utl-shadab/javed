import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function About(){
  return (
    <>
      <SEO title="About - TILA" />
      <Header />
      <main className="pt-28">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="font-heading text-4xl mb-6">About The Indian Legal Associates</h1>
          <p className="text-tila-lightText">Established with the mission to provide strategic legal counsel, TILA brings together experienced litigators and corporate lawyers to advise clients across India.</p>
          <p className="mt-4 text-tila-lightText">Our approach is client-centric, pragmatic and results-driven.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
