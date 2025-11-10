// pages/services/[slug].tsx
"use client";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import React, { useRef } from 'react';
import { SERVICES, Service } from "@/data/services";
import { ArrowLeft, ChevronRight, Star, Sparkles, Target, CheckCircle, Quote } from "lucide-react";
// import Breadcrumb from "@/components/Breadcrumb";
import {
  Gavel,
  Briefcase,
  ShieldCheck,
  Users,
  MapPin,
  FileText,
  DollarSign,
  Building,
  AlertTriangle,
  Copyright,
  Globe,
  Calculator,
  Leaf,
  HardDrive,
  Tv,
  Anchor,
  TrendingUp,
  Shield
} from "lucide-react";
import Image from "next/image";

type Props = { service: Service };
type RevealTextProps = {
  children: React.ReactNode;
  delay?: number;
};
type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};


const GlassCard = ({ children, className }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl ${className || ""}`}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.div>
);


const RevealText = ({ children, delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const DynamicIcon = ({ iconName }: { iconName?: string }) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Gavel,
    Briefcase,
    ShieldCheck,
    Users,
    MapPin,
    FileText,
    DollarSign,
    Building,
    AlertTriangle,
    Copyright,
    Globe,
    Calculator,
    Leaf,
    HardDrive,
    Tv,
    Anchor,
    TrendingUp,
    Shield,
    // Add more as needed
  };

  const IconComponent = iconMap[iconName || ''] || Briefcase;
  return <IconComponent className="w-10 h-10 text-tila-primary" />;
};



const RelatedServiceCard = ({ relatedSlug }: { relatedSlug: string }) => {
  const related = SERVICES.find(s => s.slug === relatedSlug);
  if (!related) return null;
  return (
    <Link href={`/services/${related.slug}`} className="block p-6 bg-gray-50 rounded-xl hover:bg-tila-primary/10 hover:text-tila-primary transition-colors duration-300 border border-gray-200">
      <h4 className="font-semibold mb-2">{related.title}</h4>
      <p className="text-sm text-gray-600">{related.excerpt}</p>
      <ChevronRight className="w-4 h-4 mt-2 ml-auto" />
    </Link>
  );
};

export default function ServiceDetailPage({ service }: Props) {
  return (
    <>
      <Head>
        <title>{service.title} | The Indian Legal Associates</title>
        <meta name="description" content={service.excerpt} />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden px-4">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${service.heroImage || "/images/avatar.png"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tila-primary/90 via-blue-800/85 to-slate-900/90" />
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-center px-4 w-full">
            {/* <Breadcrumb /> */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-white/80 hover:text-white text-sm font-medium absolute top-4 left-4 sm:top-8 sm:left-8"
            >
              <ArrowLeft size={16} /> Back to Practice Areas
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-8 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                <span className="text-white/90 text-xs sm:text-sm font-medium">Premium Legal Services</span>
              </motion.div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <RevealText>{service.title.split(' ')[0]}</RevealText>{' '}
                {service.title.split(' ').slice(1).map((word, i) => (
                  <RevealText key={i} delay={(i + 1) * 0.1}>{word}</RevealText>
                ))}
              </h1>
              <motion.p
                className="text-base sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-12 leading-relaxed px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {service.excerpt}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link href="/contact" className="px-6 py-3 sm:px-10 sm:py-5 bg-white text-tila-primary font-semibold rounded-full hover:shadow-2xl transition-shadow text-base sm:text-lg w-full sm:w-auto text-center">
                  Get Started
                  <ChevronRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="#case-studies" className="px-6 py-3 sm:px-10 sm:py-5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-tila-primary transition-all text-base sm:text-lg w-full sm:w-auto text-center">
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </section>

        {/* Stats Section - Simplified */}
        <section className="relative py-12 sm:py-20 -mt-20 sm:-mt-32 z-10">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {service.stats?.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <GlassCard className="p-4 sm:p-8 rounded-2xl flex flex-col items-center">
                    <div className="flex justify-center mb-2 sm:mb-4">
                      <DynamicIcon
                        iconName={stat.icon}

                      />
                    </div>

                    <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm lg:text-base text-slate-600">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Content Sections - Simplified Parallax, Responsive Layout */}
        <section className="py-16 sm:py-32">
          <div className="max-w-7xl mx-auto px-4">
            {service.sections.map((section, idx) => (
              <div key={section.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 sm:gap-16 items-center mb-16 sm:mb-32`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 order-2 md:order-1"
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-tila-primary/10 text-tila-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                    {section.title}
                  </motion.div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <div
                    className="prose prose-lg sm:prose-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                 
                </motion.div>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 order-1 md:order-2 w-full"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tila-primary to-blue-700 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <Image height={500} width={500}
                      src={section.image || "/images/avatar.png"}
                      alt={section.title}
                      className="relative rounded-2xl sm:rounded-3xl shadow-lg w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {section.icon && (
                      <div className="absolute top-4 right-4 p-2 bg-tila-primary rounded-xl text-white">
                        <DynamicIcon iconName={section.icon} />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials - Responsive Grid */}
        <section className="py-16 sm:py-32 bg-gradient-to-br from-tila-primary via-blue-800 to-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 sm:mb-20"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                <span className="text-white/90 text-xs sm:text-sm font-medium">Client Success Stories</span>
              </motion.div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto px-2">
                Discover why top organizations choose us for their legal needs
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {service.testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl relative group">
                    <div className="absolute top-4 right-4 text-blue-200/20 text-6xl sm:text-8xl font-serif"><Quote/></div>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                      <div className="relative flex-shrink-0">
                        <Image
                          height={50}
                          width={50}
                          src={testimonial.avatar || "/images/avatar.png"}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover ring-2 sm:ring-4 ring-blue-100"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg">{testimonial.name}</h4>
                        <p className="text-tila-primary text-xs sm:text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                      <Quote/>{testimonial.quote}<Quote/>
                    </p>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services - Responsive */}
        {service.relatedServices.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-tila-primary text-center mb-8 sm:mb-12"
              >
                Related Practice Areas
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {service.relatedServices.slice(0, 3).map((slug) => (
                  <RelatedServiceCard key={slug} relatedSlug={slug} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - Responsive */}
        <section className="py-16 sm:py-32">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-tila-primary via-blue-700 to-blue-900 p-8 sm:p-16 text-center shadow-2xl"
            >
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')" }} />
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4 sm:mb-8 mx-auto"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300" />
                    <span className="text-white text-xs sm:text-sm font-medium">Available 24/7</span>
                  </motion.div>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Ready to Transform<br className="hidden sm:block" />Your Legal Strategy?
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-12 max-w-md sm:max-w-2xl mx-auto px-2">
                    Schedule a consultation with our expert team and discover how we can help your business thrive.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <Link href="/contact" className="px-6 py-3 sm:px-10 sm:py-5 bg-white text-tila-primary font-bold rounded-full hover:shadow-2xl transition-shadow text-base sm:text-lg w-full sm:w-auto text-center">
                      Schedule Consultation
                      <ChevronRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <Link href="/contact#book" className="px-6 py-3 sm:px-10 sm:py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-base sm:text-lg w-full sm:w-auto text-center">
                      Book Appointment
                      <ChevronRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Footer Spacer */}
        <div className="h-16 sm:h-20" />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SERVICES.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { notFound: true };
  return { props: { service } };
};