"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-white text-[#222B38] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumb />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0A1A63] mb-6"
        >
          Our Philosophy & Approach
        </motion.h1>

        <p className="text-[#60656F] text-lg leading-relaxed mb-8">
          At The Indian Legal Associates, we believe that every client deserves
          more than representation — they deserve a trusted partner committed to
          their success. Our approach combines professionalism, innovation, and
          client focus to deliver practical outcomes.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          {[
            {
              title: "Commitment to Clients",
              desc: "We place client interests at the center of everything we do, ensuring personalized solutions and open communication.",
            },
            {
              title: "Competence & Expertise",
              desc: "Every matter is handled with a blend of legal expertise, industry insight, and practical understanding.",
            },
            {
              title: "Efficiency & Timeliness",
              desc: "We respect our clients’ time and resources, delivering quality services promptly and effectively.",
            },
            {
              title: "Innovation & Strategy",
              desc: "We merge traditional advocacy with modern strategies to provide creative solutions for complex issues.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md"
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
