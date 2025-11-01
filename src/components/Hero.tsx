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
      className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden"
    >
      {/* Background trading bars */}
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-[200px] md:h-[260px] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full h-full flex items-end justify-between px-[2vw]">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3%] sm:w-[2.5%] rounded-t-full bg-[#0a66ff]"
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
        <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-white via-white/30 to-transparent"></div>
      </div>

      {/* Content wrapper */}
      <div className="text-center p-3 sm:px-6 md:px-12 z-10">
        {/* Heading */}
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="font-extrabold text-[#222B38]  leading-[1.05] tracking-tight
                     text-[30px] sm:text-[36px] md:text-[60px] lg:text-[80px]"

        >
          We don’t just give advice,{" "}
          <motion.span
            variants={variants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-[#0A66FF] inline-block"
          >
            We build it deliberately, for you.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={startAnimation ? "visible" : "hidden"}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-center text-[#60656F] text-sm sm:text-lg  leading-relaxed"
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
            className="mt-8 px-6 py-3 bg-tila-primary text-white rounded-full text-sm sm:text-base font-medium hover:bg-tila-primary/80 transition"
          >
            Get in Touch
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
