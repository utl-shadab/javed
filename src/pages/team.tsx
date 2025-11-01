import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const team = [
  { name: 'Mr. Naushad Ali', role: 'Senior Advocate', bio: '35+ years of litigation expertise.' },
  { name: 'Ms. Anjali Rao', role: 'Corporate Counsel', bio: 'Corporate law and compliance specialist.' },
  { name: 'Mr. Sameer Khan', role: 'Litigator', bio: 'Experienced litigator in civil matters.' }
]

export default function Team(){
  const ref = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const q = gsap.utils.selector(ref)
    gsap.from(q('.member'), { y: 20, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out' })
  },[])
  return (
    <>
      <SEO title="Team - TILA" />
      <Header />
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-24" ref={ref}>
          <h1 className="font-heading text-4xl mb-6">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m, i)=>(
              <article key={i} className="member p-6 bg-white rounded-lg shadow">
                <h3 className="font-medium">{m.name}</h3>
                <p className="text-sm text-tila-lightText mt-1">{m.role}</p>
                <p className="mt-3 text-tila-lightText">{m.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
