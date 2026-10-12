'use client'

import { useId, useState } from 'react'
import { useRouter } from 'next/navigation'

// Netlify only captures submissions POSTed to a static file that declares the
// form, so every form rendered here must also be declared in this file.
const NETLIFY_FORMS_PATH = '/__forms.html'

export function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  optional = false,
  multiline = false,
  rows = 5,
  className,
}) {
  let id = useId()
  let hintId = `${id}-hint`
  let inputClassName =
    'block w-full rounded-md border-0 bg-white px-3.5 py-2 text-base text-zinc-900 shadow-xs ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6'
  let Component = multiline ? 'textarea' : 'input'

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4 text-sm leading-6">
        <label htmlFor={id} className="block font-semibold text-zinc-700">
          {label}
        </label>
        {optional && (
          <span id={hintId} className="text-zinc-500">
            Optional
          </span>
        )}
      </div>
      <div className="mt-2.5">
        <Component
          id={id}
          name={name}
          type={multiline ? undefined : type}
          rows={multiline ? rows : undefined}
          autoComplete={autoComplete}
          required={!optional}
          aria-describedby={optional ? hintId : undefined}
          className={inputClassName}
        />
      </div>
    </div>
  )
}

export function InquiryForm({ name, className, children }) {
  let router = useRouter()
  let [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    let body = new URLSearchParams(new FormData(event.currentTarget))

    if (process.env.NODE_ENV === 'development') {
      console.info(`[${name}] submission`, Object.fromEntries(body))
      router.push('/thank-you')
      return
    }

    try {
      let response = await fetch(NETLIFY_FORMS_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed with ${response.status}`)
      }

      router.push('/thank-you')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <form
      name={name}
      method="POST"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value={name} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out if you&apos;re human:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {children}
      </div>
      {status === 'error' && (
        <p
          role="alert"
          className="mt-6 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Something went wrong sending your message. Please try again, or email{' '}
          <a href="mailto:olivia.c.hunt@gmail.com" className="underline">
            olivia.c.hunt@gmail.com
          </a>{' '}
          directly.
        </p>
      )}
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-md bg-zinc-800 px-3.5 py-2.5 text-center text-sm font-semibold text-zinc-100 shadow-xs transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
