import { readdir } from 'node:fs/promises'
import path from 'node:path'

const writingDirectory = path.join(process.cwd(), 'src/app/writing')

async function importArticle(slug) {
  let { article } = await import(`../app/writing/${slug}/page.mdx`)

  return {
    slug,
    ...article,
  }
}

export async function getAllArticles() {
  let entries = await readdir(writingDirectory, { withFileTypes: true })
  let slugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)

  let articles = await Promise.all(slugs.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
