import { Container } from '@/components/elements/container'
import { ContactForm } from '@/components/sections/contact-form'
import type { Locale } from '@/i18n'
import Image from 'next/image'

export function HomeContact({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section id="contact" aria-labelledby="contact-heading" className="bg-mist-100 dark:bg-mist-900">
        <div className="grid items-stretch md:grid-cols-[60%_40%] lg:min-h-[40rem]">
          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20">
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex flex-col items-start gap-5">
                <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
                  Nous joindre
                </p>
                <h2
                  id="contact-heading"
                  className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
                >
                  Entamons la conversation.
                </h2>
                <p className="max-w-md text-lg/8 text-mist-700 dark:text-mist-300">
                  Vous avez des questions sur un voyage, nos partenaires locaux ou la façon dont un séjour peut
                  contribuer? Écrivez-nous, il nous fera plaisir de vous lire.
                </p>
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden bg-mist-200 dark:bg-mist-950" aria-hidden="true">
            <Image
              src="/img/photos/central-america.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </section>
    )
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-mist-100 py-20 sm:py-28 dark:bg-mist-900">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
          >
            Let’s start a conversation.
          </h2>
          <p className="max-w-md text-lg/8 text-mist-700 dark:text-mist-300">
            Curious about a voyage, our local partners, or how each journey can make a difference? Send us a message and
            we’ll be glad to hear from you.
          </p>
        </div>
        <ContactForm locale={locale} />
      </Container>
    </section>
  )
}
