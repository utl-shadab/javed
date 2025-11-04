"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPage() {
  return (
    <main className="min-h-screen  bg-tila-surface   text-[#222B38] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumb />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0A1A63] mb-6"
        >
          About The Indian Legal Associates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#60656F] text-lg leading-relaxed mb-6"
        >
          The Indian Legal Associates is a reputed multi-disciplinary boutique law
          firm headquartered in New Delhi, with a branch in Noida. We provide
          comprehensive, client-focused legal solutions tailored to individuals,
          businesses, and institutions across India.
        </motion.p>

        <p className="text-[#60656F] text-lg leading-relaxed mb-6">
          Our team of advocates, consultants, and advisors combine deep legal
          expertise with integrity, professionalism, and innovation. We focus on
          delivering practical, clear, and result-oriented advice in every matter.
        </p>

        <p className="text-[#60656F] text-lg leading-relaxed mb-6">
          The firm’s working culture is built upon innovation, pragmatism, and a
          strong focus on results. We serve clients across sectors including
          corporate, real estate, family law, employment, and dispute resolution.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#0A1A63] mb-4">
            Our Philosophy
          </h2>
          <p className="text-[#60656F] text-lg leading-relaxed italic">
            “We don’t just give advice – We build it deliberately, for you.”
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-8">
          {[
            { title: "Professionalism", desc: "Upholding the highest standards of legal practice." },
            { title: "Commitment", desc: "Ensuring prompt, effective, and client-focused services." },
            { title: "Integrity & Transparency", desc: "Delivering reliable and transparent solutions." },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-[#0A1A63] font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[#60656F] text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
