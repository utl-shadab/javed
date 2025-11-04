"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
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
          Get in Touch
        </motion.h1>

        <p className="text-[#60656F] text-lg leading-relaxed mb-8">
          We’re here to assist you with legal solutions that align with your
          goals. Contact us via phone, email, or visit one of our offices.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="font-semibold text-[#0A1A63] text-lg mb-2">
              Delhi Office
            </h3>
            <p className="text-[#60656F] text-base leading-relaxed">
              B-24, Defence Colony, New Delhi, 110024
              <br />
              📞 +91-9876543210
              <br />
              ✉️ contact@theindianlegalassociates.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0A1A63] text-lg mb-2">
              Noida Office
            </h3>
            <p className="text-[#60656F] text-base leading-relaxed">
              2nd Floor, Sector 18, Noida, Uttar Pradesh 201301
              <br />
              📞 +91-9123456789
              <br />
              ✉️ info@theindianlegalassociates.com
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:contact@theindianlegalassociates.com"
            className="inline-block px-6 py-3 bg-tila-primary    text-tila-surface  rounded-full text-sm font-medium hover:bg-[#094bbf] transition"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </main>
  );
}
