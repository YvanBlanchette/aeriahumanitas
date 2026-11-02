export const locales = ['fr', 'en'] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localizedPath(locale: Locale, path: string = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const prefix = locale === 'fr' ? '/fr' : '/en'
  return normalizedPath === '/' ? prefix : `${prefix}${normalizedPath}`
}

export function alternateLocalePath(pathname: string, locale: Locale) {
  const currentPrefix = locale === 'en' ? '/en' : '/fr'
  const alternatePrefix = locale === 'en' ? '/fr' : '/en'
  const path = pathname.replace(new RegExp(`^${currentPrefix}(?=/|$)`), '') || '/'
  return path === '/' ? alternatePrefix : `${alternatePrefix}${path}`
}
