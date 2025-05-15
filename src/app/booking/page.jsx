import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import bookingInfoPortraitImage from '@/images/booking-info-portrait-image.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Booking',
  description:
    'Book Olivia Hunt, a professional cellist, for your private events, weddings, corporate functions, and more. Experience a versatile and professional performance tailored to your special occasion.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={bookingInfoPortraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover border-2 border-black aspect-rectangle -rotate-2 rounded-2xl bg-zinc-100 dark:border-white dark:border-zinc-700"
            />
          </div>
        </div>

        <div className="lg:order-last lg:row-span-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Information about private bookings
            </h1>

            <section className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Private bookings are available for a variety of events including
                weddings, corporate functions, private parties, and more. With a
                repertoire that spans classical, contemporary, and popular
                music, Olivia provides a versatile and professional performance
                tailored to the occasion.
              </p>
            </section>

            <section className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
                Services offered
              </h2>
              <ol className="pl-5 space-y-2 list-decimal">
                <li>Wedding ceremonies and receptions</li>
                <li>Corporate events and functions</li>
                <li>Private parties and gatherings</li>
                <li>Music for special occasions and anniversaries</li>
                <li>Customized performances upon request</li>
              </ol>
              <p>
                Each performance is tailored to meet the specific needs and
                preferences of the client. Please send a message below for a
                personalized quote and to discuss your event details.
              </p>
            </section>
          </div>

          <div>
            <div>
              <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg ">
                <form
                  action={process.env.NODE_ENV === 'development' ? '/api/submit' : '/thank-you.html'}
                  method="POST"
                  className="mt-8 border-t border-gray-900/10 dark:border-zinc-400"
                  name="private-booking-inquiry"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="private-booking-inquiry"
                  />

                  <div className="grid grid-cols-1 mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <p class="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:ring-white dark:ring-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between text-sm leading-6">
                        <label
                          htmlFor="phone"
                          className="block font-semibold text-zinc-600 dark:text-zinc-400"
                        >
                          Phone
                        </label>
                        <p
                          id="phone-description"
                          className="text-zinc-400 dark:text-zinc-500"
                        >
                          Optional
                        </p>
                      </div>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          aria-describedby="phone-description"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between text-sm leading-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                        >
                          Please describe the event you are booking for, be sure
                          to include the date, time, location, and any specific
                          musical requests.
                        </label>
                      </div>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          aria-describedby="message-description"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-10">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 dark:bg-zinc-700 "
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
