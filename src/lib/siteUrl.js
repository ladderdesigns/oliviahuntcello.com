const DEFAULT_SITE_URL = 'https://oliviahuntcello.com'

function resolveSiteUrl(value) {
  if (!value) {
    return DEFAULT_SITE_URL
  }

  // Hosting env vars are sometimes set as a bare domain, which `new URL` rejects.
  let url = /^https?:\/\//.test(value) ? value : `https://${value}`

  return url.replace(/\/+$/, '')
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
