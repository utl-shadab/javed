'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // floating animation background
      gsap.to(ref.current, {
        y: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        opacity: 1,
      });

      // entrance animation
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power3.out' },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.title', { y: 40, opacity: 0 });
      tl.from('.subtitle', { y: 30, opacity: 0 }, '-=0.4');
      tl.from('.cta', { scale: 0.98, opacity: 0, stagger: 0.15 }, '-=0.3');
    }, ref);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-tila-background"
      id="hero"
    >
      {/* decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-tila-secondary/40 blur-[120px] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-tila-primary/20 blur-[140px] rounded-full" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* text block */}
        <div className="will-change-transform">
          <h1 className="title font-heading text-4xl md:text-6xl leading-tight text-tila-text">
            Strategic, result-oriented legal solutions.
          </h1>
          <p className="subtitle mt-6 text-tila-lightText max-w-xl">
            We don’t just give advice — we build it deliberately, for you.
            Experienced litigators and corporate counsel across India.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#contact"
              className="cta inline-block bg-tila-primary text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transition-transform duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="#services"
              className="cta inline-block border border-tila-outline px-6 py-3 rounded-lg text-tila-text hover:bg-tila-secondary/10 transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* logo visual */}
        <div className="hidden md:flex justify-center relative will-change-transform">
          <div
            className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-tila-secondary/60 blur-2xl"
            aria-hidden="true"
          ></div>
          <div className="w-64 h-64 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
            <Image
              src="/logo.png"
              alt="TILA logo"
              width={220}
              height={220}
              priority
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
