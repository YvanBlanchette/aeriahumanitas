import type { Locale } from '@/i18n'

type TripTranslation = {
  destination: string
  title: string
  period: string
  statusLabel: string
  summary: string
  imageAlt: string
  groupSize: string
  highlights: string[]
  potentialPartners: string[]
}

export type Trip = {
  slug: string
  destination: string
  title: string
  period: string
  statusLabel: string
  summary: string
  image: string
  imageAlt: string
  groupSize: string
  highlights: string[]
  potentialPartners: string[]
  translations: Partial<Record<Locale, TripTranslation>>
}

export const trips: Trip[] = [
  {
    slug: 'mekong-2028',
    destination: 'Vietnam and Cambodia',
    title: 'The Mekong autrement — Travel with heart',
    period: 'Envisaged for 2028',
    statusLabel: 'Project under consideration',
    summary:
      'A French-language river cruise is being explored as the first ÆRIA Humanitas solidarity-voyage project. The itinerary, commercial arrangements, and local initiatives are not yet confirmed.',
    image: '/img/photos/asia.webp',
    imageAlt: 'A view of a river landscape in Asia',
    groupSize: 'Target group: 16–20 travelers',
    highlights: [
      'A river journey through Vietnam and Cambodia is being explored.',
      'A cultural itinerary including the temples of Angkor is under consideration.',
      'Community initiatives and local partners must be confirmed before the project can be offered.',
    ],
    potentialPartners: ['CroisiEurope and the RV Toum Tiou II', 'Mékong Plus'],
    translations: {
      fr: {
        destination: 'Vietnam et Cambodge',
        title: 'Le Mékong autrement',
        period: 'Envisagé pour 2028',
        statusLabel: 'À VENIR POUR 2028',
        summary:
          "Une croisière fluviale francophone sur le fleuve Mékong reliant le Vietnam et le Cambodge. Un itinéraire comprenant une série d'activités telles que le vélo, le kayak, les promenades en sampan, les bateaux à rames/moteurs et les visites à pied, qui permettent de découvrir les trésors cachés du Mékong, notamment les visites de villages traditionnels et l'ascension de l'étonnante colline d'Oudong.",
        imageAlt: 'Paysage fluvial en Asie',
        groupSize: '16 à 20 voyageurs',
        highlights: [
          'Un voyage fluvial au Vietnam et au Cambodge est à l’étude.',
          'Un itinéraire culturel comprenant les temples d’Angkor est envisagé.',
          'Les initiatives communautaires et partenaires locaux devront être confirmés avant la réalisation du projet.',
        ],
        potentialPartners: ['CroisiEurope et le RV Toum Tiou II', 'Mékong Plus'],
      },
    },
  },
]

export function getTripContent(trip: Trip, locale: Locale): Trip {
  const translation = trip.translations[locale]

  return {
    ...trip,
    destination: translation?.destination ?? trip.destination,
    title: translation?.title ?? trip.title,
    period: translation?.period ?? trip.period,
    statusLabel: translation?.statusLabel ?? trip.statusLabel,
    summary: translation?.summary ?? trip.summary,
    imageAlt: translation?.imageAlt ?? trip.imageAlt,
    groupSize: translation?.groupSize ?? trip.groupSize,
    highlights: translation?.highlights ?? trip.highlights,
    potentialPartners: translation?.potentialPartners ?? trip.potentialPartners,
  }
}
