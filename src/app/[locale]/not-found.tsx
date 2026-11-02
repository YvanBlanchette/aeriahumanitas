'use client'

import { usePathname } from 'next/navigation'

import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { localizedPath } from '@/i18n'

export default function NotFound() {
  const locale = usePathname().startsWith('/en') ? 'en' : 'fr'
  const isFrench = locale === 'fr'

  return (
    <HeroSimpleCentered
      headline={isFrench ? 'Page introuvable' : 'Page not found'}
      subheadline={
        <p>
          {isFrench
            ? 'Désolé, la page que vous cherchez est introuvable.'
            : 'Sorry, but the page you were looking for could not be found.'}
        </p>
      }
      cta={
        <Link href={localizedPath(locale, '/')}>
          {isFrench ? 'Retour à l’accueil' : 'Go back home'} <ArrowNarrowRightIcon />
        </Link>
      }
    />
  )
}
