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

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;
    if (!section || !scroll) return;

    const totalWidth = scroll.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    const tween = gsap.to(scroll, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#0A1A63]"
        >
          Our Practice Areas
        </motion.h2>
        <p className="text-[#60656F] mt-3 max-w-2xl mx-auto text-lg">
          Explore our diverse range of legal services designed to deliver
          clarity, strategy, and results.
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div ref={scrollRef} className="flex gap-8 px-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.title] || DefaultIcon;
          return (
            <motion.div
              key={service.id}
              whileHover={{
                y: -8,
                boxShadow: "0 8px 30px rgba(10,102,255,0.15)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="min-w-[22rem] sm:min-w-[24rem] md:min-w-[20rem] lg:min-w-[10rem]
                         flex-shrink-0 bg-white border border-neutral-200 rounded-2xl 
                         p-6 shadow-sm transition-all duration-300 hover:border-[#0A66FF]"
            >
              <div className="mb-4">
                {/* ✅ Type-safe icon rendering */}
                <Icon width={32} height={32} className="text-[#0A66FF]" />
              </div>
              <h3 className="text-[#0A1A63] font-semibold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-[#60656F] text-base leading-relaxed line-clamp-3 mb-4">
                {service.excerpt}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-[#0A66FF] text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
