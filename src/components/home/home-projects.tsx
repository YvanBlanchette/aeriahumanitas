import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { getTripContent, trips } from '@/data/trips'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/i18n'
import Image from 'next/image'
import Link from 'next/link'

export function HomeProjects({ locale }: { locale: Locale }) {
  const project = getTripContent(trips[0], locale)
  if (locale === 'fr')
    return (
      <section
        id="upcoming-trips"
        aria-labelledby="upcoming-trips-heading"
        className="bg-white py-20 sm:py-28 dark:bg-mist-900"
      >
        <Container>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
              Premier projet à l’étude
            </p>
            <h2
              id="upcoming-trips-heading"
              className="max-w-3xl font-display text-4xl tracking-[-0.04em] text-mist-950 sm:text-5xl dark:text-white"
            >
              Le Mékong, un premier horizon.
            </h2>
          </div>
          <div className="mt-10 grid gap-8">
            <Link
              href={localizedPath(locale, `/trips/${project.slug}`)}
              className="group grid overflow-hidden border-y border-mist-950/15 bg-[#f4f2ed] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-[1.15fr_1fr] dark:border-white/15 dark:bg-mist-950"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist-200 lg:aspect-auto lg:min-h-[30rem] dark:bg-mist-800">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold text-mist-950 backdrop-blur-sm dark:bg-mist-950/80 dark:text-white">
                  {project.statusLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-10 lg:p-14">
                <p className="text-sm font-medium text-mist-600 dark:text-mist-400">{project.destination}</p>
                <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] text-mist-950 sm:text-5xl dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-5 text-base/7 text-mist-700 dark:text-mist-300">{project.summary}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-mist-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-mist-950 dark:text-white">{project.period}</p>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-mist-950 transition-transform duration-300 group-hover:-translate-x-2 dark:text-white">
                    Détails du projet <ArrowNarrowRightIcon />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    )
  return (
    <section
      id="upcoming-trips"
      aria-labelledby="upcoming-trips-heading"
      className="bg-white py-20 sm:py-28 dark:bg-mist-900"
    >
      <Container>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            First project under consideration
          </p>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2
              id="upcoming-trips-heading"
              className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
            >
              The Mekong autrement — travel with heart.
            </h2>
            <p className="max-w-xl text-lg/8 text-mist-700 lg:justify-self-end dark:text-mist-300">
              A French-language river cruise through Vietnam and Cambodia is being explored for 2028. This is a project
              in preparation, not a confirmed or bookable trip.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8">
          {trips.map((trip) => (
            <Link
              key={trip.slug}
              href={localizedPath(locale, `/trips/${trip.slug}`)}
              className="group grid overflow-hidden border-y border-mist-950/15 bg-[#f4f2ed] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-[1.15fr_1fr] dark:border-white/15 dark:bg-mist-950"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist-200 lg:aspect-auto lg:min-h-[30rem] dark:bg-mist-800">
                <Image
                  src={trip.image}
                  alt={trip.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold text-mist-950 backdrop-blur-sm dark:bg-mist-950/80 dark:text-white">
                  {trip.statusLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-10 lg:p-14">
                <p className="text-sm font-medium text-mist-600 dark:text-mist-400">{trip.destination}</p>
                <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] text-mist-950 sm:text-5xl dark:text-white">
                  {trip.title}
                </h3>
                <p className="mt-5 text-base/7 text-mist-700 dark:text-mist-300">{trip.summary}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-mist-950/10 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-mist-950 dark:text-white">{trip.period}</p>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-mist-950 transition-transform duration-300 group-hover:-translate-x-2 dark:text-white">
                    Project details <ArrowNarrowRightIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
