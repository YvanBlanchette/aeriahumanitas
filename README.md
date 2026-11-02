# ÆRIA Humanitas

The ÆRIA Humanitas website is built with Next.js, React, TypeScript, and Tailwind CSS. Humanitas is an initiative in
development; this site must not imply that it is already incorporated or registered as a charity, that tax receipts are
available, or that potential partners and trips are confirmed.

## Local development

```bash
npm install
npm run dev
```

The application is available at `http://localhost:3000`.

## Languages

The site is available in Canadian French and English. The root URL redirects to `/fr`; English pages use `/en`.
Language switching keeps visitors on the corresponding page when a translation is available. If localized wording or
project details change, update both language versions before publishing.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Contact form

The contact form uses EmailJS in the browser. Copy `.env.example` to `.env.local` and configure the EmailJS service ID,
template ID, and public key to enable message delivery. Set the recipient to the Humanitas contact inbox and configure
the template to use the submitted name, reply-to address, subject, and message. The public key is intended for browser
use; restrict allowed origins and usage in EmailJS. Never expose an EmailJS private key through a `NEXT_PUBLIC_`
variable.

The website does not accept donations or voyage bookings. It has no payment processor, donation checkout, or tax
receipt flow. The newsletter update link currently opens an email draft instead of collecting an address. Do not add a
payment link or enable fundraising without documented legal, accounting, recipient, privacy, and operational approval.

## Hero media

The hero uses `public/videos/aeria-humanitas-optimized.mp4` and
`public/img/photos/aeria-humanitas-hero-poster.jpg`. The original video is preserved at
`public/videos/aeria-humanitas.mp4`. For a replacement, export a web-optimized MP4 and a matching poster image to
those two active paths; the hero component and reduced-motion behavior do not need to change.
The poster is used instead of video on small viewports and when reduced motion is requested.

## Solidarity-voyage project status

For a voyage offered as part of the Humanitas program, the current plan is to add a $150 CAD passenger contribution
automatically to the total voyage price. A standard ÆRIA Voyages trip outside the program may be offered without this
contribution. The additional $150 CAD per eligible passenger from ÆRIA Voyages profits, project terms, and recipient
organizations must be confirmed before a program voyage is offered for booking.

The Mekong project for Vietnam and Cambodia is under consideration for 2028. Potential commercial and community
partners are not confirmed. Refer to the website for the current project status.

## Project reporting and fundraising readiness

The bilingual project-reporting page is available at `/fr/impact-report` and `/en/impact-report`. Published reports
are maintained in `src/data/impact-reports.ts`; it currently contains no reports. The typed record separates net
passenger contributions, ÆRIA Voyages contributions actually received, and funds transferred. Add only completed,
reconciled reports supported by records, with recipient organizations, reporting dates, and documented outcomes.
Amounts are stored as integer cents and checked for safe values and reconciliation when the page is built. Never
publish traveler or beneficiary personal information. Review the French and English copy together.

This file-based workflow is intentionally manual and version-controlled; it is not an admin dashboard or a payment
system. A second reviewer should verify the figures, supporting records, recipient permissions, translations, and
public wording before a report is added and the site is deployed.

Fundraising and checkout remain gated. Before considering a payment feature, obtain and document:

- The organization's confirmed legal status, authority to receive funds, applicable registration and receipt rules, and
  professional legal/accounting review.
- Written program terms that define the passenger price contribution, any agency contribution from profits, eligibility,
  cancellations/refunds, who holds the funds, and how/when recipient organizations are paid.
- Confirmed recipient organizations, written agreements, due diligence, and a process for recording and reconciling
  amounts billed, collected, refunded, received, and transferred.
- A reviewed privacy notice, data-minimization and retention rules, secure payment-provider configuration, and clear
  customer disclosures.
- Operational ownership for support, reconciliation, reporting, disputes, and ongoing review.

No donation request, checkout, or fundraising integration should be enabled until all relevant items are confirmed and
the responsible organization explicitly approves launch.
