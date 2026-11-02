import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/i18n'
import Link from 'next/link'

export function HomeApproach({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section
        id="our-approach"
        aria-labelledby="approach-heading"
        className="border-y border-mist-200 bg-white py-20 text-mist-950 sm:py-28 dark:border-white/15 dark:bg-mist-950 dark:text-white"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="flex items-start gap-3 pt-3 text-xs font-semibold tracking-[0.18em] text-[#977447] uppercase">
              L’approche Humanitas
            </p>
            <h2
              id="approach-heading"
              className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
            >
              Voyager pour créer des liens et contribuer avec soin.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 border-t border-mist-200 pt-10 md:grid-cols-3 md:gap-0 dark:border-white/15">
            <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
              <span className="font-display text-4xl font-light text-[#977447]">01</span>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Aller à la rencontre</h3>
              <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
                Favoriser les échanges authentiques et apprendre auprès des personnes qui connaissent le mieux leur
                milieu.
              </p>
            </article>
            <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
              <span className="font-display text-4xl font-light text-[#977447]">02</span>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Collaborer localement</h3>
              <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
                Tisser des liens avec des organismes crédibles qui agissent directement dans les destinations à l’étude.
              </p>
            </article>
            <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
              <span className="font-display text-4xl font-light text-[#977447]">03</span>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Contribuer avec soin</h3>
              <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
                À l’aide de contributions de solidarité, soutenir des initiatives locales qui améliorent les conditions
                de vie des communautés.
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-mist-200 pt-6 dark:border-white/15">
            <p className="text-sm text-mist-600 dark:text-mist-400">La rencontre. Le soutien local. La transparence.</p>
            <Link
              href={localizedPath(locale, '/about')}
              className="inline-flex items-center gap-3 text-sm font-semibold text-mist-950 underline decoration-mist-300 underline-offset-8 hover:decoration-mist-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-white"
            >
              Découvrir notre engagement <ArrowNarrowRightIcon />
            </Link>
          </div>
        </Container>
      </section>
    )
  return (
    <section
      id="our-approach"
      aria-labelledby="approach-heading"
      className="border-y border-mist-200 bg-white py-20 text-mist-950 sm:py-28 dark:border-white/15 dark:bg-mist-950 dark:text-white"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
          <p className="flex items-start gap-3 pt-3 text-xs font-semibold tracking-[0.18em] text-[#977447] uppercase">
            The Humanitas approach
          </p>
          <h2
            id="approach-heading"
            className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
          >
            Travel that makes room for connection and contribution.
          </h2>
        </div>
        <div className="mt-14 grid gap-10 border-t border-mist-200 pt-10 md:grid-cols-3 md:gap-0 dark:border-white/15">
          <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
            <span className="font-display text-4xl font-light text-[#977447]">01</span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Meet with openness</h3>
            <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
              Make space for genuine encounters, cultural exchange, and learning from the people who know each
              destination best.
            </p>
          </article>
          <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
            <span className="font-display text-4xl font-light text-[#977447]">02</span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Work with local partners</h3>
            <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
              Develop relationships with credible organizations working directly in the places being considered.
            </p>
          </article>
          <article className="border-b border-mist-200 pb-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0 dark:border-white/15">
            <span className="font-display text-4xl font-light text-[#977447]">03</span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-mist-950">Contribute with care</h3>
            <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">
              The program combines a $150 CAD contribution added to the program voyage price with a further $150 CAD
              from ÆRIA Voyages profits, subject to the terms confirmed for each voyage.
            </p>
          </article>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-mist-200 pt-6 dark:border-white/15">
          <p className="text-sm text-mist-600 dark:text-mist-400">Connection. Local support. Transparency.</p>
          <Link
            href={localizedPath(locale, '/about')}
            className="inline-flex items-center gap-3 text-sm font-semibold text-mist-950 underline decoration-mist-300 underline-offset-8 hover:decoration-mist-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-white"
          >
            Discover our commitment <ArrowNarrowRightIcon />
          </Link>
        </div>
      </Container>
    </section>
  )
}
