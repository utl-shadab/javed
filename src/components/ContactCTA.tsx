"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="w-full flex justify-center px-4 md:px-10 py-10">
      <div className="
        relative w-full max-w-7xl bg-gradient-to-r from-blue-700 to-blue-400 
        rounded-[32px]  flex flex-col md:flex-row items-center
        md:items-center justify-between
        py-16 md:py-20 px-6 md:pr-10 md:pl-14
      ">

        {/* IMAGE TOP ON MOBILE */}
        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/images/cta.png"
            alt="lawyer"
            width={280}
            height={350}
            className="object-contain"
          />
        </div>

        {/* LEFT TEXT */}
        <div className="z-10 text-white max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Contact Us for Legal Assistance
          </h1>

          <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
            Experienced lawyers ready to fight for your rights
          </p>

          <div className="mt-7 flex justify-center md:justify-start">
            <Link href="/services">
              <button className="px-6 py-3 bg-[#0A0A2A] text-white rounded-full font-medium">
                Our areas of Law
              </button>
            </Link>
          </div>
        </div>

        {/* GIRL IMAGE RIGHT ON DESKTOP */}
        <div className="hidden md:block absolute right-[-10px] bottom-0 z-10">
          <Image
            src="/images/cta.png"
            alt="lawyer"
            width={430}
            height={540}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}
