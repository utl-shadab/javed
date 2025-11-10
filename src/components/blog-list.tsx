"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog-data"

export function BlogList() {
  return (
    <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">
          Our Blog
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Stay updated with insights from The Indian Legal Associates — legal trends,
          practice notes, and firm updates.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.01]"
            >
              <Link href={`/insight/${post.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">
                    {post.date} • By {post.author}
                  </p>
                  <h3 className="text-2xl font-bold font-space-grotesk mb-3 text-white group-hover:text-tila-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-tila-primary group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
