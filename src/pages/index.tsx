import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstallPWA from '@/components/InstallPWA'
import SEO from '@/components/SEO'

export default function Home(){
  return (
    <>
      <SEO />
      <Header />
      <main id="main" className="pt-28">
        <Hero />
        <section id="services" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-medium">Corporate Law</h3>
              <p className="text-sm text-tila-lightText mt-2">Advisory on mergers, acquisitions, compliance and corporate governance.</p>
            </article>
            <article className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-medium">Litigation</h3>
              <p className="text-sm text-tila-lightText mt-2">Civil and criminal litigation handled by senior advocates.</p>
            </article>
            <article className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-medium">Arbitration</h3>
              <p className="text-sm text-tila-lightText mt-2">Domestic and international arbitration support.</p>
            </article>
          </div>
        </section>

        <section id="team" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-medium">Mr. Naushad Ali</h4>
              <p className="text-sm text-tila-lightText mt-2">Senior Advocate — 35+ years experience</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-medium">Ms. Anjali Rao</h4>
              <p className="text-sm text-tila-lightText mt-2">Corporate Counsel</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-medium">Mr. Sameer Khan</h4>
              <p className="text-sm text-tila-lightText mt-2">Litigator</p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl mb-6">Contact Us</h2>
          <p className="text-tila-lightText mb-6">Email: theindianlegalnetwork@gmail.com • Phone: +91-8826879144</p>

          <form className="grid grid-cols-1 gap-4">
            <input className="p-3 border rounded" placeholder="Your name" />
            <input className="p-3 border rounded" placeholder="Email" />
            <textarea className="p-3 border rounded" placeholder="Message" rows={6} />
            <button className="px-6 py-3 bg-tila-primary text-white rounded">Send Message</button>
          </form>
        </section>

      </main>
      <Footer />
      <InstallPWA />
    </>
  )
}
