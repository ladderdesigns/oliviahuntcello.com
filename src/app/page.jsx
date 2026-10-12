import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import {
  chamberExperience,
  curriculumVitaeUrl,
  orchestralExperience,
} from '@/lib/resume'
import { siteUrl } from '@/lib/siteUrl'

export const metadata = {
  alternates: { canonical: '/' },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Olivia Hunt',
  url: siteUrl,
  jobTitle: 'Cellist and cello teacher',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Vanderbilt University' },
    { '@type': 'CollegeOrUniversity', name: 'Indiana University' },
  ],
  sameAs: ['https://www.linkedin.com/in/oliviahuntcello/'],
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400"
      />
    </svg>
  )
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.75 10.25 10.25 5.75m0 0H6.25m4 0v4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
    </Link>
  )
}

function RoleDates({ start, end }) {
  if (start === end) {
    return <time dateTime={String(start)}>{start}</time>
  }

  let endLabel = end ?? 'Present'

  return (
    <span aria-label={`${start} until ${endLabel}`}>
      <time dateTime={String(start)}>{start}</time>{' '}
      <span aria-hidden="true">—</span>{' '}
      {end ? <time dateTime={String(end)}>{end}</time> : endLabel}
    </span>
  )
}

function Role({ role }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5">
        <Image src={role.logo} alt="" sizes="1.75rem" className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-500">
          <RoleDates start={role.start} end={role.end} />
        </dd>
      </dl>
    </li>
  )
}

function AboutPreview() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
        About Olivia
      </h2>
      <div className="mt-6 space-y-7 text-base text-zinc-600">
        <p className="leading-8">
          Cellist Olivia Hunt began her musical journey at age 9 in Atlanta. She
          went on to earn her Bachelor&apos;s at Vanderbilt University&apos;s
          Blair School of Music under Dr. Felix Wang. During her undergraduate
          studies, she performed with the Eschaton New Music Ensemble, Nashville
          Sinfonietta, and at the Festival d&apos;Aix en Provence. After
          graduating, she continued her studies at Indiana University with
          cellist Eric Kim, obtaining her Master&apos;s and Performer&apos;s
          Diploma.{' '}
        </p>
        <p className="leading-8">
          Hunt has performed at renowned festivals worldwide, including the
          Aspen Music Festival, Green Mountain Chamber Music Festival,
          Brancaleoni International Music Festival, and National Music Festival.
          She is currently the Assistant Principal Cellist of the Billings
          Symphony and a substitute…{' '}
          <Link
            href="/about"
            className="inline-block py-1 font-medium text-green-700 underline-offset-4 hover:underline"
          >
            Read more about Olivia
          </Link>
        </p>
      </div>
    </div>
  )
}

function ExperienceList({ title, roles }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <BriefcaseIcon className="h-6 w-6" />
        <span className="ml-3">{title}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {roles.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
      <CurriculumVitaeButton />
    </div>
  )
}

function CurriculumVitaeButton() {
  return (
    <Button
      href={curriculumVitaeUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      className="group mt-6 w-full"
    >
      View curriculum vitae
      <ArrowUpRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600" />
    </Button>
  )
}

const photos = [
  { image: image2, rotation: 'rotate-2' },
  { image: image3, rotation: '-rotate-2' },
  { image: image4, rotation: 'rotate-2' },
  { image: image5, rotation: 'rotate-2' },
]

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map(({ image, rotation }, index) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl',
              rotation,
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              priority={index < 2}
              className="absolute inset-0 h-full w-full rounded-xl border-2 border-black object-cover sm:rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Musician, teacher, collaborator
          </h1>
          <p className="mt-6 text-base text-zinc-600">
            Cellist Olivia Hunt offers private lessons and performances
            throughout the Los Angeles area.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/oliviahuntcello/"
              aria-label="Connect on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto:olivia.c.hunt@gmail.com"
              aria-label="Send an email"
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <AboutPreview />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ExperienceList
              title="Orchestral experience"
              roles={orchestralExperience}
            />
            <ExperienceList
              title="Chamber experience"
              roles={chamberExperience}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
