import Image from 'next/image'

import { Container } from '@/components/Container'
import { Field, InquiryForm } from '@/components/InquiryForm'
import bookingInfoPortraitImage from '@/images/booking-info-portrait-image.jpeg'

export const metadata = {
  title: 'Booking',
  description:
    'Book Olivia Hunt, a professional cellist, for your private events, weddings, corporate functions, and more. Experience a versatile and professional performance tailored to your special occasion.',
}

export default function Booking() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={bookingInfoPortraitImage}
              alt="Olivia Hunt smiling outdoors with her cello"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="-rotate-2 rounded-2xl border-2 border-black bg-zinc-100 object-cover dark:border-zinc-700 dark:bg-zinc-800"
              priority
            />
          </div>
        </div>

        <div className="lg:order-last lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Information about private bookings
          </h1>

          <section className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Private bookings are available for a variety of events including
              weddings, corporate functions, private parties, and more. With a
              repertoire that spans classical, contemporary, and popular music,
              Olivia provides a versatile and professional performance tailored
              to the occasion.
            </p>
          </section>

          <section className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
              Services offered
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
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

          <section
            id="inquire"
            className="mt-12 max-w-xl scroll-mt-24 border-t border-zinc-100 pt-10 lg:max-w-lg dark:border-zinc-700/40"
          >
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
              Request a quote
            </h2>
            <InquiryForm name="private-booking-inquiry" className="mt-8">
              <Field
                label="First name"
                name="first-name"
                autoComplete="given-name"
              />
              <Field
                label="Last name"
                name="last-name"
                autoComplete="family-name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                className="sm:col-span-2"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                optional
                className="sm:col-span-2"
              />
              <Field
                label="Please describe the event you are booking for, including the date, time, location, and any specific musical requests."
                name="message"
                multiline
                className="sm:col-span-2"
              />
            </InquiryForm>
          </section>
        </div>
      </div>
    </Container>
  )
}
