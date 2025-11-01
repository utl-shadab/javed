"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      {/* Animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md"
      >
        {/* 404 Code */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-extrabold text-[#0A66FF] leading-none"
        >
          404
        </motion.h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-[#222B38] mt-4">
          Page Not Found
        </h2>
        <p className="text-[#60656F] mt-3 text-base">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66FF] text-white rounded-full font-medium hover:bg-[#094bbf] transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
