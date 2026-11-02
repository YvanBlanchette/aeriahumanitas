import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Container } from '@/components/elements/container'
import { getPublishedImpactReports } from '@/data/impact-reports'
import { getTripContent, trips } from '@/data/trips'
import { isLocale, localizedPath, type Locale } from '@/i18n'

const translations = {
  fr: {
    title: 'Suivi et transparence',
    eyebrow: 'Suivi des projets',
    headline: 'Les bilans de projets seront publiés ici.',
    intro:
      'Le suivi du programme porte sur les contributions, les organismes partenaires et les résultats de chaque projet. Les bilans sont publiés après vérification des données de chaque voyage.',
    project: 'Projet actuellement à l’étude',
    projectStatus: 'En préparation — aucun voyage confirmé ni réservable.',
    noReports: 'Aucun bilan financier de projet n’est publié pour le moment.',
    noReportsDetail:
      'Le projet Mékong est encore à l’étude. Aucun chiffre n’est présenté comme fonds recueillis ou versés sans projet confirmé, période de rapport et données vérifiées. L’absence de bilan publié ne doit pas être interprétée comme un solde nul ou comme la confirmation qu’aucun fonds n’a été recueilli ou distribué par d’autres moyens.',
    noDonations: 'Ce site ne recueille actuellement pas de dons.',
    contribution:
      'La contribution de solidarité de 150 $ CA décrite sur le site est ajoutée automatiquement au prix d’un voyage vendu dans le cadre du programme Humanitas. Il s’agit d’un élément du prix du voyage, et non d’une demande de don. Aucun reçu officiel de don n’est offert ou revendiqué.',
    reporting: 'Ce qui sera documenté',
    publishedOn: 'Publié le',
    reviewedOn: 'Vérifié le',
    passengerContributions: 'Contributions nettes perçues auprès des passagers',
    agencyContributions: 'Contribution d’ÆRIA Voyages reçue',
    available: 'Total des fonds documentés',
    transferred: 'Sommes transférées',
    remaining: 'Solde affecté non transféré',
    organizations: 'Organismes bénéficiaires',
    evidence: 'Documents de référence',
    reportingItems: [
      'La période visée et la date de publication du bilan.',
      'Les contributions des passagers et les montants additionnels d’ÆRIA Voyages, lorsqu’ils seront confirmés.',
      'Les organismes bénéficiaires et les sommes effectivement transférées.',
      'Les activités réalisées et les résultats documentés, avec des éléments justificatifs appropriés.',
    ],
    methodology:
      'Les bilans seront publiés seulement après rapprochement des montants et vérification des informations avec les parties concernées. Les renseignements personnels des voyageurs et des bénéficiaires ne seront pas publiés.',
  },
  en: {
    title: 'Project reporting and transparency',
    eyebrow: 'Project reporting',
    headline: 'Project reports will be published here.',
    intro:
      'Program reporting covers contributions, community partners, and the outcomes of each project. Reports are published after the records for each voyage have been verified.',
    project: 'Project currently under consideration',
    projectStatus: 'In preparation — no confirmed or bookable voyage.',
    noReports: 'No project financial reports have been published yet.',
    noReportsDetail:
      'The Mekong project is still under consideration. We will not present figures as funds collected or transferred without a confirmed project, reporting period, and verified records. The absence of a published report must not be interpreted as a zero balance or as confirmation that no funds have been collected or distributed through other means.',
    noDonations: 'This website is not currently accepting donations.',
    contribution:
      'The $150 CAD solidarity contribution described on this site is automatically added to the price of a voyage sold as part of the Humanitas program. It is a component of the voyage price, not a donation appeal. No official donation receipt is offered or claimed.',
    reporting: 'What reports will document',
    publishedOn: 'Published',
    reviewedOn: 'Reviewed',
    passengerContributions: 'Net passenger contributions collected',
    agencyContributions: 'ÆRIA Voyages contribution received',
    available: 'Total documented funds',
    transferred: 'Funds transferred',
    remaining: 'Allocated funds not yet transferred',
    organizations: 'Recipient organizations',
    evidence: 'Supporting records',
    reportingItems: [
      'The reporting period and publication date.',
      'Passenger contributions and any additional ÆRIA Voyages amounts, once confirmed.',
      'Recipient organizations and the amounts actually transferred.',
      'Activities completed and documented outcomes, supported by appropriate records.',
    ],
    methodology:
      'Reports will be published only after amounts have been reconciled and information verified with the parties involved. Personal information about travelers and beneficiaries will not be published.',
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  return {
    title: translations[localeParam].title,
    alternates: {
      canonical: localizedPath(localeParam, '/impact-report'),
      languages: { 'fr-CA': '/fr/impact-report', 'en-CA': '/en/impact-report' },
    },
  }
}

export default async function ImpactReportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  const locale: Locale = localeParam
  const copy = translations[locale]
  const project = getTripContent(trips[0], locale)
  const publishedImpactReports = getPublishedImpactReports()
  const formatCad = (amountCents: number) =>
    (amountCents / 100).toLocaleString(locale === 'fr' ? 'fr-CA' : 'en-CA', {
      style: 'currency',
      currency: 'CAD',
    })

  return (
    <div className="bg-white py-20 sm:py-28 dark:bg-mist-950">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white">
            {copy.headline}
          </h1>
          <p className="mt-5 text-lg/8 text-mist-700 dark:text-mist-300">{copy.intro}</p>
        </div>

        <section
          aria-labelledby="report-status-heading"
          className="mt-12 max-w-4xl rounded-3xl bg-mist-100 p-7 sm:p-10 dark:bg-mist-900"
        >
          <p className="text-sm font-semibold tracking-[0.14em] text-mist-600 uppercase dark:text-mist-400">
            {copy.project}
          </p>
          <h2
            id="report-status-heading"
            className="mt-3 font-display text-2xl tracking-tight text-mist-950 sm:text-3xl dark:text-white"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-sm/6 text-mist-600 dark:text-mist-400">{copy.projectStatus}</p>

          {publishedImpactReports.length === 0 ? (
            <div className="mt-8 border-t border-mist-950/10 pt-6 dark:border-white/10">
              <h3 className="font-semibold text-mist-950 dark:text-white">{copy.noReports}</h3>
              <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">{copy.noReportsDetail}</p>
            </div>
          ) : (
            <ul className="mt-8 flex flex-col gap-6 border-t border-mist-950/10 pt-6 dark:border-white/10">
              {publishedImpactReports.map((report) => (
                <li key={report.slug}>
                  <h3 className="font-semibold text-mist-950 dark:text-white">
                    {report.periodStart} – {report.periodEnd}
                  </h3>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.publishedOn}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">{report.publishedAt}</dd>
                    </div>
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.reviewedOn}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">{report.reviewedAt}</dd>
                    </div>
                  </dl>
                  <h4 className="mt-6 text-sm font-semibold text-mist-950 dark:text-white">{copy.organizations}</h4>
                  <ul className="mt-2 flex flex-col gap-1 text-sm text-mist-700 dark:text-mist-300">
                    {report.recipientOrganizations.map(({ name, location }) => (
                      <li key={`${name}-${location}`}>
                        {name} — {location}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.passengerContributions}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">
                        {formatCad(report.financials.passengerContributionsNetCents)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.agencyContributions}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">
                        {formatCad(report.financials.agencyContributionsReceivedCents)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.available}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">
                        {formatCad(
                          report.financials.passengerContributionsNetCents +
                            report.financials.agencyContributionsReceivedCents,
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.transferred}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">
                        {formatCad(report.financials.transferredFundsCents)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-mist-600 dark:text-mist-400">{copy.remaining}</dt>
                      <dd className="font-medium text-mist-950 dark:text-white">
                        {formatCad(
                          report.financials.passengerContributionsNetCents +
                            report.financials.agencyContributionsReceivedCents -
                            report.financials.transferredFundsCents,
                        )}
                      </dd>
                    </div>
                  </dl>
                  <ul className="mt-3 list-disc pl-5 text-sm/6 text-mist-700 dark:text-mist-300">
                    {report.outcomes.map(({ title, description }) => (
                      <li key={title}>
                        <strong>{title}:</strong> {description}
                      </li>
                    ))}
                  </ul>
                  {report.outcomes.some(({ evidence }) => evidence.length > 0) && (
                    <>
                      <h4 className="mt-5 text-sm font-semibold text-mist-950 dark:text-white">{copy.evidence}</h4>
                      <ul className="mt-2 flex flex-col gap-2 text-sm">
                        {report.outcomes.flatMap(({ evidence }) =>
                          evidence.map((url) => (
                            <li key={url}>
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-mist-700 underline underline-offset-4 dark:text-mist-300"
                              >
                                {url}
                              </a>
                            </li>
                          )),
                        )}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-8 max-w-4xl rounded-3xl border border-mist-950/10 p-7 sm:p-10 dark:border-white/10">
          <h2 className="font-display text-2xl tracking-tight text-mist-950 dark:text-white">{copy.noDonations}</h2>
          <p className="mt-3 text-base/7 text-mist-700 dark:text-mist-300">{copy.contribution}</p>
        </section>

        <section className="mt-12 max-w-4xl">
          <h2 className="font-display text-2xl tracking-tight text-mist-950 dark:text-white">{copy.reporting}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {copy.reportingItems.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-mist-100 p-5 text-sm/6 text-mist-700 dark:bg-mist-900 dark:text-mist-300"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm/6 text-mist-600 dark:text-mist-400">{copy.methodology}</p>
        </section>
      </Container>
    </div>
  )
}
