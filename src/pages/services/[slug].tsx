"use client";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES, Service } from "@/data/services";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb"; // ✅ Import here

type Props = { service: Service };

export default function ServiceDetailPage({ service }: Props) {
  return (
    <>
      <Head>
        <title>{service.title} | The Indian Legal Associates</title>
        <meta name="description" content={service.excerpt} />
      </Head>

      <main className="min-h-screen bg-white text-[#222B38] pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* ✅ Reusable Breadcrumb */}
          <Breadcrumb />

          {/* 🔹 Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#2F56C8] hover:underline text-sm font-medium mb-6"
          >
            <ArrowLeft size={16} /> Back to Practice Areas
          </Link>

          {/* 🔹 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-[#0A1A63] leading-tight mt-4"
          >
            {service.title}
          </motion.h1>

          {/* 🔹 Excerpt */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#60656F] mt-4 text-lg leading-relaxed"
          >
            {service.excerpt}
          </motion.p>

          {/* 🔹 Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 prose prose-lg max-w-none text-[#222B38]"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: service.content || "",
              }}
            />
          </motion.div>

          {/* 🔹 CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#2F56C8] text-white rounded-full text-sm font-medium hover:bg-[#094bbf] transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
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
  return { props: { service } };
};
