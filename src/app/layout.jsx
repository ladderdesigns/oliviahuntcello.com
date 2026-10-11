import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { siteUrl } from '@/lib/siteUrl'

import '@/styles/tailwind.css'

const description =
  'Olivia Hunt is a Los Angeles–based cellist and teacher. She is the Assistant Principal Cellist of the Billings Symphony, a substitute with the Owensboro Symphony Orchestra and Evansville Philharmonic, and offers private lessons and performances throughout the Los Angeles area.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Olivia Hunt',
    default:
      'Olivia Hunt - orchestral and chamber cellist based in Los Angeles',
  },
  description,
  openGraph: {
    type: 'website',
    siteName: 'Olivia Hunt',
    locale: 'en_US',
    description,
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
}

export const viewport = {
  themeColor: '#fafafa',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex h-full bg-zinc-50">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
