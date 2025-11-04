"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC<{ startAnimation: boolean }> = ({ startAnimation }) => {
  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100svh] bg-white overflow-hidden px-4 sm:px-6"
    >
      {/* Background trading bars */}
      <div className="absolute bottom-0 left-0 w-full h-[20svh] sm:h-[25svh] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full h-full flex items-end justify-between px-[1vw] sm:px-[2vw]">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[1.5%] sm:w-[2.5%] rounded-t-full bg-[#2F56C8]"
              initial={{ height: Math.random() * 60 + 20 }}
              variants={variants}
              animate={{
                height: [
                  Math.random() * 60 + 40,
                  Math.random() * 100 + 30,
                  Math.random() * 50 + 20,
                ],
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>

        {/* Subtle gradient fade */}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white via-white/30 to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="text-center z-10 w-full max-w-4xl mx-auto py-8 sm:py-12">
        {/* Heading */}
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="font-extrabold text-[#222B38] leading-[1.1] sm:leading-[1.05] tracking-tight
                     text-[1.75rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]"
        >
          We don’t just give advice,{" "}
          <motion.span
            variants={variants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-[#2F56C8] inline-block"
          >
            We build it deliberately, for you.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center text-[#60656F] text-xs sm:text-sm md:text-base leading-relaxed px-2"
        >
          The Indian Legal Associates is a reputed multi-disciplinary boutique law firm based in Delhi & Noida, offering strategic, result-oriented, and client-focused legal solutions.
        </motion.p>
        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 20px rgba(10, 102, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 bg-tila-primary text-white rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-tila-primary/80 transition"
          >
            Get in Touch
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;