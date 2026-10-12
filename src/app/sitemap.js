import { navigation } from '@/lib/navigation'
import { siteUrl } from '@/lib/siteUrl'

export default function sitemap() {
  return [{ href: '/' }, ...navigation].map(({ href }) => ({
    url: `${siteUrl}${href === '/' ? '' : href}`,
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }))
}
