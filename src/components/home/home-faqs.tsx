import { Faq, FAQs } from '@/components/sections/faqs'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/i18n'
import Link from 'next/link'

export function HomeFaqs({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <FAQs
        id="faqs"
        headline="Des questions sur ÆRIA Humanitas?"
        subheadline={
          <p>
            Découvrez comment les voyages solidaires peuvent conjuguer découverte et soutien local. Une autre question?
            Écrivez-nous au moyen du formulaire ci-dessous.
          </p>
        }
      >
        <Faq
          id="faq-1"
          question="La contribution de solidarité est-elle obligatoire pour un voyage ÆRIA Humanitas?"
          answer="Oui. Pour un voyage vendu dans le cadre du programme Humanitas, la contribution de solidarité de 150 $ CA par passager est automatiquement ajoutée au prix total et fait partie du programme."
        />
        <Faq
          id="faq-2"
          question="À qui les contributions seront-elles versées?"
          answer="Les contributions du programme sont versées à des organismes partenaires qui travaillent directement dans la destination. Les organismes bénéficiaires et les modalités de chaque projet devront être confirmés et communiqués avant qu’un voyage soit offert. Un compte rendu de l'utilisation des contributions est acheminé à chaque voyageur 6 mois après le séjour."
        />
        <Faq
          id="faq-3"
          question="Quels types d'initiatives pourraient être soutenus?"
          answer="Selon les priorités locales et les besoins de chaque projet, un projet pourrait soutenir l’accès aux services essentiels comme l'eau potable et la nourriture, l’éducation, les frais de scolarité ou l'autonomie économique. Ce sont des pistes possibles, et non l’affirmation que des fonds ont déjà été versés."
        />
        <Faq
          id="faq-4"
          question="Quelles destinations sont envisagées?"
          answer="Le Vietnam et le Cambodge sont au cœur du projet pilote de 2028. Les autres destinations sur la carte sont des possibilités futures, et non des programmes confirmés ou actuellement réservables."
        />
      </FAQs>
    )
  return (
    <FAQs
      id="faqs"
      headline="Questions about ÆRIA Humanitas?"
      subheadline={
        <p>
          Learn how our solidarity voyages connect travel with locally rooted support. Have another question? Send us a
          message using the contact form above.
        </p>
      }
    >
      <Faq
        id="faq-1"
        question="Is the $150 CAD contribution optional on a Humanitas-program voyage?"
        answer="No. For a voyage sold as part of the Humanitas program, the $150 CAD solidarity contribution is automatically added to the total price and is part of that program. ÆRIA Voyages may separately sell a voyage outside the program without this contribution."
      />
      <Faq
        id="faq-2"
        question="Who receives the program contributions?"
        answer="Program contributions are allocated to credible organizations working directly in the destination. Specific recipient organizations and the terms of each project must be confirmed and shared before a voyage is offered for booking. This website is not currently accepting direct donations."
      />
      <Faq
        id="faq-3"
        question="What kinds of initiatives can contributions support?"
        answer="Depending on locally identified priorities and confirmed partners, a project could support essential services, education, school fees, or economic opportunity. These are possible areas of work, not a claim that funds have already been distributed."
      />
      <Faq
        id="faq-4"
        question="Which destinations can I travel to?"
        answer="Vietnam and Cambodia are the focus of the first voyage project being explored for 2028. Other map destinations are future possibilities, not confirmed or currently bookable programs."
      />
      <Faq
        id="faq-5"
        question="Can I make a donation directly to ÆRIA Humanitas?"
        answer={
          <>
            No. This website is not accepting donations, and no official donation receipt is offered or claimed. The
            $150 CAD contribution for a Humanitas voyage is automatically added to its total price. See the{' '}
            <Link href={localizedPath(locale, '/impact-report')} className="underline underline-offset-4">
              project reporting and transparency page
            </Link>{' '}
            for current reporting status.
          </>
        }
      />
    </FAQs>
  )
}
