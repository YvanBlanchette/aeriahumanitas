import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SiteChrome } from '@/components/site-chrome'
import { isLocale, locales, type Locale } from '@/i18n'
import '../globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()

  const isFrench = localeParam === 'fr'
  const title = isFrench
    ? 'ÆRIA Humanitas | Voyager avec cœur, soutenir les communautés'
    : 'ÆRIA Humanitas | Travel with heart, support communities'
  const description = isFrench
    ? 'ÆRIA Humanitas développe des voyages solidaires pour soutenir des initiatives menées par les communautés.'
    : 'ÆRIA Humanitas is developing solidarity voyages to support community-led initiatives.'

  return {
    metadataBase: new URL('https://aeriahumanitas.com'),
    title: { default: title, template: `%s | ÆRIA Humanitas` },
    description,
    openGraph: {
      title: 'ÆRIA Humanitas',
      description,
      siteName: 'ÆRIA Humanitas',
      locale: isFrench ? 'fr_CA' : 'en_CA',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  const locale: Locale = localeParam

  return (
    <html lang={locale === 'fr' ? 'fr-CA' : 'en-CA'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteChrome locale={locale}>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </SiteChrome>
      </body>
    </html>
  )
}
