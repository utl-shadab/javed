"use client"

import React, { useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, Bookmark, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import type { BlogPost } from "@/data/blog-data"
import { blogPosts } from "@/data/blog-data"

interface BlogPostDetailProps {
  post: BlogPost
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const router = useRouter()
  const progressRef = useRef<HTMLDivElement | null>(null)

  // 🔹 Progress bar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      progressRef.current.style.transform = `scaleX(${progress})`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔹 Background gradient color based on slug
  const getBackgroundColor = useCallback(() => {
   const gradients = [
  "from-blue-950 via-blue-900 to-sky-900",
  "from-blue-950 via-indigo-900 to-blue-800",
  "from-sky-950 via-blue-900 to-indigo-950",
  "from-indigo-950 via-blue-900 to-sky-950",
  "from-blue-950 via-sky-900 to-blue-800",
  "from-blue-900 via-indigo-900 to-sky-800",
  "from-sky-950 via-blue-950 to-indigo-900",
  "from-indigo-950 via-sky-900 to-blue-950",
  "from-blue-950 via-blue-800 to-sky-800",
]
    let hash = 0
    for (let i = 0; i < post.slug.length; i++) {
      hash = (hash * 31 + post.slug.charCodeAt(i)) | 0
    }
    return gradients[Math.abs(hash) % gradients.length]
  }, [post.slug])

  const backgroundGradient = getBackgroundColor()

  // 🔹 Navigate between posts
  const navigateToPost = useCallback(
    (direction: "next" | "prev") => {
      const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug)
      if (currentIndex === -1) return

      const targetIndex =
        direction === "next"
          ? (currentIndex + 1) % blogPosts.length
          : (currentIndex - 1 + blogPosts.length) % blogPosts.length

      const targetPost = blogPosts[targetIndex]
      window.scrollTo({ top: 0, behavior: "auto" })
      router.push(`/insight/${targetPost.slug}`)
    },
    [post.slug, router]
  )

  // 🔹 Render content types safely
  const renderContent = (block: BlogPost["content"][0], index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-white leading-relaxed">
            {block.value}
          </p>
        )

      case "heading": {
        const Tag = `h${block.level || 2}` 
        const size =
          block.level === 2
            ? "text-3xl"
            : block.level === 3
            ? "text-2xl"
            : "text-xl"

        return React.createElement(
          Tag,
          {
            key: index,
            className: `${size} font-bold mb-4 mt-8 text-white`,
          },
          block.value
        )
      }

      case "list":
        return (
          <ul
            key={index}
            className="list-disc list-inside space-y-2 mb-6 text-gray-300"
          >
            {(block.value as string[]).map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        )

      default:
        return null
    }
  }

  return (
    <section
      className={`min-h-screen bg-gradient-to-br ${backgroundGradient} text-white relative overflow-hidden`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/3 rounded-full blur-3xl opacity-40" />
      </div>

      <div
        className={`relative z-10 bg-gradient-to-br ${backgroundGradient} backdrop-blur-sm pt-32 pb-20`}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-6">
            <Link
              href="/insight"
              className="hover:text-gray-300 text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <span className="mx-2 text-white">•</span>
            <span className="text-white">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center text-white mb-12">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm opacity-80">
                {post.date} • {post.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} opacity-20 rounded-2xl`}
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
            <article className="prose prose-lg max-w-none">
              {post.content.map((block, index) => renderContent(block, index))}

              {/* Prev / Next Buttons */}
              <div className="mt-20 pt-8 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => navigateToPost("prev")}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous Article</span>
                  </button>
                  <button
                    onClick={() => navigateToPost("next")}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200"
                  >
                    <span>Next Article</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <div className="flex flex-col space-y-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                  {[
                    { Icon: Heart, label: "Like", color: "hover:text-red-400" },
                    { Icon: Bookmark, label: "Save", color: "hover:text-green-400" },
                    { Icon: Share2, label: "Share", color: "hover:text-purple-400" },
                  ].map(({ Icon, label, color }, i) => (
                    <button
                      key={i}
                      title={label}
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 transition-all duration-200 ${color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}

                  <button
                    onClick={() => navigateToPost("prev")}
                    title="Previous Article"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-blue-400 transition-all duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => navigateToPost("next")}
                    title="Next Article"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-blue-400 transition-all duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Scroll Progress Bar */}
                <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                  <div className="relative w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                    <div
                      ref={progressRef}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-sm"
                      style={{
                        transformOrigin: "left center",
                        transform: "scaleX(0)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
