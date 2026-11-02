import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { HomePage } from '@/components/pages/home-page'
import { isLocale, localizedPath } from '@/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()
  return {
    alternates: {
      canonical: localizedPath(localeParam),
      languages: { 'fr-CA': '/fr', 'en-CA': '/en' },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HomePage locale={locale} />
}
