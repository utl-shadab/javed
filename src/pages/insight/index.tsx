"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function InsightsPage() {
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
          Insights & Articles
        </motion.h1>

        <p className="text-[#60656F] text-lg leading-relaxed mb-8">
          Stay updated with legal insights, news, and opinions from our
          experienced team. Our publications cover the latest developments in
          litigation, corporate law, and industry trends.
        </p>

        <div className="border-t border-neutral-200 pt-8 text-[#60656F]">
          <p>✨ Articles coming soon...</p>
        </div>
      </div>
    </main>
  );
}
