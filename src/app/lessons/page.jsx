import Image from 'next/image'

import { Container } from '@/components/Container'
import { Field, InquiryForm } from '@/components/InquiryForm'
import lessonInfoPortraitImage from '@/images/lesson-info-portrait.jpg'

export const metadata = {
  alternates: { canonical: '/lessons' },
  title: 'Lessons',
  description:
    'Private cello lessons are offered to cellists of any age or skill level who are interested in establishing a strong technical foundation and developing their personal artistry. The approach is individualistic and flexible, based on the needs and interests of the student.',
}

const testimonials = [
  {
    author: 'Joseph I.',
    quote:
      'Absolutely wonderful! Olivia is an incredibly warm and nurturing teacher that has realistic goals for students while also being patient and encouraging. We only worked together briefly but it was such a wonderful experience to strategize problem areas together and slowly figure them out. Could not recommend highly enough!',
  },
  {
    author: 'Maggie M.',
    quote:
      'Olivia is amazing! I started taking lessons with her after taking a decade long break from cello, and I was really nervous about jumping back into it. Olivia provided such a calm and generative environment to learn, practice, and gain confidence. The lessons felt deeply collaborative and were really personalized to my individual needs. Olivia is a kind, thoughtful, and fun teacher, and I would definitely recommend her!',
  },
]

function Testimonials() {
  return (
    <div className="space-y-8">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.author}>
          <blockquote className="leading-8">
            <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-4">
            <div className="font-semibold text-zinc-800">
              {testimonial.author}
            </div>
            <div className="mt-1">Student</div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function Lessons() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={lessonInfoPortraitImage}
              alt="Olivia Hunt standing beneath a stone archway holding her cello"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rotate-2 rounded-2xl border-2 border-black bg-zinc-100 object-cover"
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Information about private lessons
          </h1>

          <section className="mt-6 space-y-7 text-base text-zinc-600">
            <p>
              Private cello lessons are offered to cellists of any age or skill
              level who are interested in establishing a strong technical
              foundation and developing their personal artistry. The approach is
              individualistic and flexible, based on the needs and interests of
              the student.
            </p>
          </section>

          <section className="mt-10 space-y-7 text-base text-zinc-600">
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl">
              Topics focused on
            </h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Instrument tuning/maintenance</li>
              <li>Developing a warm-up routine</li>
              <li>Practice techniques</li>
              <li>Managing performance anxiety</li>
              <li>Musical interpretation</li>
            </ol>
            <p>
              Trial lessons are available and recurring lessons are offered in
              30-minute or hour-long sessions. Please send a message below for a
              follow-up.
            </p>
          </section>

          <section className="mt-10 space-y-7 text-base text-zinc-600">
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl">
              Testimonials
            </h2>
            <Testimonials />
          </section>

          <section
            id="inquire"
            className="mt-12 max-w-xl scroll-mt-24 border-t border-zinc-100 pt-10 lg:max-w-lg"
          >
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl">
              Inquire about lessons
            </h2>
            <InquiryForm name="private-lesson-inquiry" className="mt-8">
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
                label="Please describe what you are looking for in a lesson, including your current level of playing and any other relevant information."
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
