"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { SERVICES as ALL_SERVICES } from "@/data/services";
gsap.registerPlugin(ScrollTrigger);

const SERVICES = ALL_SERVICES.map(({ id, title, slug, excerpt }) => ({
  id,
  title,
  slug,
  excerpt,
}));

type LucideIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, LucideIconComponent> = {
  "Litigation Support": LucideIcons.Gavel,
  "Corporate & Commercial Advisory": LucideIcons.Building2,
  "Consumer & Motor Accident Claims": LucideIcons.Car,
  "Family & Matrimonial Law": LucideIcons.Users,
  "Property & Real Estate": LucideIcons.Home,
  "Arbitration & ADR": LucideIcons.Scale,
  "Employment & Labour Law": LucideIcons.BriefcaseBusiness,
  "Legal Drafting & Documentation": LucideIcons.FileText,
  "Banking & Finance": LucideIcons.PiggyBank,
  "Company Law & Governance": LucideIcons.Building,
  "Insolvency & Bankruptcy (IBC)": LucideIcons.AlertTriangle,
  "Intellectual Property Law": LucideIcons.Lightbulb,
  "Information Technology & Data Protection": LucideIcons.Server,
  "Taxation & Accounting": LucideIcons.Calculator,
  "Energy & Environment Law": LucideIcons.Sun,
  "Infrastructure & Construction Law": LucideIcons.Hammer,
  "Media, Sports & Entertainment Law": LucideIcons.Clapperboard,
  "Shipping & Admiralty Law": LucideIcons.Ship,
  "Investment & Collaborations": LucideIcons.Handshake,
  "Employment & Labour Compliance": LucideIcons.CheckCircle,
};

const DefaultIcon = LucideIcons.CircleDot;

// const lightBgColors = [
//   "bg-white",
//   "bg-blue-300",
//   "bg-green-300",
//   "bg-yellow-300",
//   "bg-purple-300",
//   "bg-pink-300",
//   "bg-indigo-300",
//   "bg-emerald-300",
//   "bg-cyan-300",
//   "bg-amber-300",
//   "bg-rose-300",
//   "bg-slate-300",
//   "bg-orange-300",
//   "bg-lime-300",
//   "bg-teal-300",
//   "bg-violet-300",
//   "bg-sky-300",
// ];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;
    if (!section || !scroll) return;

    ScrollTrigger.refresh();

    const totalWidth = scroll.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = Math.max(0, totalWidth - viewportWidth);

    let tween: gsap.core.Tween | null = null;
    if (window.innerWidth >= 1024) {
      tween = gsap.to(scroll, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(scrollDistance, viewportWidth)}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
          delay: index * 0.1,
        }
      );
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      if (tween) tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const displayedServices =
    typeof window !== "undefined" && window.innerWidth < 1024
      ? SERVICES.slice(0, 4)
      : SERVICES;
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-100 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black"
        >
          Our Practice Areas
        </motion.h2>
        <p className="text-black mt-3 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg opacity-80">
          Explore our diverse range of legal services designed to deliver
          clarity, strategy, and results.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-nowrap gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 lg:overflow-visible"
      >
        {displayedServices.map((service, index) => {
          const Icon = iconMap[service.title] || DefaultIcon;
          // const bgColor = lightBgColors[index % lightBgColors.length];
          return (
            <motion.div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              whileHover={{
                y: -1,
                scale: 1.01,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`w-full lg:min-w-[40rem] lg:max-w-[22rem] lg:flex-shrink-0
                         h-auto md:min-h-[20rem] md:max-h-[18rem]
                         bg-white  rounded-xl sm:rounded-2xl 
                         p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-tila-primary
                         flex flex-col justify-between cursor-pointer`}
            >
              <div className="mb-4 flex-shrink-0">
                <Icon width={28} height={28} className="text-tila-primary md:h-14 md:w-14 font-normal" />
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <h3 className="text-tila-text font-medium text-lg sm:text-2xl mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-tila-text text-sm sm:text-lg leading-relaxed line-clamp-3 opacity-90 mb-4">
                  {service.excerpt}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="text-tila-surface text-sm sm:text-base  font-medium px-4 py-2 rounded-full bg-tila-primary  self-start inline-flex items-center gap-1"
              >
                Read More <LucideIcons.ChevronRight size={16} />
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8 md:hidden px-6">
        <Link
          href="/services"
          className="px-6 py-3 w-full text-center bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition"
        >
          Explore More
        </Link>
      </div>
      <div className="hidden lg:block absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
