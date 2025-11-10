import type { Metadata } from "next"
import { BlogList } from "@/components/blog-list"

export const metadata: Metadata = {
  title: "Blog | The Indian Legal Associates - Legal Insights & Firm Updates",
  description:
    "Read articles, insights, and updates from The Indian Legal Associates — covering litigation strategy, corporate advisory, arbitration, and more.",
  keywords: [
    "The Indian Legal Associates",
    "legal blog",
    "litigation insights",
    "corporate law",
    "arbitration",
    "legal updates",
  ],
  openGraph: {
    title: "Blog | The Indian Legal Associates",
    description:
      "Insights from The Indian Legal Associates on litigation, corporate advisory, arbitration, and legal practice.",
    url: "#",
    siteName: "The Indian Legal Associates",
    images: [
      {
        url: "/Meta/blog.png",
        width: 1200,
        height: 630,
        alt: "The Indian Legal Associates Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | The Indian Legal Associates",
    description: "Insights and updates from The Indian Legal Associates.",
    images: ["/Meta/blog.png"],
  },
}

export default function BlogPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <BlogList />
    </main>
  )
}
