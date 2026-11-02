import { Container } from '@/components/elements/container'
import { DestinationMap } from '@/components/sections/destination-map'
import type { Locale } from '@/i18n'

export function HomeDestinations({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section
        id="destinations"
        aria-labelledby="destinations-heading"
        className="bg-[#f4f2ed] py-20 sm:py-28 dark:bg-mist-950"
      >
        <Container>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
              Nos destinations
            </p>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <h2
                id="destinations-heading"
                className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
              >
                Des voyages façonnés par les lieux et les personnes rencontrées.
              </h2>
              <p className="max-w-xl text-lg/8 text-mist-700 lg:justify-self-end dark:text-mist-300">
                Ces destinations sont à l’étude; il ne s’agit pas de voyages confirmés ni de programmes déjà établis.
                Toute initiative future devra être pensée avec les communautés locales et présentée clairement avant son
                lancement.
              </p>
            </div>
          </div>
          <DestinationMap locale={locale} />
        </Container>
      </section>
    )
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="bg-[#f4f2ed] py-20 sm:py-28 dark:bg-mist-950"
    >
      <Container>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            Our destinations
          </p>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2
              id="destinations-heading"
              className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
            >
              Journeys shaped by the places and people we meet.
            </h2>
            <p className="max-w-xl text-lg/8 text-mist-700 lg:justify-self-end dark:text-mist-300">
              These are destinations we are exploring, not a list of confirmed trips or established programs. Any future
              initiative should be shaped with local perspectives and clearly identified before launch.
            </p>
          </div>
        </div>

        <DestinationMap locale={locale} />
      </Container>
    </section>
  )
}
