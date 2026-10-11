import { Feed } from 'feed'

import { getAllArticles } from '@/lib/writing'
import { siteUrl } from '@/lib/siteUrl'

export const dynamic = 'force-static'

export async function GET() {
  let author = {
    name: 'Olivia Hunt',
    email: 'olivia.c.hunt@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Writing on music, teaching, and living as a performer',
    author,
    id: siteUrl,
    link: siteUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  for (let article of await getAllArticles()) {
    let url = `${siteUrl}/writing/${article.slug}`

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      author: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
