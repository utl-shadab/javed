
// pages/blog/[slug].tsx
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import { blogPosts, BlogPost } from "@/data/blog-data"
import { BlogPostDetail } from "@/components/blog-post-detail"

type Props = {
  post: BlogPost
}

export default function BlogPostPage({ post }: Props) {
  const seo = post.seo

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "The Indian Legal Associates",
      logo: { "@type": "ImageObject", url: "https://www.theindialegalassociates.in/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo?.canonical,
    },
  }

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords.join(", ")} />
        <link rel="canonical" href={seo?.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={seo?.openGraph.title} />
        <meta property="og:description" content={seo?.openGraph.description} />
        <meta property="og:url" content={seo?.openGraph.url} />
        <meta property="og:image" content={seo?.openGraph.images[0]} />
        <meta property="og:type" content={seo?.openGraph.type} />

        {/* Twitter */}
        <meta name="twitter:card" content={seo?.twitter.card} />
        <meta name="twitter:title" content={seo?.twitter.title} />
        <meta name="twitter:description" content={seo?.twitter.description} />
        <meta name="twitter:image" content={seo?.twitter.images[0]} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="bg-[#0a0a0a] text-white">
        <BlogPostDetail post={post} />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((p) => ({
    params: { slug: p.slug },
  }))
  return { paths, fallback: false } 
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return { notFound: true }

  return {
    props: { post },
  }
}
