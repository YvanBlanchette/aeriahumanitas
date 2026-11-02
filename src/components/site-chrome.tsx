'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ButtonLink } from '@/components/elements/button'
import { MessengerButton } from '@/components/elements/messenger-button'
import { FacebookIcon } from '@/components/icons/social/facebook-icon'
import { InstagramIcon } from '@/components/icons/social/instagram-icon'
import { TikTokIcon } from '@/components/icons/social/tiktok-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { Footer, FooterCategory, FooterLink } from '@/components/sections/Footer'
import { Navbar, NavbarLink, NavbarLogo } from '@/components/sections/Navbar'
import { alternateLocalePath, localizedPath, type Locale } from '@/i18n'

const socialProfiles: { name: string; icon: typeof FacebookIcon; href: string | null }[] = [
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/aeriahumanitas' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/aeriahumanitas' },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@aeriahumanitas' },
  { name: 'YouTube', icon: YouTubeIcon, href: 'https://www.youtube.com/@aeriahumanitas' },
  { name: 'X', icon: XIcon, href: 'https://www.x.com/@aeriahumanitas' },
]

export function SiteChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const pathname = usePathname()
  const alternateLocale = locale === 'fr' ? 'en' : 'fr'
  const alternateHref = alternateLocalePath(pathname, locale)
  const copy =
    locale === 'fr'
      ? {
          mission: 'Mission',
          impact: 'Impact',
          destinations: 'Destinations',
          trips: 'Voyages',
          contact: 'Nous joindre',
          menu: 'Ouvrir le menu',
          closeMenu: 'Fermer le menu',
          home: 'Accueil ÆRIA Humanitas',
          footerDescription:
            'ÆRIA Humanitas est une initiative à vocation non lucrative qui porte un programme de voyages solidaires. ÆRIA Voyages est une entreprise commerciale de voyage; les voyages solidaires et les voyages réguliers sont présentés séparément.',
          discover: 'Découvrir',
          about: 'À propos d’ÆRIA Humanitas',
          commitment: 'Notre engagement',
          helps: 'Comment chaque voyage contribue',
          approach: 'Notre approche',
          updates: 'Nouvelles du projet',
          contactUs: 'Nous joindre',
          contactLegal: 'Contact et confidentialité',
          email: 'Écrire à ÆRIA Humanitas',
          privacy: 'Confidentialité',
          transparency: 'Suivi et transparence',
          skip: 'Passer au contenu principal',
          language: 'English',
          languageLabel: 'Lire ce site en anglais',
        }
      : {
          mission: 'Mission',
          impact: 'Impact',
          destinations: 'Destinations',
          trips: 'Projects',
          contact: 'Contact us',
          menu: 'Open menu',
          closeMenu: 'Close menu',
          home: 'ÆRIA Humanitas home',
          footerDescription:
            'ÆRIA Humanitas is an initiative with a non-profit purpose and a solidarity travel program. ÆRIA Voyages is a distinct commercial travel business; solidarity-program voyages and regular voyages are presented separately.',
          discover: 'Discover',
          about: 'About ÆRIA Humanitas',
          commitment: 'Our commitment',
          helps: 'How each voyage helps',
          approach: 'Our approach',
          updates: 'Project updates',
          contactUs: 'Contact us',
          contactLegal: 'Contact & privacy',
          email: 'Email ÆRIA Humanitas',
          privacy: 'Privacy information',
          transparency: 'Project reporting and transparency',
          skip: 'Skip to main content',
          language: 'Français',
          languageLabel: 'Lire ce site en français',
        }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-mist-950"
      >
        {copy.skip}
      </a>
      <Navbar
        id="navbar"
        menuLabel={copy.menu}
        closeMenuLabel={copy.closeMenu}
        links={
          <>
            <NavbarLink href={localizedPath(locale, '/#mission')}>{copy.mission}</NavbarLink>
            <NavbarLink href={localizedPath(locale, '/#impact')}>{copy.impact}</NavbarLink>
            <NavbarLink href={localizedPath(locale, '/#destinations')}>{copy.destinations}</NavbarLink>
            <NavbarLink href={localizedPath(locale, '/#upcoming-trips')}>{copy.trips}</NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href={localizedPath(locale)}>
            <Image
              src="/img/logos/aeria-humanitas-horizontal.svg"
              alt="ÆRIA Humanitas"
              className="group-data-[scrolled=false]:hidden"
              width={300}
              height={28}
            />
            <Image
              src="/img/logos/aeria-humanitas-horizontal--white.svg"
              alt="ÆRIA Humanitas"
              className="group-data-[scrolled=true]:hidden"
              width={300}
              height={28}
            />
          </NavbarLogo>
        }
        actions={
          <>
            <Link
              href={alternateHref}
              lang={alternateLocale === 'fr' ? 'fr-CA' : 'en-CA'}
              aria-label={copy.languageLabel}
              className="text-sm font-semibold text-inherit underline decoration-current/40 underline-offset-4"
            >
              {copy.language}
            </Link>
            <ButtonLink href={localizedPath(locale, '/#contact')}>{copy.contact}</ButtonLink>
          </>
        }
      />

      {children}

      <Footer
        id="footer"
        cta={
          <div className="flex max-w-md flex-col items-start gap-4">
            <Link href={localizedPath(locale)} aria-label={copy.home}>
              <Image
                src="/img/logos/aeria-humanitas-horizontal.svg"
                alt="ÆRIA Humanitas"
                className="dark:hidden"
                width={325}
                height={25}
              />
              <Image
                src="/img/logos/aeria-humanitas-horizontal--white.svg"
                alt=""
                aria-hidden="true"
                className="hidden dark:block"
                width={325}
                height={25}
              />
            </Link>
            <p className="text-sm/7 text-mist-700 dark:text-mist-400">{copy.footerDescription}</p>
            <ul
              aria-label={locale === 'fr' ? 'Réseaux sociaux' : 'Social media'}
              className="-ml-2 flex flex-wrap items-center gap-2"
            >
              {socialProfiles.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex size-11 items-center justify-center text-mist-600 transition-colors hover:text-[#977447] focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-mist-400 dark:hover:text-white"
                    >
                      <Icon className="size-8" aria-hidden="true" />
                    </a>
                  ) : (
                    <span
                      role="img"
                      aria-label={name}
                      className="flex size-11 items-center justify-center text-mist-600 dark:text-mist-400"
                    >
                      <Icon className="size-8" aria-hidden="true" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        }
        links={
          <>
            <FooterCategory title={copy.discover}>
              <FooterLink href={localizedPath(locale, '/#mission')}>{copy.mission}</FooterLink>
              <FooterLink href={localizedPath(locale, '/#destinations')}>{copy.destinations}</FooterLink>
              <FooterLink href={localizedPath(locale, '/#upcoming-trips')}>{copy.trips}</FooterLink>
              <FooterLink href={localizedPath(locale, '/about')}>{copy.about}</FooterLink>
            </FooterCategory>
            <FooterCategory title={copy.commitment}>
              <FooterLink href={localizedPath(locale, '/#impact')}>{copy.helps}</FooterLink>
              <FooterLink href={localizedPath(locale, '/#our-approach')}>{copy.approach}</FooterLink>
              <FooterLink href={localizedPath(locale, '/#newsletter')}>{copy.updates}</FooterLink>
              <FooterLink href={localizedPath(locale, '/#contact')}>{copy.contactUs}</FooterLink>
            </FooterCategory>
            <FooterCategory title={copy.contactLegal}>
              <FooterLink href="mailto:yvanblanchette@aeriavoyages.com">{copy.email}</FooterLink>
              <FooterLink href={localizedPath(locale, '/impact-report')}>{copy.transparency}</FooterLink>
              <FooterLink href={localizedPath(locale, '/privacy-policy')}>{copy.privacy}</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint={`© ${new Date().getFullYear()} ÆRIA Humanitas`}
      />
      <MessengerButton locale={locale} />
    </>
  )
}
