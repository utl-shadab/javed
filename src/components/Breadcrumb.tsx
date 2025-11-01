"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Optional: map slugs to readable labels
const TITLE_MAP: Record<string, string> = {
    services: "Services",
    about: "About",
    team: "Team",
    insights: "Insights",
    contact: "Contact",
    philosophy: "Philosophy & Approach",
    network: "Network",
};

export default function Breadcrumb() {
    const router = useRouter();
    const pathSegments = router.asPath.split("?")[0].split("/").filter(Boolean);
    const path = router.asPath.toLowerCase().replace(/\/$/, "");
    if (path === "" || path === "/contact") return null;

    // Build breadcrumb segments
    const crumbs = pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;
        const label =
            TITLE_MAP[segment] ||
            segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()); // capitalize words

        return { label, href, isLast };
    });

    // Animation + rendering
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-sm text-[#60656F] mb-6 flex flex-wrap items-center gap-1"
            aria-label="Breadcrumb"
        >
            <Link href="/" className="hover:text-[#0A66FF] transition-colors">
                Home
            </Link>

            {crumbs.map((crumb) => (
                <span key={crumb.href} className="flex items-center gap-1">
                    <span>/</span>
                    {crumb.isLast ? (
                        <span className="text-[#0A1A63] font-medium">{crumb.label}</span>
                    ) : (
                        <Link
                            href={crumb.href}
                            className="hover:text-[#0A66FF] transition-colors"
                        >
                            {crumb.label}
                        </Link>
                    )}
                </span>
            ))}
        </motion.nav>
    );
}
