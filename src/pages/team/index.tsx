"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white text-[#222B38] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumb />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0A1A63] mb-6"
        >
          Our Team
        </motion.h1>

        <p className="text-[#60656F] text-lg leading-relaxed mb-12">
          Our diverse team of legal professionals brings deep expertise and
          dedication to each case, ensuring our clients receive the best
          strategic advice and representation.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Mr. Javed Ahmad",
              role: "Managing Partner",
              img: "/team/javed.jpg",
            },
            {
              name: "Ms. Richa Sharma",
              role: "Senior Associate",
              img: "/team/richa.jpg",
            },
            {
              name: "Mr. Aditya Mehra",
              role: "Legal Consultant",
              img: "/team/aditya.jpg",
            },
          ].map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover shadow-md"
                />
              </div>
              <h3 className="font-semibold text-[#0A1A63] text-lg">
                {member.name}
              </h3>
              <p className="text-[#60656F] text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
