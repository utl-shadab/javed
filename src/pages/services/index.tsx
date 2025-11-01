import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const services = [
  { id: 'corporate-law', title: 'Corporate Law', desc: 'M&A, compliance, corporate governance.' },
  { id: 'litigation', title: 'Litigation', desc: 'Civil and criminal litigation support.' },
  { id: 'arbitration', title: 'Arbitration', desc: 'International and domestic arbitration.' }
]

export default function Services(){
  const ref = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const q = gsap.utils.selector(ref)
    gsap.from(q('.card'), { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
  },[])
  return (
    <>
      <SEO title="Services - TILA" />
      <Header />
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-24" ref={ref}>
          <h1 className="font-heading text-4xl mb-6">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(s=>(
              <Link key={s.id} href={`/services/${s.id}`} className="card p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                 
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-sm text-tila-lightText mt-2">{s.desc}</p>
               
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
