export const destinations = [
  {
    name: 'Cambodia',
    nameFr: 'Cambodge',
    region: 'Southeast Asia',
    regionFr: 'Asie du Sud-Est',
    reason:
      'A region being considered for the first Mekong project. Any support would depend on credible local organizations and initiatives being confirmed.',
    reasonFr:
      'Une région envisagée pour le premier projet sur le Mékong. Tout soutien dépendra de la confirmation d’organismes locaux crédibles et de leurs initiatives.',
  },
  {
    name: 'Vietnam',
    nameFr: 'Vietnam',
    region: 'Southeast Asia',
    regionFr: 'Asie du Sud-Est',
    reason:
      'Vietnam is part of the Mekong project under consideration. The itinerary and any local initiatives remain unconfirmed.',
    reasonFr:
      'Le Vietnam fait partie du projet sur le Mékong à l’étude. L’itinéraire et toute initiative locale restent à confirmer.',
  },
  {
    name: 'India',
    nameFr: 'Inde',
    region: 'South Asia',
    regionFr: 'Asie du Sud',
    reason:
      'A possible future destination. Any project here would require local consultation and partners to be identified.',
    reasonFr:
      'Une destination possible pour l’avenir. Tout projet nécessiterait des consultations locales et l’identification de partenaires.',
  },
  {
    name: 'Southern Africa',
    nameFr: 'Afrique australe',
    region: 'Southern Africa',
    regionFr: 'Afrique australe',
    reason:
      'A possible future region, not a confirmed program. Any initiative would be developed with local organizations and reflect community-identified priorities.',
    reasonFr:
      'Une région possible pour l’avenir, et non un programme confirmé. Toute initiative serait élaborée avec des organismes locaux et selon les priorités définies par les communautés.',
  },
  {
    name: 'Egypt',
    nameFr: 'Égypte',
    region: 'North Africa',
    regionFr: 'Afrique du Nord',
    reason:
      'A possible future destination, not a confirmed program. Any initiative would require local consultation and trusted partners to be identified.',
    reasonFr:
      'Une destination possible pour l’avenir, et non un programme confirmé. Toute initiative nécessiterait des consultations locales et l’identification de partenaires de confiance.',
  },
  {
    name: 'South America',
    nameFr: 'Amérique du Sud',
    region: 'Across the continent',
    regionFr: 'À travers le continent',
    reason:
      'A possible future region for respectful cultural exchange and locally shaped initiatives, subject to further study.',
    reasonFr:
      'Une région possible pour des échanges culturels respectueux et des initiatives définies localement, sous réserve d’études supplémentaires.',
  },
  {
    name: 'Greenland & the Arctic',
    nameFr: 'Groenland et Arctique',
    region: 'The northern regions',
    regionFr: 'Les régions nordiques',
    reason:
      'A future possibility that would require careful consideration of local knowledge, culture, and sensitive environments.',
    reasonFr:
      'Une possibilité future qui nécessiterait une attention particulière aux savoirs locaux, aux cultures et aux milieux sensibles.',
  },
  {
    name: 'The Galápagos Islands',
    nameFr: 'Îles Galápagos',
    region: 'Pacific Ocean',
    regionFr: 'Océan Pacifique',
    reason: 'A possible future destination. No voyage or community initiative is currently confirmed here.',
    reasonFr:
      'Une destination possible pour l’avenir. Aucun voyage ni projet communautaire n’y est actuellement confirmé.',
  },
] as const

export const destinationSvgIds = {
  Cambodia: ['destination-cambodia'],
  Vietnam: ['destination-vietnam'],
  India: ['destination-india'],
  'Southern Africa': ['destination-southern-africa'],
  Egypt: ['destination-egypt'],
  'South America': [
    'destination-south-america-6',
    'destination-south-america-7',
    'destination-south-america-8',
    'destination-south-america-10',
    'destination-south-america-11',
    'destination-south-america-12',
    'destination-south-america-13',
    'destination-south-america-14',
    'destination-south-america-15',
    'destination-south-america-16',
    'destination-south-america-17',
    'destination-south-america-18',
    'destination-south-america-19',
    'destination-south-america-20',
    'destination-south-america-21',
    'destination-south-america-22',
    'destination-south-america-23',
    'destination-south-america-24',
    'destination-south-america-26',
  ],
  'Greenland & the Arctic': ['destination-greenland'],
  'The Galápagos Islands': ['destination-galapagos'],
} satisfies Record<(typeof destinations)[number]['name'], string[]>
