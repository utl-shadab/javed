"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const words = ["Join", "Us", "Together"];

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Change word every 800ms — stops at the last word
    if (index < words.length - 1) {
      const interval = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(interval);
    }

    // After showing the last word, end preloader
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, (words.length - 1) * 500 + 500); 
    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 flex flex-col items-center justify-center bg-white text-center high-z"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
        >
          {/* Animated word section */}
          <motion.h1
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-extrabold leading-[1.05] tracking-tight 
                       text-[48px] sm:text-[72px] md:text-[110px] lg:text-[140px]"
          
          >
            <span className="opacity-0 text-[#222B38]">
              Shaping the future of finance,{" "}
            </span>
            <span className="text-[#0A66FF] opacity-100">{words[index]}</span>
          </motion.h1>

          {/* Static hidden paragraph (optional, non-animated) */}
          <motion.p
            className="mt-8 max-w-2xl opacity-0 mx-auto text-center text-[#60656F] text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Join a vibrant community where AI-powered insights, social portfolios,
            and a full spectrum of investment opportunities meet—all in one seamless
            experience.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
