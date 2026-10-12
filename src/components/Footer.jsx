import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { navigation } from '@/lib/navigation'

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-green-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Olivia Hunt. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
