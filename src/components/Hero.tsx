"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scale, MapPin, Award } from "lucide-react";
import Link from "next/link";

const Hero = ({ startAnimation = true }) => {
  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100svh]  bg-tila-surface   overflow-hidden px-4 sm:px-6"
    >


      {/* Content wrapper */}
      <div className="text-center z-10 w-full max-w-4xl mx-auto py-8 sm:py-12">
        {/* Heading */}
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="font-extrabold text-[#1a1a1a] leading-[1.1]
                     text-2xl sm:text-[2rem] md:text-[3rem] lg:text-[4rem]"
        >
         We don&apos;t just give advice – We build it deliberately, for you.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center text-[#666] text-sm sm:text-xl leading-relaxed px-2"
        >
          A reputed multi-disciplinary boutique law firm headquartered in New Delhi with a branch in Noida, offering strategic, reliable, and client-focused legal solutions.
        </motion.p>




        <motion.div
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
          className="mt-8 w-full px-4"
        >
          {/* ✅ Mobile layout – cards with gradient */}
          <div className="grid grid-cols-1 gap-3 md:hidden">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-white p-2 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-8 h-8 bg-tila-primary rounded-full flex items-center justify-center">
                <Award className="w-4 h-4   text-tila-surface " />
              </div>
              <span className="text-[#1a1a1a] text-sm font-medium">
                35+ Years of Combined Legal Excellence
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-white p-2 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-8 h-8 bg-tila-primary rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4  text-tila-surface " />
              </div>
              <span className="text-[#1a1a1a] text-sm font-medium">
                Pan-India Presence & Representation
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-white p-2 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-8 h-8 bg-tila-primary rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4  text-tila-surface " />
              </div>
              <span className="text-[#1a1a1a] text-sm font-medium">
                Integrity • Professionalism • Commitment
              </span>
            </div>
          </div>

          {/* ✅ Desktop layout – single container with dividers & no card backgrounds */}
          <div className="hidden md:flex items-center justify-between bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 px-4">
              <Award className="w-7 h-7 sm:hidden text-tila-primary" />
              <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                35+ Years of Combined Legal Excellence
              </span>
            </div>

            <div className="w-px h-10 bg-blue-200"></div>

            <div className="flex items-center gap-3 px-4">
              <MapPin className="w-7 h-7 sm:hidden text-tila-primary" />
              <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                Pan-India Presence & Representation
              </span>
            </div>

            <div className="w-px h-10 bg-blue-200"></div>

            <div className="flex items-center gap-3 px-4">
              <Scale className="w-7 h-7 sm:hidden text-tila-primary" />
              <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                Integrity • Professionalism • Commitment
              </span>
            </div>
          </div>
        </motion.div>
        {/* CTA */}
        <Link href="/contact">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 6px 20px rgba(47, 86, 200, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="mt-14 sm:mt-8 px-6  w-full sm:w-fit sm:px-8 md:py-3 py-3.5 bg-tila-primary  text-tila-surface  rounded-full text-sm sm:text-base font-medium hover:bg-tila-primary/90 transition shadow-lg"
        >
          Get in Touch
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;