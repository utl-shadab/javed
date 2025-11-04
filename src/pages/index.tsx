"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import InstallPWA from "@/components/InstallPWA";
import VideoSection from "@/components/VideoSection";
import ServicesShowcase from "@/components/ServicesShowcase";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const scrollSectionsRef = useRef<HTMLDivElement>(null);

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const hero = heroRef.current;
    const videoSection = videoSectionRef.current;

    if (hero && videoSection) {
      ScrollTrigger.create({
        trigger: videoSection,
        start: "top top",
        end: "bottom top",
        pin: hero,
        pinSpacing: false,
        anticipatePin: 1,
      });

      gsap.to(hero, {
        yPercent: -30,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionsRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    }

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  const handlePreloaderFinish = () => {
    setTimeout(() => setAnimationStarted(true), 300); 
  };

  return (
    <div className="relative min-h-screen bg-white">
      {!animationStarted && <Preloader onFinish={handlePreloaderFinish} />}

      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <Header startAnimation={animationStarted} /> */}
      </motion.div>

      <div ref={heroRef}>
        <Hero startAnimation={animationStarted} />
      </div>

      <div ref={scrollSectionsRef}>
        <section
          ref={videoSectionRef}
          className="h-screen flex items-center justify-center bg-transparent"
        >
          <VideoSection />
        </section>

        <ServicesShowcase />

        <section className="h-screen bg-[#0f172a] flex items-center justify-center">
          <h2 className="text-4xl text-white font-semibold">Ready to Join Us?</h2>
        </section>
      </div>
      <InstallPWA />
    </div>
  );
}
