'use client'

import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'

import type { Locale } from '@/i18n'

const contactEmail = 'yvanblanchette@aeriavoyages.com'

export function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const copy =
    locale === 'fr'
      ? {
          unconfigured:
            'Le formulaire de contact n’est pas encore configuré. Vous pouvez nous écrire directement à l’adresse ci-dessous.',
          sent: 'Merci de nous avoir écrit. Votre message a été envoyé.',
          failed: 'Votre message n’a pas pu être envoyé. Veuillez réessayer ou nous écrire directement.',
          name: 'Votre nom',
          email: 'Adresse courriel',
          subject: 'Objet',
          message: 'Message',
          sending: 'Envoi en cours…',
          send: 'Envoyer le message',
          orEmail: 'Ou écrivez-nous à',
        }
      : {
          unconfigured: 'The contact form is not configured yet. Please email us directly using the address below.',
          sent: 'Thanks for reaching out. Your message has been sent.',
          failed: 'We could not send your message. Please try again or email us directly.',
          name: 'Your name',
          email: 'Email address',
          subject: 'Subject',
          message: 'Message',
          sending: 'Sending…',
          send: 'Send message',
          orEmail: 'Or email us at',
        }
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: copy.unconfigured,
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSending(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        },
        { publicKey },
      )
      form.reset()
      setStatus({ type: 'success', message: copy.sent })
    } catch (error) {
      console.error('EmailJS contact form submission failed:', error)
      setStatus({
        type: 'error',
        message: copy.failed,
      })
    } finally {
      setIsSending(false)
    }
  }

  const fieldClassName =
    'w-full rounded-xl border border-mist-950/15 bg-white px-4 py-3 text-sm text-mist-950 outline-none transition placeholder:text-mist-500 focus:border-mist-700 focus:ring-2 focus:ring-mist-700/15 dark:border-white/15 dark:bg-mist-950 dark:text-white dark:placeholder:text-mist-500 dark:focus:border-mist-300'
  const labelClassName = 'flex flex-col gap-2 text-sm font-medium text-mist-800 dark:text-mist-200'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClassName}>
          {copy.name}
          <input className={fieldClassName} name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label className={labelClassName}>
          {copy.email}
          <input className={fieldClassName} name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label className={labelClassName}>
        {copy.subject}
        <input className={fieldClassName} name="subject" type="text" maxLength={150} required />
      </label>
      <label className={labelClassName}>
        {copy.message}
        <textarea className={`${fieldClassName} min-h-36 resize-y`} name="message" rows={5} maxLength={5000} required />
      </label>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-mist-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-mist-800 disabled:cursor-wait disabled:opacity-60 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
        >
          {isSending ? copy.sending : copy.send}
        </button>
        <p className="text-sm text-mist-600 dark:text-mist-400">
          {copy.orEmail}{' '}
          <a
            className="font-medium text-mist-950 underline underline-offset-4 dark:text-white"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
        </p>
      </div>
      {status && (
        <p
          role={status.type === 'error' ? 'alert' : 'status'}
          className={`text-sm ${status.type === 'error' ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
