import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts } from '@/lib/blog'

const baseUrl = 'https://salimabsi.me'

export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const posts = await getBlogPosts()
    const post = posts.find((post) => post.slug === slug)

    if (!post) {
        return
    }

    const { title, description, date: publishedTime } = post.metadata

    const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const posts = await getBlogPosts()
    const post = posts.find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    const { default: Post } = await import(`@/content/${slug}.mdx`)

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        datePublished: post.metadata.date,
                        dateModified: post.metadata.date,
                        description: post.metadata.description,
                        image: `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `${baseUrl}/blog/${post.slug}`,
                        author: {
                            '@type': 'Person',
                            name: 'Salim Absi',
                        },
                    }),
                }}
            />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                {formatDate(post.metadata.date)}
            </p>
            <h1 className="mt-3 mb-10 text-3xl font-semibold text-pretty">{post.metadata.title}</h1>
            <article className="prose prose-neutral dark:prose-invert prose-headings:font-semibold">
                <Post />
            </article>
        </section>
    )
}
