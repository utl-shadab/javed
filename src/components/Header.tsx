"use client";
import { useScrollLock } from "@/hooks/useScrollLock";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    type: "dropdown",
    items: [
      { label: "Our Firm", href: "/about" },
      { label: "Philosophy & Approach", href: "/about/philosophy" },
      { label: "Network", href: "/about/network" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    label: "Practice Areas",
    type: "mega",
    columns: [
      {
        title: "Core Services",
        links: [
          "Litigation Support",
          "Corporate & Commercial Advisory",
          "Family & Matrimonial Law",
          "Property & Real Estate",
          "Arbitration & ADR",
          "Employment & Labour Law",
        ],
      },
      {
        title: "Specialised Practices",
        links: [
          "Banking & Finance",
          "Company Law & Governance",
          "Insolvency & Bankruptcy",
          "Intellectual Property",
          "Information Technology & Data Protection",
          "Taxation & Accounting",
        ],
      },
      {
        title: "Sector Focus",
        links: [
          "Energy & Environment",
          "Infrastructure & Real Estate",
          "Media, Sports & Entertainment",
          "Shipping & Admiralty",
          "Investment & Collaborations",
        ],
      },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement | null>(null);
  useScrollLock(mobileOpen);
  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(".mobile-menu-toggle")
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);



  const handleMenuClick = (label: string) =>
    setOpenMenu(openMenu === label ? null : label);
  useEffect(() => {
    if (openMenu && megaRef.current) {
      gsap.fromTo(
        megaRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        }
      );
    }
  }, [openMenu]);
  return (
    <>
      {/* -------- DESKTOP HEADER -------- */}
      <header
        ref={menuRef}
        className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-[9999] w-full   items-center justify-between py-4 md:px-20 bg-white   shadow-[0_4px_20px_rgba(0,0,0,0.05)] animate-slideDown"
      >
        <Link href="/" className="font-semibold text-xl text-[#0A1A63]">
          The Indian Legal Associates
        </Link>

        <nav className="flex gap-6 relative text-lg font-medium text-tila-text">
          {NAV.map((item) => (
            <div key={item.label} className="relative">
              {/* 🔹 If it's a dropdown or mega menu — button opens menu */}
              {item.type ? (
                <button
                  onClick={() => handleMenuClick(item.label)}
                  className="flex items-center gap-1 hover:text-[#0A66FF] transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
              ) : (
                item.href && (
                  <Link
                    href={item.href as string}
                    onClick={() => setOpenMenu(null)}
                    className="hover:text-[#0A66FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* DROPDOWN MENU */}
              {openMenu === item.label && item.type === "dropdown" && (
                <div className="absolute top-[calc(100%+2rem)] -left-28 mt-2 w-72 bg-white border border-neutral-200 shadow-2xl  py-2 animate-fadeIn z-[10000]">
                  {item.items?.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-neutral-700 text-base hover:bg-neutral-100 transition-colors"
                      onClick={() => setOpenMenu(null)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* MEGA MENU */}
              <AnimatePresence>
                {openMenu === item.label && item.type === "mega" && (
                  <motion.div
                    ref={megaRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed left-0 top-[calc(100%+1rem)] -translate-x-1/2 w-full bg-white border-t  border-neutral-200 shadow-2xl z-[10000]"
                  >
                    <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-3 gap-10">
                      {item.columns?.map((col) => (
                        <div key={col.title}>
                          <h4 className="font-semibold text-neutral-900 mb-4 text-base">
                            {col.title}
                          </h4>
                          <ul className="space-y-3">
                            {col.links.map((link) => {
                              const slug = link
                                .toLowerCase()
                                .replace(/&/g, "and")
                                .replace(/\s+/g, "-");
                              return (
                                <li key={link}>
                                  <Link
                                    href={`/services/${slug}`}
                                    className="text-neutral-700 hover:text-[#0A66FF] transition-colors block text-base"
                                    onClick={() => setOpenMenu(null)}
                                  >
                                    {link}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="px-6 py-2 rounded-full bg-[#0A66FF] text-white text-sm font-medium hover:bg-[#0939B5] transition-all hover:scale-105"
        >
          Book Appointment
        </Link>
      </header>

      {/* -------- MOBILE HEADER -------- */}
      <header className="md:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white/70 backdrop-blur-xl border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between px-5 py-3 z-[99999]">
        <div className="text-base font-semibold text-[#0A1A63]">TILA</div>
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* -------- MOBILE MENU -------- */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99998] md:hidden animate-fadeIn"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        ref={mobileMenuRef}
        className={`fixed top-[3rem] right-0 w-[80%] h-[calc(100vh-3rem)] bg-white shadow-2xl z-[99999] px-8 py-8 flex flex-col space-y-6 overflow-y-auto transition-transform duration-500 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {NAV.map((item) =>
          item.type === "dropdown" ? (
            <details key={item.label} className="group">
              <summary className="cursor-pointer text-lg font-medium hover:text-[#0A66FF] flex justify-between items-center list-none">
                {item.label}
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="ml-3 mt-2 space-y-2 text-base animate-slideDown">
                {item.items?.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 hover:text-[#0A66FF] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : item.type === "mega" ? (
            <details key={item.label} className="group">
              <summary className="cursor-pointer text-lg font-medium hover:text-[#0A66FF] flex justify-between items-center list-none">
                {item.label}
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="ml-3 mt-2 space-y-4 animate-slideDown">
                {item.columns?.map((col) => (
                  <div key={col.title}>
                    <h4 className="font-semibold text-sm mb-2">{col.title}</h4>
                    <ul className="space-y-1 text-sm">
                      {col.links.map((link) => {
                        const slug = link
                          .toLowerCase()
                          .replace(/&/g, "and")
                          .replace(/\s+/g, "-");
                        return (
                          <li key={link}>
                            <Link
                              href={`/services/${slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 hover:text-[#0A66FF] transition-colors"
                            >
                              {link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={item.label}
              href={item.href || "#"}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium hover:text-[#0A66FF] transition-colors"
            >
              {item.label}
            </Link>
          )
        )}

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-8 px-6 py-3 rounded-full bg-[#0A66FF] text-white font-semibold text-center hover:bg-[#0939B5] transition-all"
        >
          Book Appointment
        </Link>
      </div>

      {/* -------- CSS ANIMATIONS -------- */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
