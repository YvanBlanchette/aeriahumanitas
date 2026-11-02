import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { MekongItinerary } from '@/components/sections/mekong-itinerary'
import { getTripContent, trips } from '@/data/trips'
import { isLocale, locales, localizedPath, type Locale } from '@/i18n'

const retiredTripSlugs = new Set(['cambodia', 'vietnam', 'galapagos'])

const translations = {
  fr: {
    back: 'Retour au projet',
    projectStatus: 'Projet à l’étude',
    availability:
      'Ce projet n’est ni confirmé ni ouvert aux réservations. ÆRIA Voyages gérera séparément toute vente de voyage future.',
    ask: 'Demander des renseignements sur le projet',
    videoTitle: 'Un aperçu du Mékong',
    projectTitle: 'À propos de ce voyage',
    projectDescription: [
      'Croisière fluviale francophone au Vietnam et au Cambodge qui combine exploration, immersion culturelle et activités légères pour une expérience de croisière mémorable à bord du Toum Tiou 2.',
      'Notre charmant navire offre un service personnalisé dans un environnement intime, parfait pour les petits groupes qui recherchent un voyage authentique et dynamique sur le Mékong.',
      "Notre itinéraire comprend une série d'activités telles que le vélo, le kayak, les promenades en sampan, les bateaux à rames/moteurs et les visites à pied, qui permettent de découvrir les trésors cachés du Mékong, notamment les visites de villages traditionnels et l'ascension de l'étonnante colline d'Oudong.",
      "En outre, nous vous emmènerons en bateau à moteur et à rames dans la magnifique forêt de Tra Su, où vous pourrez observer la flore et la faune incroyables de ce magnifique environnement naturel. Découvrez l'équilibre parfait entre l'immersion culturelle et l'aventure légère, tout en profitant du charme authentique de la rivière Mékong.",
      "En mettant l'accent sur le service personnalisé, l'exploration culturelle et une touche d'aventure, notre programme promet d'offrir une expérience de croisière inoubliable et s'accorde parfaitement avec le Toum Tiou 2.",
      'À l’issue de cette croisière active, admirez les magnifiques des temples d’Angkor. Classé au patrimoine mondial de l’UNESCO, ce site archéologique s’étendant sur 400 km2 regroupe des vestiges inestimables, à l’image du sanctuaire de Ta Prohm, prisonnier du lichen et des figuiers étrangleurs,du Bayon et ses énigmatiques sentinelles de pierre aux quatre visages, de la Terrasse des Élephants, théâtre des parades royales, mais aussi et surtout d’AngkorWat, le plus célèbre des temples du site.',
    ],
    elementsTitle: 'Éléments à l’étude',
    statusTitle: "En un clin d'oeil",
    destination: 'Destination',
    timing: 'Période du voyage',
    group: 'Taille du groupe',
    collaborators: 'Partenaires',
  },
  en: {
    back: 'Back to the project',
    projectStatus: 'Project under consideration',
    availability:
      'This project is not confirmed or open for booking. ÆRIA Voyages handles any future travel sales separately from ÆRIA Humanitas.',
    ask: 'Ask for project information',
    videoTitle: 'A glimpse of the Mekong',
    projectTitle: 'About this journey',
    projectDescription: [
      'The current idea is a French-language river cruise through Vietnam and Cambodia, including a cultural itinerary around the temples of Angkor.',
      'It is an initial concept only; the route, dates, vessel, travel provider, price, and community initiatives remain subject to study and confirmation.',
    ],
    elementsTitle: 'Elements under consideration',
    statusTitle: 'Current project status',
    destination: 'Destination',
    timing: 'Timing',
    group: 'Group target',
    collaborators: 'Potential collaborators',
    disclaimer: 'These are potential collaborators only. No partnership or commercial agreement is confirmed.',
    contributionTitle: 'How the solidarity contribution works',
    contribution:
      'Every Humanitas-program voyage includes a $150 CAD contribution added automatically to each passenger’s total price. ÆRIA Voyages adds $150 CAD from its profits, for a total contribution of $300 CAD per eligible passenger. A separate voyage sold outside the program does not include this contribution. Travel dates, recipient organizations and project-specific terms are confirmed before bookings open.',
  },
} as const

export function generateStaticParams() {
  return locales.flatMap((locale) => trips.map(({ slug }) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params
  if (!isLocale(localeParam)) notFound()
  const trip = trips.find((item) => item.slug === slug)
  if (!trip) notFound()
  const path = `/trips/${slug}`
  return {
    title: getTripContent(trip, localeParam).title,
    alternates: {
      canonical: localizedPath(localeParam, path),
      languages: { 'fr-CA': `/fr${path}`, 'en-CA': `/en${path}` },
    },
  }
}

export default async function TripDetailsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: localeParam, slug } = await params
  if (!isLocale(localeParam)) notFound()
  const locale: Locale = localeParam

  if (retiredTripSlugs.has(slug)) redirect(localizedPath(locale, '/trips/mekong-2028'))

  const tripData = trips.find((item) => item.slug === slug)
  if (!tripData) notFound()
  const trip = getTripContent(tripData, locale)
  const copy = translations[locale]

  return (
    <>
      <section className="relative overflow-hidden bg-[#f4f2ed] py-8 sm:py-12 lg:py-16 dark:bg-mist-900">
        <Container>
          <Link
            href={localizedPath(locale, '/#upcoming-trips')}
            className="inline-flex items-center gap-2 text-sm font-medium text-mist-600 transition hover:text-mist-950 dark:text-mist-300 dark:hover:text-white"
          >
            <ArrowNarrowRightIcon className="rotate-180" /> {copy.back}
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col items-start">
              <span className="inline-flex items-center gap-3 border-b border-mist-950/20 pb-3 text-[10px] font-semibold tracking-[0.2em] text-mist-700 uppercase dark:border-white/20 dark:text-mist-200">
                <span className="h-px w-8 bg-[#977447]" aria-hidden="true" />
                {copy.projectStatus}
              </span>
              <h1 className="mt-7 max-w-2xl font-display text-6xl leading-[0.98] tracking-[-0.055em] text-balance text-mist-950 sm:text-7xl xl:text-8xl dark:text-white">
                {trip.title}
              </h1>
              <p className="mt-5 max-w-xl text-base/7 text-mist-700 sm:text-lg/8 dark:text-mist-300">
                {locale === 'fr'
                  ? 'Un projet de croisière francophone, du Vietnam aux temples d’Angkor. Onze jours de découvertes au fil du Mékong, en petit groupe.'
                  : 'A French-language cruise project from Vietnam to the temples of Angkor. Eleven days of discovery along the Mekong, in a small group.'}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={localizedPath(locale, '/#contact')}
                  className="inline-flex max-w-full items-center justify-center gap-4 bg-mist-950 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-mist-700 focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
                >
                  {copy.ask} <ArrowNarrowRightIcon />
                </Link>
              </div>
            </div>
            <figure className="relative m-0 overflow-hidden bg-mist-800">
              <Image
                src={trip.image}
                alt={trip.imageAlt}
                width={1200}
                height={1400}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/5] max-h-[640px] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                <span className="text-xs font-medium tracking-[0.2em] uppercase">{trip.destination}</span>
                <span className="font-display text-4xl font-light tracking-tight">2028</span>
              </figcaption>
            </figure>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-mist-950/15 py-6 sm:grid-cols-4 dark:border-white/15">
            {[
              [copy.destination, trip.destination],
              [
                locale === 'fr' ? 'Parcours de référence' : 'Reference itinerary',
                locale === 'fr' ? '11 jours' : '11 days',
              ],
              [copy.timing, trip.period],
              [copy.group, trip.groupSize],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] font-semibold tracking-[0.14em] text-mist-500 uppercase dark:text-mist-400">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-mist-950 dark:text-white">{value}</dd>
              </div>
            ))}
          </dl>
          <p role="note" className="mt-10 border-l-2 border-[#977447] pl-5 text-xs/6 text-mist-600 dark:text-mist-300">
            {copy.availability}
          </p>
        </Container>
      </section>

      <nav
        aria-label={locale === 'fr' ? 'Sur cette page' : 'On this page'}
        className="border-b border-mist-200 bg-white dark:border-white/15 dark:bg-mist-950"
      >
        <Container className="flex flex-wrap gap-x-8 gap-y-4 py-5 text-xs font-semibold tracking-wide text-mist-700 dark:text-mist-200">
          {[
            ['#itinerary', locale === 'fr' ? '01 / Le parcours' : '01 / The route'],
            ['#inclusions', locale === 'fr' ? '02 / Les prestations' : '02 / Services'],
            ['#project-details', locale === 'fr' ? '03 / Le projet Humanitas' : '03 / The Humanitas project'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {label}
            </a>
          ))}
        </Container>
      </nav>
      {trip.slug === 'mekong-2028' && <MekongItinerary locale={locale} />}

      <section className="bg-mist-950 py-12 text-white sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#c8ad86] uppercase">
              Vietnam / {locale === 'fr' ? 'Cambodge' : 'Cambodia'}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              {copy.videoTitle}
            </h2>
            <p className="mt-5 text-sm/7 text-mist-300">
              {locale === 'fr'
                ? 'Prendre le temps. Suivre le fleuve. Découvrir autrement.'
                : 'Slow down. Follow the river. Discover a different perspective.'}
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/fRCkPL6JZzQ?rel=0"
              title={copy.videoTitle}
              className="absolute inset-0 size-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <section id="project-details" className="scroll-mt-24 bg-mist-100 py-16 sm:py-24 dark:bg-mist-900">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
          <article>
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
              {trip.destination}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-mist-950 sm:text-4xl dark:text-white">
              {locale === 'fr' ? 'Où en est le projet Humanitas ?' : 'Where does the Humanitas project stand?'}
            </h2>
            <p className="mt-5 max-w-2xl text-base/7 text-mist-700 dark:text-mist-300">{copy.availability}</p>
            <h3 className="mt-10 font-display text-2xl tracking-tight text-mist-950 dark:text-white">
              {copy.elementsTitle}
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-base/7 text-mist-700 dark:text-mist-300">
              {trip.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center bg-mist-950/5 text-sm text-mist-600 dark:bg-white/10 dark:text-mist-300"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>

          <aside className="h-fit border-t-2 border-[#977447] bg-white p-6 sm:p-8 lg:sticky lg:top-28 dark:bg-mist-950">
            <span className="inline-flex text-[10px] font-semibold tracking-[0.18em] text-mist-600 uppercase dark:text-mist-300">
              {copy.projectStatus}
            </span>
            <h2 className="mt-4 font-display text-2xl tracking-tight text-mist-950 dark:text-white">
              {locale === 'fr' ? 'Collaborations envisagées' : 'Potential collaborations'}
            </h2>
            <h3 className="mt-5 text-sm font-semibold text-mist-950 dark:text-white">
              {locale === 'fr'
                ? 'Aucun partenariat confirmé à ce stade.'
                : 'No partnership is confirmed at this stage.'}
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm/6 text-mist-700 dark:text-mist-300">
              {trip.potentialPartners.map((partner) => (
                <li key={partner} className="flex gap-2">
                  <span aria-hidden="true" className="text-mist-400">
                    •
                  </span>
                  {partner}
                </li>
              ))}
            </ul>
            <Link
              href={localizedPath(locale, '/#contact')}
              className="mt-8 inline-flex items-center gap-3 border-b border-mist-950 pb-2 text-sm font-semibold text-mist-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-white dark:text-white"
            >
              {copy.ask}
              <ArrowNarrowRightIcon />
            </Link>
          </aside>
        </Container>
      </section>
    </>
  )
}
