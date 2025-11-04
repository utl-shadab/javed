"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer
      ref={footerRef}
      className="relative bg-tila-primary text-white py-16 px-6 md:px-20 overflow-hidden rounded-tr-[40px] md:rounded-[40px] rounded-tl-[40px] mt-10"
    >
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#8e96c5] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#5a6191] rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 max-w-7xl mx-auto">
        {/* Left section */}
        <div className=" max-w-md space-y-4">
          <Image
            src="/tila-white.png"
            alt="The Indian Legal Associates"
            width={200}
            height={30}
            className="object-contain"
          />


          <motion.p
            className="text-sm leading-relaxed text-gray-200"
          >
            Our mission is to simplify legal services, provide expert counsel,
            and empower businesses and individuals through trust, transparency,
            and innovation.
          </motion.p>

          {/* Social icon */}
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/60 hover:bg-white hover:text-[#0A1A63] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.487 15.474 16 14.825 16H1.175A1.172 1.172 0 0 1 0 14.854V1.146zM4.943 13.307V6.169H2.542v7.138h2.401zm-1.2-8.166a1.389 1.389 0 1 1 0-2.778 1.389 1.389 0 0 1 0 2.778zM13.458 13.307v-3.992c0-2.138-1.138-3.133-2.653-3.133-1.223 0-1.773.674-2.078 1.147h-.03V6.169H6.297c.03.79 0 7.138 0 7.138h2.4v-3.987c0-.213.015-.426.078-.578.172-.426.563-.87 1.22-.87.86 0 1.204.657 1.204 1.619v3.816h2.259z" />
            </svg>
          </motion.a>
        </div>

        {/* Right navigation */}
        <motion.ul
          className=" flex flex-col space-y-4 text-lg text-gray-200 font-medium"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <li>
            <Link href="/" className="hover:text-white cursor-pointer transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white cursor-pointer transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-white cursor-pointer transition-all">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/insights" className="hover:text-white cursor-pointer transition-all">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white cursor-pointer transition-all">
              Contact Us
            </Link>
          </li>
        </motion.ul>
      </div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full h-px bg-white/30 mt-16 mb-6 origin-left"
      ></motion.div>

      {/* Bottom text */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 gap-3 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          © {new Date().getFullYear()} The Indian Legal Associates. All Rights Reserved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300"
        >
          New Delhi · Noida · theindianlegalnetwork@gmail.com · +91-8826879144
        </motion.p>
      </div>
    </footer>
  );
}
