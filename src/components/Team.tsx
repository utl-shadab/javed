import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Team section component for The Indian Legal Associates (TILA)
// Uses Tailwind CSS utility classes. Drop into a Next.js / React project.

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience?: string;
  phone?: string;
  email?: string;
  imgSrc?: string; // Path to image in /public or remote URL
};

const TEAM: TeamMember[] = [
  {
    id: "naushad-ali",
    name: "Mr. Naushad Ali",
    role: "Senior Advocate",
    bio:
      "A distinguished legal practitioner with over 35 years of experience across District Courts, High Courts and Tribunals. Known for civil & commercial litigation, criminal defence, and constitutional work.",
    experience: "35+ years of practice; mentor and pro bono advocate",
    phone: "+91-8826879144",
    email: "theindianlegalnetwork@gmail.com",
    imgSrc: "/team/naushad-ali.jpg",
  },
  {
    id: "senior-associate-1",
    name: "Senior Associate",
    role: "Litigation & Advisory",
    bio:
      "Handles civil and corporate litigation, with a focus on strategy, drafting and court representation. Works closely with clients for preventive legal planning.",
    experience: "10+ years",
    imgSrc: "/team/associate-1.jpg",
  },
  {
    id: "associate-2",
    name: "Associate Counsel",
    role: "Corporate & Compliance",
    bio:
      "Advises on corporate governance, contracts, compliance and M&A support. Skilled in drafting and regulatory matters.",
    experience: "6+ years",
    imgSrc: "/team/associate-2.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  enter: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function Team() {
  return (
    <section aria-labelledby="team-heading" className="py-12 md:py-20 bg-tila-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-3xl">
          <h2
            id="team-heading"
            className="text-3xl md:text-4xl font-semibold leading-tight text-tila-text"
          >
            Our Team
          </h2>
          <p className="mt-4 text-tila-lightText">
            A balanced mix of senior advocates, legal consultants and young professionals delivering practical,
            result-oriented legal solutions across India.
          </p>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, idx) => (
            <motion.article
              key={member.id}
              custom={idx}
              initial="hidden"
              whileInView="enter"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              aria-labelledby={`${member.id}-name`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                  {member.imgSrc ? (
                    // Image path expects a public folder; replace with your image management
                    <Image
                     width={100}
                     height={100}
                     src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image path missing
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="text-xl font-medium text-tila-text">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 id={`${member.id}-name`} className="text-lg font-semibold text-tila-text">
                    {member.name}
                  </h3>
                  <p className="text-sm text-tila-lightText">{member.role}</p>
                  {member.experience && (
                    <p className="text-xs mt-1 text-tila-lightText">{member.experience}</p>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm text-tila-text leading-relaxed">{member.bio}</p>

              <div className="mt-4 flex items-center gap-3">
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-sm rounded-md px-3 py-2  bg-tila-surface  /60 border border-slate-100 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-300"
                    aria-label={`Call ${member.name}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="truncate">{member.phone}</span>
                  </a>
                )}

                {/* {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 md:hidden text-sm rounded-md px-3 py-2  bg-tila-surface  /60 border border-slate-100 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                )} */}

                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      `View profile for ${member.name} — this demo button can be wired to open a modal or navigate to a detailed team page.`
                    )
                  }
                  className="ml-auto text-sm font-medium underline text-tila-text"
                >
                  View profile
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-tila-primary  text-tila-surface  text-sm font-semibold shadow hover:opacity-95"
            aria-label="Contact the firm"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
