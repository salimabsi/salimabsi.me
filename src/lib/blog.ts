import 'server-only'

import fs from 'fs'
import path from 'path'

type BlogPostMetadata = {
  title: string
  date: string
  description: string
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

async function getMDXBlogPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file))
      const { metadata } = await import(`@/content/${slug}.mdx`)

      return {
        slug,
        metadata: metadata as BlogPostMetadata,
      }
    })
  )

  return posts
}

export async function getBlogPosts() {
  return getMDXBlogPosts(path.join(process.cwd(), 'src', 'content'))
}

export function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
