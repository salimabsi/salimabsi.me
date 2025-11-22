import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  const postsByYear = new Map<string, typeof posts>()

  posts.forEach((post) => {
    const year = new Date(post.metadata.date).getFullYear().toString()
    const yearPosts = postsByYear.get(year) ?? []
    yearPosts.push(post)
    postsByYear.set(year, yearPosts)
  })

  // Desc order
  const sortedYears = Array.from(postsByYear.keys()).sort((a, b) => Number(b) - Number(a))

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-display">
          Blog
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Things I learn and write, sometimes to share, sometimes not. Mostly about software.
        </p>
      </header>

      <div className="space-y-8">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-5">
            <p className="text-sm tracking-widest text-neutral-600 tabular-nums dark:text-neutral-300 font-mono bg-neutral-200 dark:bg-neutral-800 inline-block px-2 py-1 rounded-md">
              {year}
            </p>
            <div className="space-y-4 flex flex-col items-start">
              {postsByYear.get(year)!.map((post) => (
                <div key={post.slug} className="space-y-0.5">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tabular-nums">
                    {formatDate(post.metadata.date)}
                  </p>
                  <Link key={post.slug} href={`/blog/${post.slug}`} className='text-xl font-medium text-neutral-900 dark:text-neutral-100 font-display hover:underline hover:text-neutral-600 dark:hover:text-neutral-300'>
                    {post.metadata.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
