"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES as ALL_SERVICES } from "@/data/services";
import * as LucideIcons from "lucide-react";

type LucideIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const SERVICES = ALL_SERVICES.map(({ id, title, slug, excerpt }) => ({
  id,
  title,
  slug,
  excerpt,
}));

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

const lightBgColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-emerald-100",
  "bg-cyan-100",
  "bg-amber-100",
  "bg-rose-100",
  "bg-slate-100",
  "bg-orange-100",
  "bg-lime-100",
  "bg-teal-100",
  "bg-violet-100",
  "bg-sky-100",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#222B38] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0A1A63]"
        >
          Practice Areas
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-[#60656F] mt-4 max-w-2xl mx-auto text-base sm:text-lg"
        >
          We provide end-to-end legal services that are strategic, reliable, and
          client-focused — spanning all major areas of Indian and international
          law.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.title] || DefaultIcon;
            const bgColor = lightBgColors[i % lightBgColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
                className={`w-full h-auto ${bgColor} 
                            border border-neutral-200 rounded-2xl p-6 
                            shadow-sm transition-all duration-300 
                            hover:border-black/20 flex flex-col justify-between cursor-pointer`}
              >
                <div className="mb-4 flex-shrink-0">
                  <Icon width={32} height={32} className="text-tila-text" />
                </div>

                <div className="flex-1 overflow-hidden">
                  <h3 className="text-tila-text font-semibold text-lg sm:text-xl mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-tila-text text-sm sm:text-base leading-relaxed line-clamp-3 opacity-90 mb-4">
                    {service.excerpt}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="text-black text-sm font-medium inline-flex items-center gap-1 self-start"
                >
                  Read More <LucideIcons.ChevronRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
