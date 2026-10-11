import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-green-500 dark:text-zinc-200 dark:hover:text-green-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-green-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Olivia Hunt is a Los Angeles–based cellist and teacher, and Assistant Principal Cellist of the Billings Symphony.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Olivia Hunt playing cello outdoors"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl border-2 border-black bg-zinc-100 object-cover dark:border-zinc-700 dark:bg-zinc-800"
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Motion through music
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Cellist Olivia Hunt began her musical journey at age 9 in Atlanta.
              She went on to earn her Bachelor&apos;s at Vanderbilt
              University&apos;s Blair School of Music under Dr. Felix Wang.
              During her undergraduate studies, she performed with the Eschaton
              New Music Ensemble, Nashville Sinfonietta, and at the Festival
              d&apos;Aix en Provence. After graduating, she continued her
              studies at Indiana University with cellist Eric Kim, obtaining her
              Master&apos;s and Performer&apos;s Diploma.{' '}
            </p>
            <p>
              Hunt has performed at renowned festivals worldwide, including the
              Aspen Music Festival, Green Mountain Chamber Music Festival,
              Brancaleoni International Music Festival, and National Music
              Festival. She is currently the Assistant Principal Cellist of the
              Billings Symphony and a substitute with the Owensboro Symphony
              Orchestra and Evansville Philharmonic.
            </p>
            <p>
              Passionate about teaching, Hunt spent two years on the faculty at
              the Stafford Music Academy in Bloomington, Indiana. She is now
              based in Los Angeles, California, with her cat, Rory.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/oliviahuntcello/"
              icon={LinkedInIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:olivia.c.hunt@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              Send an email
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
