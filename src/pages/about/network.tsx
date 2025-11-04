"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function NetworkPage() {
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
          Our Professional Network
        </motion.h1>

        <p className="text-[#60656F] text-lg leading-relaxed mb-6">
          The Indian Legal Associates maintains a robust professional network
          across India, ensuring seamless support in multiple jurisdictions. We
          collaborate with experienced advocates, consultants, and allied
          professionals to deliver comprehensive representation across civil,
          criminal, corporate, and commercial matters.
        </p>

        <p className="text-[#60656F] text-lg leading-relaxed mb-6">
          Our partnerships with financial advisors, tax experts, and business
          consultants enable us to offer holistic and strategic legal solutions.
          This collaborative network helps us deliver efficient, reliable, and
          prompt assistance beyond geographical boundaries.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#0A1A63] mb-4">
            Key Advantages of Our Network
          </h2>
          <ul className="space-y-3 text-[#60656F] text-lg leading-relaxed list-disc pl-6">
            <li>Pan-India representation through local associates.</li>
            <li>Collaborations with senior counsels and industry experts.</li>
            <li>Integrated legal and financial advisory solutions.</li>
            <li>Prompt support across states and tribunals.</li>
            <li>Seamless coordination for multi-jurisdictional cases.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
