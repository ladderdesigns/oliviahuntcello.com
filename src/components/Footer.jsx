import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-green-500 dark:hover:text-green-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="flex-none mt-32">
      <ContainerOuter>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center text-sm font-medium gap-x-6 gap-y-1 text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/lessons">Lessons</NavLink>
                <NavLink href="/booking">Booking</NavLink>
                <NavLink href="/gallery">Gallery</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
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
