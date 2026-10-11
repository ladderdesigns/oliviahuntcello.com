import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Message received',
  description: 'Thanks for reaching out. Olivia will be in touch shortly.',
  robots: { index: false },
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank you for your message"
      intro="Your message has been received. Olivia will get back to you as soon as possible."
    >
      <Button href="/" variant="secondary">
        Back to home
      </Button>
    </SimpleLayout>
  )
}
