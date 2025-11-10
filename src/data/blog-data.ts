import type { Metadata } from "next"

export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  readTime: string
  category: string
  content: {
    type: "paragraph" | "heading" | "list"
    value: string | string[]
    level?: 2 | 3 | 4
  }[]
  metadata: Metadata
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "about-the-indian-legal-associates",
    title: "About The Indian Legal Associates: A Trusted Partner in Justice",
    date: "2025-08-01",
    author: "The Indian Legal Associates",
    excerpt:
      "The Indian Legal Associates is a reputed law firm offering strategic, reliable, and client-focused legal solutions across India.",
    image: "/blog/tila-office.jpg",
    readTime: "5 mins read",
    category: "Law Firm Profile",
    content: [
      {
        type: "paragraph",
        value:
          "The Indian Legal Associates (TILA) is a reputed multi-disciplinary boutique law firm headquartered in New Delhi, with a branch office in Noida. The firm is dedicated to providing strategic, result-oriented, and client-centric legal services to individuals, corporations, and institutions across India.",
      },
      { type: "heading", value: "Our Philosophy", level: 2 },
      {
        type: "paragraph",
        value:
          "Our philosophy is simple yet powerful: “We don’t just give advice – we build it deliberately, for you.” This reflects our belief in crafting practical, tailored legal solutions that go beyond consultation.",
      },
      { type: "heading", value: "Core Values", level: 2 },
      {
        type: "list",
        value: [
          "**Professionalism:** Upholding the highest standards of legal practice.",
          "**Commitment:** Delivering prompt, effective, and client-focused services.",
          "**Integrity & Transparency:** Ensuring trust through clear and ethical practices.",
        ],
      },
      {
        type: "paragraph",
        value:
          "With a strong nationwide presence and a network of professionals, TILA stands as a dependable partner in justice — combining expertise, ethics, and efficiency.",
      },
    ],
    metadata: {
      title: "About The Indian Legal Associates: A Trusted Partner in Justice",
      description:
        "Discover The Indian Legal Associates — a reputed law firm in India dedicated to professionalism, commitment, and integrity.",
    },
  },
  {
    id: 2,
    slug: "comprehensive-legal-services",
    title: "Our Comprehensive Legal Services",
    date: "2025-08-10",
    author: "The Indian Legal Associates",
    excerpt:
      "TILA offers a full spectrum of legal services, combining expertise and strategy to deliver efficient, reliable, and result-oriented outcomes.",
    image: "/blog/legal-services.jpg",
    readTime: "6 mins read",
    category: "Legal Services",
    content: [
      {
        type: "paragraph",
        value:
          "At The Indian Legal Associates, we provide end-to-end legal services designed to meet diverse client needs. Our team integrates deep legal expertise with practical strategies to deliver dependable and effective results.",
      },
      { type: "heading", value: "Core Legal Services", level: 2 },
      {
        type: "list",
        value: [
          "Litigation Support – Civil, Criminal, Constitutional, and Tribunal matters.",
          "Corporate & Commercial Advisory – Structuring, compliance, mergers, and acquisitions.",
          "Consumer & Motor Accident Claims – Handling consumer disputes and compensation cases.",
          "Family & Matrimonial Law – Divorce, maintenance, custody, and inheritance disputes.",
          "Property & Real Estate – Documentation, ownership disputes, and litigation.",
          "Arbitration & ADR – Mediation and arbitration for faster dispute resolution.",
          "Employment & Labour Law – Representation for employers and employees.",
        ],
      },
      { type: "heading", value: "Specialized Areas", level: 2 },
      {
        type: "paragraph",
        value:
          "We also specialize in diverse sectors including banking, company law, intellectual property, taxation, environmental law, telecom, infrastructure, energy, and international trade, ensuring comprehensive coverage of client needs.",
      },
      { type: "heading", value: "Service Principles", level: 2 },
      {
        type: "list",
        value: [
          "**Transparency:** Clear communication and open processes.",
          "**Accessibility:** Prompt, reliable, and responsive legal support.",
          "**Confidentiality:** Absolute discretion in all matters.",
          "**Result-Oriented Approach:** Focused on achieving the best possible outcomes.",
          "**Excellence:** Upholding professionalism and quality across all engagements.",
        ],
      },
    ],
    metadata: {
      title: "Our Comprehensive Legal Services | The Indian Legal Associates",
      description:
        "Explore The Indian Legal Associates’ full suite of legal services, from litigation and corporate law to arbitration and intellectual property.",
    },
  },
  {
    id: 3,
    slug: "our-vision-and-approach",
    title: "The Vision and Approach Behind The Indian Legal Associates",
    date: "2025-08-20",
    author: "The Indian Legal Associates",
    excerpt:
      "Our approach combines professionalism, innovation, and client focus — ensuring every legal challenge is met with effective, strategic solutions.",
    image: "/blog/vision-approach.jpg",
    readTime: "5 mins read",
    category: "Firm Philosophy",
    content: [
      {
        type: "paragraph",
        value:
          "At The Indian Legal Associates, our vision is to deliver excellence in legal services through integrity, commitment, and innovation. We see ourselves as strategic partners to our clients, not just legal representatives.",
      },
      { type: "heading", value: "Our Aim", level: 2 },
      {
        type: "list",
        value: [
          "Maintain the highest standards of professionalism and ethics.",
          "Deliver clear, concise, and actionable legal advice.",
          "Provide timely and efficient solutions without compromising quality.",
          "Combine expertise with pragmatic strategies for real-world challenges.",
          "Foster long-term client relationships based on trust and transparency.",
        ],
      },
      { type: "heading", value: "Our Four-Dimensional Approach", level: 2 },
      {
        type: "list",
        value: [
          "**Commitment to Clients:** Personalized solutions with consistent communication.",
          "**Competence & Expertise:** Blending legal knowledge with industry insight.",
          "**Efficiency & Timeliness:** Prompt and effective delivery of services.",
          "**Innovation & Strategy:** Combining traditional advocacy with modern legal thinking.",
        ],
      },
      {
        type: "paragraph",
        value:
          "By integrating senior advocates, consultants, and young professionals, we ensure every client benefits from a comprehensive and balanced approach to their legal challenges.",
      },
    ],
    metadata: {
      title: "The Vision and Approach Behind The Indian Legal Associates",
      description:
        "Learn how The Indian Legal Associates combines professionalism, innovation, and client focus to deliver strategic legal outcomes.",
    },
  },
  {
    id: 4,
    slug: "advocate-naushad-ali-profile",
    title: "Meet Our Founder: Advocate Naushad Ali",
    date: "2025-08-25",
    author: "The Indian Legal Associates",
    excerpt:
      "With over 35 years of experience, Advocate Naushad Ali leads The Indian Legal Associates with unmatched expertise and dedication to justice.",
    image: "/blog/naushad-ali.jpg",
    readTime: "6 mins read",
    category: "Leadership",
    content: [
      {
        type: "paragraph",
        value:
          "Advocate Naushad Ali, the founding partner of The Indian Legal Associates, is a distinguished legal practitioner with over 35 years of experience in litigation and advisory services across India. Known for his integrity, professionalism, and commitment to justice, he is a respected name in the legal fraternity.",
      },
      { type: "heading", value: "Achievements & Recognition", level: 2 },
      {
        type: "list",
        value: [
          "35+ years of continuous legal practice across District Courts, High Courts, and Tribunals.",
          "Honored by the Election Commission of Saket Court for professional integrity.",
          "Represented clients in numerous landmark cases shaping Indian jurisprudence.",
          "Mentor to young lawyers and advocate for ethical legal practice.",
          "Recognized for pro bono work supporting underprivileged communities.",
        ],
      },
      { type: "heading", value: "Areas of Expertise", level: 2 },
      {
        type: "list",
        value: [
          "Civil & Commercial Litigation – Property disputes, contracts, succession, and injunctions.",
          "Criminal Law – Trials, appeals, bail matters, and white-collar crimes.",
          "Constitutional & Service Law – Writ petitions, PILs, and service disputes.",
          "Matrimonial & Family Law – Divorce, custody, maintenance, and guardianship.",
          "Consumer & Corporate Law – Arbitration, business disputes, and corporate advisory.",
        ],
      },
      {
        type: "paragraph",
        value:
          "Under his leadership, The Indian Legal Associates continues to grow as a trusted and results-driven law firm, serving clients with diligence and dedication.",
      },
    ],
    metadata: {
      title: "Meet Our Founder: Advocate Naushad Ali | The Indian Legal Associates",
      description:
        "Discover the journey and contributions of Advocate Naushad Ali — founder of The Indian Legal Associates, with over 35 years of legal excellence.",
    },
  },
]
