import { useRouter } from "next/router"
import { blogPosts } from "@/data/blog-data"
import { BlogPostDetail } from "@/components/blog-post-detail"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function BlogPostPage() {
    const router = useRouter()
    const { slug } = router.query

    const [post, setPost] = useState(() => {
        if (typeof slug === "string") {
            return blogPosts.find((p) => p.slug === slug)
        }
        return undefined
    })

    useEffect(() => {
        if (typeof slug === "string") {
            const foundPost = blogPosts.find((p) => p.slug === slug)
            setPost(foundPost)
        }
    }, [slug])

    if (!slug) return <p className="text-white p-8">Loading...</p>
    if (!post) return <p className="text-white p-8">Post not found.</p>

    return (
        <>

            <Head>
                <title>{`${post.metadata?.title || post.title}`}</title>
                <meta name="description" content={post.metadata?.description || post.excerpt} />
            </Head>
            <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
                <BlogPostDetail post={post} />
            </main>
        </>
    )
}
