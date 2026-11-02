import type { Locale } from '@/i18n'
import Image from 'next/image'

const days = {
  fr: [
    ['J1', 'Hô-Chi-Minh-Ville', 'Accueil, découverte de quartiers et pagodes, puis embarquement.'],
    ['J2', 'Hô-Chi-Minh-Ville · My Tho', 'Visite de la ville, puis navigation sur le canal Chao Gao vers le Mékong.'],
    ['J3', 'My Tho · Cai Be', 'Navigation locale, découverte de l’île de Thoi Son et d’un village artisanal.'],
    ['J4', 'Sa Dec', 'Visite panoramique en bateau local, puis navigation vers Chau Doc.'],
    ['J5', 'Chau Doc · Phnom Penh', 'Forêt de Tra Su, mont Sam et passage de la frontière cambodgienne.'],
    ['J6', 'Phnom Penh', 'Palais Royal, Pagode d’Argent, Wat Phnom et découverte de la capitale.'],
    [
      'J7',
      'Kampong Tralach · Oudong · Kampong Chhnang',
      'Pagode de Wat Kampong Tralach Leu, campagne et ancienne capitale royale d’Oudong.',
    ],
    [
      'J8',
      'Kampong Chhnang · Koh Chen',
      'Découverte d’un port de pêche et d’un village de potiers, puis navigation vers Koh Chen.',
    ],
    [
      'J9',
      'Koh Chen · Siem Reap · Angkor Wat',
      'Débarquement, transfert routier vers Siem Reap avec découverte de villages traditionnels, puis visite d’Angkor Wat et nuit à l’hôtel.',
    ],
    [
      'J10',
      'Siem Reap · lac Tonlé Sap',
      'Découverte en bateau des villages flottants, visite d’ateliers artisanaux, dîner en ville et spectacle du cirque Phare.',
    ],
    [
      'J11',
      'Siem Reap · temples d’Angkor',
      'Visite de Ta Prohm, Angkor Thom, du Bayon et des terrasses royales. Fin des services après le déjeuner.',
    ],
  ],
  en: [
    ['Day 1', 'Ho Chi Minh City', 'Meet, explore local neighborhoods and pagodas, then board the ship.'],
    [
      'Day 2',
      'Ho Chi Minh City · My Tho',
      'City visit, followed by sailing through the Chao Gao Canal toward the Mekong.',
    ],
    ['Day 3', 'My Tho · Cai Be', 'Local boat outing, Thoi Son Island and a visit to a traditional craft village.'],
    ['Day 4', 'Sa Dec', 'Panoramic visit by local boat, then sail toward Chau Doc.'],
    ['Day 5', 'Chau Doc · Phnom Penh', 'Tra Su Forest, Sam Mountain and the border crossing into Cambodia.'],
    ['Day 6', 'Phnom Penh', 'The Royal Palace, Silver Pagoda, Wat Phnom and time to discover the capital.'],
    [
      'Day 7',
      'Kampong Tralach · Oudong · Kampong Chhnang',
      'Wat Kampong Tralach Leu, countryside and Oudong, the former royal capital.',
    ],
    ['Day 8', 'Kampong Chhnang · Koh Chen', 'A fishing port and pottery village, followed by sailing to Koh Chen.'],
    [
      'Day 9',
      'Koh Chen · Siem Reap · Angkor Wat',
      'Disembark, travel by road to Siem Reap with a visit to traditional villages, then explore Angkor Wat and stay overnight at a hotel.',
    ],
    [
      'Day 10',
      'Siem Reap · Tonlé Sap Lake',
      'Boat trip to floating villages, artisan workshops, dinner in town and a Phare circus performance.',
    ],
    [
      'Day 11',
      'Siem Reap · Angkor temples',
      'Visit Ta Prohm, Angkor Thom, Bayon and the royal terraces. Services end after lunch.',
    ],
  ],
} as const

const copy = {
  fr: {
    eyebrow: 'Vietnam · Cambodge',
    title: 'Un itinéraire au fil du Mékong',
    intro:
      'Un voyage de onze jours entre Hô-Chi-Minh-Ville et Siem Reap : croisière sur le Mékong, transfert terrestre et découverte des temples d’Angkor.',
    mapLabel: 'Carte schématique de l’itinéraire du Mékong, du Vietnam au Cambodge',
    mapNote:
      'Carte schématique : les traits illustrent l’ordre des étapes, pas le tracé exact de la navigation. Le trajet vers Siem Reap se fait par la route; les journées 9 à 11 se déroulent dans la région d’Angkor. Faites défiler la carte horizontalement sur mobile.',
    highlightsTitle: 'Les temps forts',
    includedExcursions: 'Excursions incluses',
    mustSee: 'Les incontournables',
    highlights: [
      'Un voyage authentique et dynamique en petits groupes.',
      'Une navigation unique dans le canal Chao Gao.',
      'Les trésors cachés du Mékong à vélo, en kayak, en sampan et à pied.',
      'La découverte de villes historiques : Phnom Penh et Hô-Chi-Minh-Ville.',
      'Des rencontres avec les villageois et la découverte de leur mode de vie à Sa Dec et Cai Be.',
      'Une démonstration de tournage de poterie et un cours de cuisine pour s’immerger dans la culture locale.',
      'L’ascension de l’étonnante colline d’Oudong.',
      'La visite de quatre temples emblématiques d’Angkor.',
    ],
    onboardTitle: 'Tout inclus à bord',
    onboardSubtitle: 'Les plus CroisiEurope',
    onboardInclusions: [
      'La pension complète et les boissons incluses aux repas et au bar.',
      'Une cuisine locale raffinée.',
      'Un système audiophone pendant les excursions.',
      'La présentation du commandant et de son équipage.',
      'Un accompagnateur ou directeur de croisière à bord.',
      'Des animations et/ou conférences à bord.',
      'L’assurance assistance et rapatriement.',
      'Les taxes portuaires.',
    ],
    inclusionNote:
      'Ces prestations sont celles indiquées sur la fiche CroisiEurope de référence; elles ne constituent pas une confirmation des services d’un éventuel voyage ÆRIA Humanitas.',
    daysTitle: 'Le voyage, jour par jour',
    videoTitle: 'Découvrir le Mékong',
    videoDescription: 'Vidéo de présentation du voyage sur le Mékong',
    source: 'Itinéraire présenté par CroisiEurope pour l’édition 2028.',
    sourceLink: 'Consulter la fiche CroisiEurope',
    caveat:
      'Cet itinéraire sert de référence pour le projet à l’étude. Il ne confirme ni la tenue du voyage ni les conditions d’une éventuelle offre Humanitas.',
  },
  en: {
    eyebrow: 'Vietnam · Cambodia',
    title: 'A journey along the Mekong',
    intro:
      'An eleven-day journey from Ho Chi Minh City to Siem Reap, with a Mekong cruise, an overland transfer and visits to the temples of Angkor.',
    mapLabel: 'Schematic map of the Mekong itinerary from Vietnam to Cambodia',
    mapNote:
      'Schematic map: the lines show the order of the stops, not the exact sailing route. The transfer to Siem Reap is by road; days 9–11 are spent in the Angkor region. Scroll the map horizontally on mobile.',
    highlightsTitle: 'Trip highlights',
    includedExcursions: 'Included excursions',
    mustSee: 'Must-see experiences',
    highlights: [
      'An authentic, lively journey in a small group.',
      'A unique sailing through the Chao Gao Canal.',
      'Mekong discoveries by bicycle, kayak, sampan and on foot.',
      'Historic cities including Phnom Penh and Ho Chi Minh City.',
      'Meet local villagers and discover daily life in Sa Dec and Cai Be.',
      'A pottery-throwing demonstration and a cooking class for a cultural immersion.',
      'Climb the remarkable hill of Oudong.',
      'Visit four iconic temples of Angkor.',
    ],
    onboardTitle: 'All-inclusive onboard',
    onboardSubtitle: 'CroisiEurope highlights',
    onboardInclusions: [
      'Full board, with drinks included at meals and at the bar.',
      'Refined local cuisine.',
      'An audio-guide system during excursions.',
      'An introduction to the captain and crew.',
      'A cruise host or cruise director onboard.',
      'Onboard entertainment and/or lectures.',
      'Assistance and repatriation insurance.',
      'Port taxes.',
    ],
    inclusionNote:
      'These services are listed on the CroisiEurope reference page; they do not confirm the services of any future ÆRIA Humanitas trip.',
    daysTitle: 'The journey, day by day',
    videoTitle: 'Discover the Mekong',
    videoDescription: 'Travel overview video of the Mekong journey',
    source: 'Itinerary presented by CroisiEurope for the 2028 edition.',
    sourceLink: 'View the CroisiEurope trip page',
    caveat:
      'This itinerary is a reference for the project under consideration. It does not confirm that a trip will take place or define any future Humanitas offer.',
  },
} as const

const sourceUrl =
  'https://www.croisieurope-canada.com/fr/croisiere/mekong-autrement-aventure-sites-incontournables-classique?edition=2028'

export function MekongItinerary({ locale }: { locale: Locale }) {
  const text = copy[locale]
  const itineraryDays = days[locale]

  return (
    <section id="itinerary" className="scroll-mt-24 bg-white py-20 sm:py-28 dark:bg-mist-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            {text.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-mist-950 sm:text-5xl dark:text-white">
            {text.title}
          </h2>
          <p className="mt-5 text-lg/8 text-mist-700 dark:text-mist-300">{text.intro}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start dark:border-white/10">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.18em] text-mist-600 uppercase dark:text-mist-300">
              {text.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-3xl tracking-tight text-mist-950 dark:text-white">
              {locale === 'fr' ? 'Le parcours en un regard' : 'The route at a glance'}
            </h3>
            <div className="relative mt-6 aspect-square h-auto w-full overflow-hidden border border-mist-200 dark:border-white/10">
              <Image
                src="/img/itineraries/mekong/mekong.webp"
                width={1280}
                height={1280}
                alt={text.mapLabel}
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <p className="mt-5 text-sm/6 text-mist-600 dark:text-mist-400">{text.caveat}</p>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-mist-800 underline decoration-mist-800/30 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-mist-300"
            >
              {text.sourceLink} ↗
            </a>
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-tight text-mist-950 dark:text-white">{text.daysTitle}</h3>
            <div className="mt-6 divide-y divide-mist-200 border-t border-mist-200 dark:divide-white/15 dark:border-white/15">
              {itineraryDays.map(([day, place, description], index) => (
                <div
                  key={day}
                  className="group relative grid grid-cols-[88px_minmax(0,1fr)] gap-5 bg-white py-6 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6 dark:bg-mist-950"
                >
                  <div className="relative aspect-square overflow-hidden bg-mist-100">
                    <Image
                      src={`/img/itineraries/mekong/J${index + 1}.webp`}
                      width={1280}
                      height={1280}
                      alt=""
                      sizes="(min-width: 640px) 140px, 88px"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-mist-500 uppercase dark:text-mist-400">
                      {day}
                    </p>
                    <h4 className="font-display text-lg leading-snug font-semibold text-mist-950 dark:text-white">
                      {place}
                    </h4>
                    <p className="mt-2 text-sm/6 text-mist-700 dark:text-mist-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="inclusions" className="mt-16 scroll-mt-28 border-t border-mist-200 pt-10 dark:border-white/15">
          <h3 className="mb-6 font-display text-3xl tracking-tight text-mist-950 dark:text-white">
            {locale === 'fr' ? 'Expériences et prestations de référence' : 'Reference experiences and services'}
          </h3>
          <details className="group border-b border-mist-200 py-6 dark:border-white/15">
            <summary className="cursor-pointer font-display text-2xl tracking-tight text-mist-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-white">
              {text.highlightsTitle}
            </summary>
            <h4 className="mt-6 text-sm font-semibold tracking-[0.12em] text-mist-600 uppercase dark:text-mist-400">
              {text.includedExcursions}
            </h4>
            <ul className="mt-3 flex flex-col gap-3 text-sm/6 text-mist-700 dark:text-mist-300">
              {text.highlights.slice(0, 2).map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="text-mist-400">
                    •
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-sm font-semibold tracking-[0.12em] text-mist-600 uppercase dark:text-mist-400">
              {text.mustSee}
            </h4>
            <ul className="mt-3 flex flex-col gap-3 text-sm/6 text-mist-700 dark:text-mist-300">
              {text.highlights.slice(2).map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="text-mist-400">
                    •
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </details>

          <details className="group border-b border-mist-200 py-6 dark:border-white/15">
            <summary className="cursor-pointer font-display text-2xl tracking-tight text-mist-950 focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-white">
              {text.onboardTitle}
            </summary>
            <h4 className="mt-6 text-sm font-semibold tracking-[0.12em] text-mist-600 uppercase dark:text-mist-400">
              {text.onboardSubtitle}
            </h4>
            <ul className="mt-3 flex flex-col gap-3 text-sm/6 text-mist-700 dark:text-mist-300">
              {text.onboardInclusions.map((inclusion) => (
                <li key={inclusion} className="flex gap-3">
                  <span aria-hidden="true" className="text-mist-400">
                    •
                  </span>
                  {inclusion}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-mist-950/10 pt-4 text-xs/5 text-mist-600 dark:border-white/10 dark:text-mist-400">
              {text.inclusionNote}
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
