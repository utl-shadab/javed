"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Briefcase,
  ShieldCheck,
  Globe,
  MapPin,
  Mail,
  Phone,
  Star,
  ChevronRight,
  User,
} from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]); // Simplified transform range

  // Simplified scroll transforms - removed some for performance
  const introY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const approachY = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative w-full h-screen sm:h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden text-center px-4"
        style={{ backgroundImage: "url('/images/solid2.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* soft tonal overlay */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div variants={item} className="max-w-3xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 px-2"
              variants={item}
            >
              About The Indian Legal Associates
            </motion.h1>

            <motion.p variants={item} className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl mx-auto px-2">
              A multi-disciplinary boutique law firm providing strategic, client-first legal services across India — combining experience, integrity and
              practical solutions to protect your rights and interests.
            </motion.p>

            <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
              <Link href="/story" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-lg bg-white/12 border border-white/20 text-white/90 font-semibold shadow-[0_8px_40px_-20px_rgba(2,6,23,0.6)] transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Our Story
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>

              <Link href="/services" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 text-white/90 font-semibold transition-all duration-300 hover:bg-white/6 w-full sm:w-auto">
                Explore Services
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:py-24 py-16">
        {/* Our Story & Philosophy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-24"
        >
          <motion.div style={{ y: introY }} className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-16 sm:h-24 bg-gradient-to-b from-tila-primary to-transparent rounded-full opacity-80 hidden sm:block" />
          <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center sm:text-left">
            Our Story & Philosophy
          </motion.h2>

          <motion.div variants={item} className="max-w-4xl mx-auto">
            <motion.p variants={item} className="text-gray-700 leading-relaxed text-base sm:text-lg">
              The Indian Legal Associates is a reputed, multi-disciplinary boutique law firm headquartered in New Delhi with a branch office in Noida. Founded and
              managed by a team of experienced advocates and consultants, we deliver strategic, result-oriented, and client-centric legal solutions to
              individuals, corporations, and institutions across India.
            </motion.p>

            <motion.blockquote variants={item} className="relative pl-4 sm:pl-6 italic text-gray-600 text-base sm:text-lg mt-6 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-tila-primary before:to-tila-primary">
              “We don’t just give advice — we build it deliberately, for you.”
            </motion.blockquote>

            <motion.div variants={item} className="mt-6 sm:mt-8">
              <motion.h3 variants={item} className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                What we do
              </motion.h3>

              <motion.p variants={item} className="text-gray-700 leading-relaxed text-base sm:text-lg mt-3 sm:mt-4">
                From high-stakes litigation to preventive legal strategy, our services cover litigation, corporate advisory, consumer & motor accident claims, family
                law, property disputes, arbitration & ADR, employment law, and more. We act as a one-stop legal partner — advising, drafting, negotiating, and
                representing clients in courts and tribunals nationwide.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Vision & Aim */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24"
        >
          <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-tila-primary text-lg sm:text-xl mb-3 sm:mb-4">Vision</h4>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">To be a trusted legal partner that delivers practical, ethical and result-oriented legal solutions — empowering clients through clarity and strategic advice.</p>
          </motion.div>

          <motion.div variants={item} className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-tila-primary text-lg sm:text-xl mb-3 sm:mb-4">Our Aim</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-2 h-2 bg-tila-primary rounded-full mt-2 sm:mt-1 flex-shrink-0" />
                Maintain the highest standards of professionalism and ethics
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-2 h-2 bg-tila-primary rounded-full mt-2 sm:mt-1 flex-shrink-0" />
                Deliver tailored, actionable legal advice
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-2 h-2 bg-tila-primary rounded-full mt-2 sm:mt-1 flex-shrink-0" />
                Provide timely solutions without compromising quality
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="w-2 h-2 bg-tila-primary rounded-full mt-2 sm:mt-1 flex-shrink-0" />
                Build long-term relationships on trust and transparency
              </li>
            </ul>
          </motion.div>

          <div id="approach"></div>
        </motion.section>
        {/* Our Approach */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24 relative"

        >
          <motion.div style={{ y: approachY }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10 hidden sm:block" />
          <motion.div variants={item} className="text-center mb-8 sm:mb-12">
            <motion.h3 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Approach
            </motion.h3>

            <motion.p variants={item} className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
              We combine legal acumen with practical strategy. Our four-dimensional approach — client commitment, expertise, efficiency, and innovation — ensures
              clients receive personalized, efficient and outcome-focused representation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Users, title: "Client Commitment", desc: "Personalized solutions and consistent communication." },
              { icon: Briefcase, title: "Competence", desc: "Subject-matter expertise across multiple domains." },
              { icon: ShieldCheck, title: "Efficiency", desc: "Timely, pragmatic and cost-conscious actions." },
              { icon: Globe, title: "Innovation", desc: "Modern strategies combined with traditional advocacy." }
            ].map((it, idx) => (
              <motion.article
                key={idx}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm cursor-pointer transition-transform duration-200 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-tila-primary to-tila-primary shadow-sm">
                  <it.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="font-bold text-tila-primary mb-2 text-sm sm:text-lg">{it.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700">{it.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Core Principles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24"
        >
          <motion.div variants={item} className="text-center mb-8 sm:mb-12">
            <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Core Principles
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Professionalism", desc: "Highest standards of practice" },
              { title: "Commitment", desc: "Client-focused & prompt services" },
              { title: "Integrity", desc: "Transparency in all dealings" }
            ].map((it, idx) => (
              <motion.article
                key={idx}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm cursor-pointer transition-transform duration-200 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-tila-primary to-tila-primary shadow-sm">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="font-bold text-tila-primary mb-2 text-sm sm:text-lg">{it.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700">{it.desc}</p>
              </motion.article>
            ))}
          </div>
          <div id="team"></div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24"
        >
          <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Shadab Khan",
                role: "Managing Partner",
                desc: "Seasoned advocate with over 15 years in corporate and litigation law. Leads strategic initiatives and client relations.",
                image: "/images/team/sanjay.jpg" // Placeholder
              },
              {
                name: "Priya Sharma",
                role: "Senior Associate",
                desc: "Expert in family and property law. Focuses on dispute resolution and advisory services.",
                image: "/images/team/priya.jpg" // Placeholder
              },
              {
                name: "Rajesh Gupta",
                role: "Consultant",
                desc: "Specializes in arbitration and employment law. Provides pan-India network support.",
                image: "/images/team/rajesh.jpg" // Placeholder
              }
            ].map((member, idx) => (
              <motion.article
                key={idx}
                variants={item}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 overflow-hidden"
              >
                <div className="relative mb-4">
                  <div className="w-full h-48 sm:h-52 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      height={400}
                      width={400}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 p-1 bg-gradient-to-br from-tila-primary to-tila-primary rounded-full">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-lg">{member.name}</h4>
                <p className="text-tila-primary font-semibold text-xs sm:text-base mb-2">{member.role}</p>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{member.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Pan-India Network */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24"
        >
          <motion.div variants={item} className="p-6 sm:p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-br from-tila-primary to-tila-primary shadow-md flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-tila-primary text-lg sm:text-xl">Pan-India Network</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">We maintain a robust professional network across India — collaborating with advocates, consultants, and specialists in multiple jurisdictions to provide seamless representation and local expertise.</p>
          </motion.div>
        </motion.section>

        {/* Contact & Offices */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24"
        >
          <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Contact & Offices
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Get in Touch */}
            <motion.div variants={item} className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <h4 className="font-bold text-tila-primary text-lg sm:text-xl mb-4">Get in Touch</h4>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-tila-primary/6 to-transparent">
                <Phone className="text-tila-primary w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">+91-8826879144, +91-9990065238</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-tila-primary/6 to-transparent">
                <Mail className="text-tila-primary w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">theindianlegalnetwork@gmail.com</span>
              </div>
            </motion.div>

            {/* Head Office */}
            <motion.div variants={item} className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
              <div className="font-semibold text-tila-primary text-xs sm:text-sm uppercase tracking-wide mb-2">Head Office</div>
              <div className="flex items-start gap-3 text-gray-700 text-xs sm:text-base">
                <MapPin className="text-tila-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>167/7, Mandir Lane, Sarai Julena, New Friends Colony, New Delhi – 110025</span>
              </div>
              <div className="font-semibold text-tila-primary text-xs sm:text-sm uppercase tracking-wide my-2">Branch Office</div>
              <div className="flex items-start gap-3 text-gray-700 text-xs sm:text-base">
                <MapPin className="text-tila-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Plot No. 5A, Sunshine Trade Tower, Sec-94, Near Supernova Building, Noida, Uttar Pradesh – 201301</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-16 sm:mb-24"
        >
          <motion.div variants={item} className="rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden bg-gradient-to-r from-tila-primary via-tila-primary to-[#094bbf] shadow-[0_50px_120px_-20px_rgba(3,10,34,0.5)]">
            <motion.div className="absolute inset-0 opacity-40" style={{ x: useTransform(scrollYProgress, [0, 1], [0, 50]) }} /> {/* Simplified range */}

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">Need legal advice?</h4>
                <p className="text-xs sm:text-sm md:text-base opacity-90 max-w-md">Schedule a consultation with our legal experts. We’ll provide a clear path forward.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-lg bg-white/12 hover:bg-white/20 transition-transform duration-300 font-bold gap-2 flex-1 sm:flex-none">
                  Contact Us
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>

                <Link href="/contact#book" className="inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-tila-primary font-bold transition-transform duration-300 gap-2 flex-1 sm:flex-none">
                  Book Appointment
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </section>
    </main>
  );
}