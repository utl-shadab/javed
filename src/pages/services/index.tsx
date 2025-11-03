"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#222B38] pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0A1A63]"
        >
          Practice Areas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-[#60656F] mt-4 max-w-2xl mx-auto text-base sm:text-lg"
        >
          We provide end-to-end legal services that are strategic, reliable, and client-focused — spanning all major areas of Indian and international law.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group border border-neutral-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg font-semibold text-[#2F56C8] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#60656F] mb-4">
                {service.excerpt?.substring(0, 120)}...
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-[#2F56C8] font-medium text-sm hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
