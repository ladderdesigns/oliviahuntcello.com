import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LinkedInIcon, MailIcon } from '@/components/SocialIcons'

import logoBillingsSymphonyOrchestra from '@/images/logos/billings-symphony-orchestra.png'
import logoTerreHaute from '@/images/logos/thso.png'
import logoEvansvillePhilharmonic from '@/images/logos/evansville-philharmonic.png'
import logoVanderbilt from '@/images/logos/vanderbilt.png'
import logoSinfonietta from '@/images/logos/nashville-sinfonietta.png'
import logoOwensboro from '@/images/logos/owensboro.png'
import logoNationalMusicFestival from '@/images/logos/national-music-festival.png'

import logoBloomingtonSeal from '@/images/logos/bloomington-seal.png'
import logoSkylarkTrio from '@/images/logos/skylark-trio.png'
import logoFestivalProvence from '@/images/logos/festival-provence.png'
import logoHummingUnderMyFeet from '@/images/logos/humming-under-my-feet.png'

import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

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
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
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
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function AboutPreview() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        About Olivia
      </h2>
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
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
          Symphony and a substitute...{' '}
          <Link
            href="/about"
            className="cursor-pointer text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500"
          >
            Read more
          </Link>
        </p>
      </div>
    </div>
  )
}

function Resume() {
  let orchestralResume = [
    {
      company: 'Billings Symphony Orchestra',
      title: 'Assistant principal cello',
      logo: logoBillingsSymphonyOrchestra,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Terre Haute Symphony Orchestra',
      title: 'Section cellist',
      logo: logoTerreHaute,
      start: '2021',
      end: '2023',
    },
    {
      company: 'Evansville Philharmonic',
      title: 'Substitute cellist',
      logo: logoEvansvillePhilharmonic,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Owensboro Symphony Orchestra',
      title: 'Substitute cellist',
      logo: logoOwensboro,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Vanderbilt Symphony Orchestra',
      title: 'Principal cellist',
      logo: logoVanderbilt,
      start: '2019',
      end: '2019',
    },
    {
      company: 'Nashville Sinfonietta',
      title: 'Principal cellist',
      logo: logoSinfonietta,
      start: '2019',
      end: '2019',
    },
    {
      company: 'National Music Festival Symphony Orchestra',
      title: 'Principal cellist',
      logo: logoNationalMusicFestival,
      start: '2019',
      end: '2019',
    },
  ]

  let chamberResume = [
    {
      company: 'Performer with Bloomington folk artist Carrie Newcomer',
      title: 'Principal cello',
      logo: logoBloomingtonSeal,
      start: '2022',
      end: '2022',
    },
    {
      company: 'The Skylark Trio',
      title: 'Founding cellist',
      logo: logoSkylarkTrio,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Vanderbilt University Chorale St. Matthew’s Passion tour',
      title: 'Continuo cellist',
      logo: logoVanderbilt,
      start: '2018',
      end: '2018',
    },
    {
      company: 'Festival d’Aix en Provence',
      title: 'String quartet performer',
      logo: logoFestivalProvence,
      start: '2017',
      end: '2017',
    },
    {
      company: '“A Humming Under My Feet”',
      title: 'Annual performer',
      logo: logoHummingUnderMyFeet,
      start: '2017',
      end: '2019',
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="ml-3">Orchestral experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {orchestralResume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <CurriculumVitaeButton />
      </div>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="ml-3">Chamber experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {chamberResume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <CurriculumVitaeButton />
      </div>
    </>
  )
}

const curriculumVitaeUrl =
  'https://drive.google.com/file/d/1CSoTuah2tiZ_uQurmRGDjNkMAV4meBD8/view?usp=drive_link'

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
      <ArrowUpRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full rounded-xl border-2 border-black object-cover sm:rounded-2xl dark:border-zinc-700"
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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Musician, teacher, collaborator
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
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
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
