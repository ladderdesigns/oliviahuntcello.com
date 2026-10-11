import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600">
          Sorry, the page you are looking for could not be found.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
