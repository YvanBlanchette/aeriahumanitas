import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocumentCentered } from '@/components/sections/document-centered'
import { isLocale, localizedPath } from '@/i18n'

const contactEmail = 'yvanblanchette@aeriavoyages.com'

const translations = {
  fr: {
    title: 'Renseignements sur la confidentialité',
    subtitle: 'Avis préliminaire pour le site Web d’ÆRIA Humanitas.',
    intro:
      'ÆRIA Humanitas est une initiative en développement. Le présent avis décrit les renseignements personnels traités par le site dans sa forme actuelle. Il ne remplace pas une politique de confidentialité complète, qui devra être finalisée lorsque l’organisme et ses ententes de service seront établis.',
    contactTitle: 'Formulaire de contact',
    contact:
      'Si vous utilisez le formulaire de contact, il vous demande votre nom, votre adresse courriel, l’objet et votre message. Le formulaire transmet ces renseignements par l’intermédiaire d’EmailJS à la boîte de réception configurée pour le service. EmailJS est un fournisseur tiers; ses propres pratiques de traitement et de conservation s’appliquent également. Évitez d’inclure des renseignements personnels sensibles dans votre message.',
    contactExtra:
      'Le formulaire sert à nous permettre de répondre à votre demande. Le site ne propose actuellement ni compte utilisateur, ni paiement de don, ni réservation de voyage.',
    servicesTitle: 'Nouvelles et services externes',
    services:
      'L’inscription à l’infolettre n’est pas activée; le lien de nouvelles ouvre un courriel que vous pouvez envoyer vous-même. Le site charge les polices de caractères depuis Google Fonts; votre navigateur demande donc des ressources à Google lorsque vous consultez les pages.',
    questionsTitle: 'Questions',
    questions: 'Pour toute question sur cet avis ou sur un message envoyé, écrivez à',
    closing:
      'Avant d’ajouter une collecte de dons, une infolettre ou toute nouvelle collecte de renseignements personnels, cet avis devra être révisé et complété afin de préciser l’organisme responsable, les fournisseurs de services, les finalités, les durées de conservation et les choix offerts.',
  },
  en: {
    title: 'Privacy information',
    subtitle: 'Preliminary notice for the ÆRIA Humanitas website.',
    intro:
      'ÆRIA Humanitas is an initiative in development. This notice describes the personal information handled by the website as it is currently implemented. It is not a substitute for a complete privacy policy, which must be finalized as the organization and its service arrangements are established.',
    contactTitle: 'Contact form',
    contact:
      'If you use the contact form, it asks for your name, email address, subject, and message. The form sends these details through EmailJS to the contact inbox configured for the service. EmailJS is a third-party service, and its own processing and retention practices also apply. Please do not include sensitive personal information in your message.',
    contactExtra:
      'The form is intended to let us respond to your inquiry. The website does not currently offer user accounts, donation checkout, or voyage booking.',
    servicesTitle: 'Updates and external services',
    services:
      'Newsletter registration is not currently enabled; the updates link opens an email addressed by you. The website loads typography from Google Fonts, so your browser requests font resources from Google when pages are displayed.',
    questionsTitle: 'Questions',
    questions: 'For questions about this notice or a message you have sent, contact',
    closing:
      'Before any donation, newsletter, or other new personal-information collection is introduced, this notice should be reviewed and completed to describe the responsible organization, service providers, purposes, retention periods, and applicable choices.',
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return {
    title: translations[locale].title,
    alternates: {
      canonical: localizedPath(locale, '/privacy-policy'),
      languages: { 'fr-CA': '/fr/privacy-policy', 'en-CA': '/en/privacy-policy' },
    },
  }
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = translations[locale]

  return (
    <DocumentCentered id="document" headline={copy.title} subheadline={<p>{copy.subtitle}</p>}>
      <p>{copy.intro}</p>

      <h2>{copy.contactTitle}</h2>
      <p>{copy.contact}</p>
      <p>{copy.contactExtra}</p>

      <h2>{copy.servicesTitle}</h2>
      <p>{copy.services}</p>

      <h2>{copy.questionsTitle}</h2>
      <p>
        {copy.questions} <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
      <p>{copy.closing}</p>
    </DocumentCentered>
  )
}
