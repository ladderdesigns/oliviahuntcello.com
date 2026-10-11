import { Field, InquiryForm } from '@/components/InquiryForm'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with cellist Olivia Hunt. Fill out the form and Olivia will get back to you as soon as possible.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Contact"
      intro="Please fill out the form below and Olivia will get back to you as soon as possible."
    >
      <InquiryForm name="general-contact-inquiry" className="max-w-xl">
        <Field label="First name" name="first-name" autoComplete="given-name" />
        <Field label="Last name" name="last-name" autoComplete="family-name" />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          className="sm:col-span-2"
        />
        <Field
          label="Message"
          name="message"
          multiline
          className="sm:col-span-2"
        />
      </InquiryForm>
    </SimpleLayout>
  )
}
