import Link from 'next/link'

import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { localizedPath, type Locale } from '@/i18n'

const content = {
  fr: {
    label: 'La suite se construit ensemble',
    title: 'Du projet à l’action.',
    intro:
      'Avant de prendre le départ, prendre le temps de bien faire les choses. Voici les prochaines étapes pour donner forme au projet Humanitas.',
    steps: [
      [
        'Écouter les besoins locaux',
        'Identifier des organismes de terrain et comprendre les priorités des communautés.',
      ],
      [
        'Définir le soutien',
        'Préciser les initiatives envisagées, les bénéficiaires et les modalités de contribution.',
      ],
      [
        'Présenter un projet clair',
        'Confirmer les conditions du voyage et expliquer le suivi prévu avant toute mise en vente.',
      ],
    ],
    action: 'Parlons du projet',
    note: 'Une question, une idée ou une collaboration à proposer ?',
  },
  en: {
    label: 'Building the next chapter together',
    title: 'From intention to action.',
    intro:
      'Before setting off, we want to take the time to build thoughtfully. These are the next steps in shaping the Humanitas project.',
    steps: [
      [
        'Listen to local needs',
        'Identify community-based organizations and understand the priorities of local communities.',
      ],
      ['Define the support', 'Clarify potential initiatives, recipients and contribution arrangements.'],
      ['Present a clear project', 'Confirm travel terms and explain the planned reporting before opening bookings.'],
    ],
    action: 'Talk about the project',
    note: 'Have a question, an idea or a potential collaboration?',
  },
}

export function ProjectNextSteps({ locale }: { locale: Locale }) {
  const text = content[locale]

  return (
    <section
      id="next-steps"
      aria-labelledby="next-steps-heading"
      className="relative isolate border-y border-mist-200 bg-white py-20 text-mist-950 sm:py-28"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
          <p className="flex items-start gap-3 pt-3 text-xs font-semibold tracking-[0.16em] text-[#80613b] uppercase">
            <span aria-hidden="true" className="mt-2 h-px w-8 shrink-0 bg-[#977447]" />
            {text.label}
          </p>
          <div>
            <h2 id="next-steps-heading" className="font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              {text.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base/7 text-mist-600 sm:text-lg/8">{text.intro}</p>
          </div>
        </div>
        <ol className="mt-12 grid gap-8 border-t border-mist-200 pt-8 md:grid-cols-3 md:gap-12">
          {text.steps.map(([title, description], index) => (
            <li key={title}>
              <span aria-hidden="true" className="font-display text-4xl font-light text-[#977447]">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm/7 text-mist-600">{description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-mist-200 pt-6">
          <p className="text-sm/6 text-mist-600">{text.note}</p>
          <Link
            href={localizedPath(locale, '/#contact')}
            className="inline-flex items-center gap-4 bg-mist-950 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-mist-700 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {text.action}
            <ArrowNarrowRightIcon />
          </Link>
        </div>
      </Container>
    </section>
  )
}
