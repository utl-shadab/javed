"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data/services";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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

// ✅ fallback icon
const DefaultIcon = LucideIcons.CircleDot;

// Light background colors for cards (cycling through subtle pastels)
const lightBgColors = [
  "bg-red-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-indigo-50",
  "bg-emerald-50",
  "bg-cyan-50",
  "bg-amber-50",
  "bg-rose-50",
  "bg-slate-50",
  "bg-orange-50",
  "bg-lime-50",
  "bg-teal-50",
  "bg-violet-50",
  "bg-sky-50",
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;
    if (!section || !scroll) return;

    // Refresh ScrollTrigger to handle responsive changes
    ScrollTrigger.refresh();

    const totalWidth = scroll.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = Math.max(0, totalWidth - viewportWidth);

    // Horizontal scroll tween
    const tween = gsap.to(scroll, {
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

    // Staggered scroll-triggered animations for cards
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          rotationX: -15,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          delay: index * 0.2, // Stagger start based on index
        }
      );
    });

    // Handle window resize for responsiveness
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Heading */}
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

      {/* Horizontal Scroll Cards */}
      <div ref={scrollRef} className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.title] || DefaultIcon;
          const bgColor = lightBgColors[index % lightBgColors.length];
          return (
            <motion.div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              whileHover={{
                y: -4,
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`min-w-[14rem] sm:min-w-[16rem] md:min-w-[18rem] lg:min-w-[20rem] xl:min-w-[22rem]
                         h-auto max-h-[12rem] sm:max-h-[14rem] md:max-h-[16rem] flex-shrink-0
                         ${bgColor} border border-neutral-200 rounded-xl sm:rounded-2xl 
                         p-4 sm:p-5 lg:p-6 shadow-sm transition-all duration-300 hover:border-black/20
                         flex flex-col justify-between`}
            >
              <div className="mb-3 sm:mb-4 flex-shrink-0">
                <Icon width={24} height={24} className="text-black" />
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <h3 className="text-tila-text font-semibold text-base sm:text-lg md:text-xl mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-tila-text text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 opacity-90 mb-3 sm:mb-4">
                  {service.excerpt}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="text-tila-text text-xs sm:text-sm font-medium hover:underline self-start"
              >
                Read More →
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient fade edges - responsive width */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}