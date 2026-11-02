export type PublishedImpactReport = {
  slug: string
  projectSlug: string
  periodStart: string
  periodEnd: string
  publishedAt: string
  reviewedAt: string
  recipientOrganizations: {
    name: string
    location: string
  }[]
  financials: {
    currency: 'CAD'
    passengerContributionsNetCents: number
    agencyContributionsReceivedCents: number
    transferredFundsCents: number
  }
  outcomes: {
    title: string
    description: string
    evidence: string[]
  }[]
}

const publishedImpactReports: PublishedImpactReport[] = []

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T00:00:00Z`)
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export function getPublishedImpactReports(): readonly PublishedImpactReport[] {
  for (const report of publishedImpactReports) {
    const { financials } = report
    const amounts = [
      financials.passengerContributionsNetCents,
      financials.agencyContributionsReceivedCents,
      financials.transferredFundsCents,
    ]
    const totalFunds = financials.passengerContributionsNetCents + financials.agencyContributionsReceivedCents

    if (
      amounts.some((amount) => !Number.isSafeInteger(amount) || amount < 0) ||
      !Number.isSafeInteger(totalFunds) ||
      financials.transferredFundsCents > totalFunds
    ) {
      throw new Error(`Impact report "${report.slug}" has invalid or unreconciled financial amounts.`)
    }

    if (
      !isValidDate(report.periodStart) ||
      !isValidDate(report.periodEnd) ||
      report.periodEnd < report.periodStart ||
      !isValidDate(report.publishedAt) ||
      !isValidDate(report.reviewedAt) ||
      report.reviewedAt > report.publishedAt
    ) {
      throw new Error(`Impact report "${report.slug}" has invalid reporting or review dates.`)
    }

    if (
      report.recipientOrganizations.length === 0 ||
      report.outcomes.length === 0 ||
      report.outcomes.some(({ title, description, evidence }) => {
        if (!title.trim() || !description.trim()) return true
        return evidence.some((url) => {
          try {
            return !['http:', 'https:'].includes(new URL(url).protocol)
          } catch {
            return true
          }
        })
      })
    ) {
      throw new Error(
        `Impact report "${report.slug}" is missing reviewed organizations, outcomes, or valid evidence links.`,
      )
    }
  }

  return publishedImpactReports
}
