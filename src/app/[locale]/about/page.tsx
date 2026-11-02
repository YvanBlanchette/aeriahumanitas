import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { isLocale, localizedPath, type Locale } from '@/i18n'

const translations = {
  fr: {
    title: 'À propos d’ÆRIA Humanitas',
    headline: 'Voyager, rencontrer et agir ensemble.',
    intro:
      'ÆRIA Humanitas a pour mission de contribuer durablement à l’amélioration des conditions de vie de communautés défavorisées, principalement dans les pays en développement. Notre approche consiste à écouter, à travailler avec des organismes locaux crédibles et à soutenir des priorités définies avec les communautés.',
    areasTitle: 'Quatre domaines d’action complémentaires',
    areasIntro:
      'Notre programme s’articule autour de quatre domaines d’action. Pour chaque voyage, les initiatives soutenues et les organismes bénéficiaires sont définis selon les priorités locales et confirmés avant la mise en vente.',
    areas: [
      [
        'Lutter contre la pauvreté',
        'Contribuer à améliorer l’accès à l’eau potable, à la nourriture, aux biens essentiels et aux soins de santé de base.',
      ],
      [
        'Soutenir l’éducation',
        'Appuyer la scolarisation, les ressources pédagogiques, les frais de scolarité et la formation professionnelle.',
      ],
      [
        'Favoriser l’autonomie économique',
        'Soutenir des initiatives conçues localement qui développent les compétences et l’accès à des moyens de subsistance.',
      ],
      [
        'Développer la compréhension',
        'Favoriser au Québec l’apprentissage sur la pauvreté mondiale et le développement international.',
      ],
    ],
    purposeTitle: 'Une mission humanitaire distincte',
    purpose: [
      'ÆRIA Voyages est une entreprise commerciale de voyage. ÆRIA Humanitas porte un programme de voyages solidaires à vocation non lucrative. L’entreprise de voyage vend les séjours; Humanitas se consacre à sa mission humanitaire et au mécanisme de contribution adopté pour le programme.',
      'Un voyage hors programme Humanitas pourrait être offert par ÆRIA Voyages sans contribution au programme. Pour un voyage vendu dans le cadre du programme Humanitas, la contribution de 150 $ CA par passager est ajoutée automatiquement au prix total.',
    ],
    statusTitle: 'Le programme et son cadre',
    status: [
      'ÆRIA Humanitas prépare sa constitution en organisme sans but lucratif au Québec.',
      'Aucun statut d’organisme de bienfaisance ni reçu officiel de don n’est revendiqué.',
      'Aucune collecte de dons ni réservation de voyage n’est offerte sur ce site.',
      'Les partenaires éventuels et les détails des projets demeureront indiqués comme non confirmés jusqu’à la conclusion d’ententes.',
    ],
    ctaTitle: 'Le projet vous intéresse?',
    ctaText: 'Écrivez-nous pour poser une question ou partager une idée.',
    cta: 'Nous joindre',
  },
  en: {
    title: 'About ÆRIA Humanitas',
    headline: 'Travel, connect and act together.',
    intro:
      'ÆRIA Humanitas has a mission to contribute to lasting improvements in the living conditions of disadvantaged communities, primarily in developing countries. Our approach is to listen, work with credible local organizations, and support priorities shaped with communities.',
    areasTitle: 'Four connected areas of work',
    areasIntro:
      'Our program is built around four areas of action. For each voyage, supported initiatives and recipient organizations are defined according to local priorities and confirmed before bookings open.',
    areas: [
      ['Relieve poverty', 'Help improve access to clean water, food, essential supplies, and basic health services.'],
      ['Support education', 'Contribute to schooling, learning resources, tuition support, and vocational training.'],
      [
        'Encourage economic autonomy',
        'Support locally shaped initiatives that build skills and improve access to livelihoods.',
      ],
      ['Build understanding', 'Encourage learning in Québec about global poverty and international development.'],
    ],
    purposeTitle: 'A distinct humanitarian purpose',
    purpose: [
      'ÆRIA Voyages is a commercial travel company. ÆRIA Humanitas runs a solidarity travel program with a non-profit purpose. The travel business sells voyages; Humanitas focuses on its humanitarian mission and the contribution mechanism adopted for the program.',
      'A voyage outside the Humanitas program may be available through ÆRIA Voyages without the program contribution. For a voyage sold as part of the Humanitas program, the $150 CAD passenger contribution is added automatically to its total price.',
    ],
    statusTitle: 'The program and its framework',
    status: [
      'ÆRIA Humanitas is preparing for incorporation as a non-profit organization in Québec.',
      'No charitable registration or official tax receipt eligibility is claimed.',
      'No donation collection or voyage booking is available through this website.',
      'Potential partners and project details will be identified as unconfirmed until agreements are in place.',
    ],
    ctaTitle: 'Interested in the project?',
    ctaText: 'Contact us to ask a question or share an idea.',
    cta: 'Get in touch',
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  return {
    title: translations[localeParam].title,
    alternates: {
      canonical: localizedPath(localeParam, '/about'),
      languages: { 'fr-CA': '/fr/about', 'en-CA': '/en/about' },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  const locale: Locale = localeParam
  const copy = translations[locale]

  return (
    <>
      <section className="bg-white py-24 sm:py-32 dark:bg-mist-950">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
              {copy.title}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-6xl dark:text-white">
              {copy.headline}
            </h1>
            <p className="mt-6 text-lg/8 text-mist-700 dark:text-mist-300">{copy.intro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-mist-100 py-20 sm:py-24 dark:bg-mist-900">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-mist-950 sm:text-4xl dark:text-white">
              {copy.areasTitle}
            </h2>
            <p className="mt-4 text-base/7 text-mist-700 dark:text-mist-300">{copy.areasIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {copy.areas.map(([title, description], index) => (
              <article key={title} className="rounded-2xl bg-white p-7 dark:bg-mist-950">
                <p className="font-display text-sm text-mist-500 dark:text-mist-400">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-mist-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 dark:bg-mist-950">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-mist-950 sm:text-4xl dark:text-white">
              {copy.purposeTitle}
            </h2>
            {copy.purpose.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base/7 text-mist-700 dark:text-mist-300">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-mist-100 p-7 dark:bg-mist-900">
            <h2 className="font-display text-2xl tracking-tight text-mist-950 dark:text-white">{copy.statusTitle}</h2>
            <ul className="mt-5 flex flex-col gap-4 text-base/7 text-mist-700 dark:text-mist-300">
              {copy.status.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-mist-950 py-16 text-white dark:bg-mist-900">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-tight">{copy.ctaTitle}</h2>
            <p className="mt-2 text-base/7 text-white/75">{copy.ctaText}</p>
          </div>
          <ButtonLink href={localizedPath(locale, '/#contact')} color="light" size="lg" className="gap-2">
            {copy.cta} <ArrowNarrowRightIcon />
          </ButtonLink>
        </Container>
      </section>
    </>
  )
}
