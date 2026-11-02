import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import type { Locale } from '@/i18n'

export function HomeNewsletter({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section
        id="newsletter"
        aria-labelledby="newsletter-heading"
        className="border-y border-mist-200 bg-white py-16 text-mist-950 sm:py-24"
      >
        <Container>
          <div className="flex flex-col gap-8 bg-transparent py-0 sm:flex-row sm:items-center sm:justify-between sm:py-0">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase">Restez informé</p>
              <h2
                id="newsletter-heading"
                className="mt-2 font-display text-3xl tracking-[-0.03em] text-mist-950 sm:text-4xl"
              >
                Recevez des nouvelles du projet.
              </h2>
              <p className="mt-3 text-base/7 text-mist-700">
                L’inscription à l’infolettre n’est pas encore offerte. Écrivez-nous si vous souhaitez être informé de
                l’évolution du projet sur le Mékong.
              </p>
            </div>
            <a
              href="mailto:yvanblanchette@aeriavoyages.com?subject=Nouvelles%20du%20projet%20M%C3%A9kong"
              className="inline-flex w-fit items-center gap-2 bg-mist-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-mist-800"
            >
              Demander des nouvelles <ArrowNarrowRightIcon />
            </a>
          </div>
        </Container>
      </section>
    )
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="border-y border-mist-200 bg-white py-16 text-mist-950 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-8 bg-transparent py-0 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase">Stay informed</p>
            <h2
              id="newsletter-heading"
              className="mt-2 font-display text-3xl tracking-[-0.03em] text-mist-950 sm:text-4xl"
            >
              Get the next journey in your inbox.
            </h2>
            <p className="mt-3 text-base/7 text-mist-700">
              Our newsletter signup is not available yet. Contact us if you would like to hear when the Mekong project
              develops.
            </p>
          </div>
          <a
            href="mailto:yvanblanchette@aeriavoyages.com?subject=Updates%20about%20the%20Mekong%20project"
            className="inline-flex w-fit items-center gap-2 bg-mist-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-mist-800"
          >
            Ask for project updates <ArrowNarrowRightIcon />
          </a>
        </div>
      </Container>
    </section>
  )
}
