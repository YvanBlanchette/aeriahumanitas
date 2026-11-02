import { notFound, redirect } from 'next/navigation'

import { isLocale, localizedPath } from '@/i18n'

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  redirect(localizedPath(locale, '/#impact'))
}
