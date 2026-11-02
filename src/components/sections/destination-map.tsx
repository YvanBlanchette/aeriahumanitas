'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { localizedPath, type Locale } from '@/i18n'
import { destinations, destinationSvgIds } from './destination-map-data'
import styles from './destination-map.module.css'

type Destination = (typeof destinations)[number]

const destinationPhotos: Partial<Record<Destination['name'], string>> = {
  'Greenland & the Arctic': '/img/photos/greenland.webp',
  Egypt: '/img/photos/egypt.webp',
  'South America': '/img/photos/amazone.webp',
}

export function DestinationMap({ locale = 'en' }: { locale?: Locale }) {
  const copy =
    locale === 'fr'
      ? {
          fullscreenMap: 'Carte des destinations en plein écran',
          openFullscreen: 'Ouvrir la carte des destinations en plein écran',
          openMap: 'Ouvrir la carte en plein écran',
          closeMap: 'Fermer la carte en plein écran',
          horizon: 'Destinations à l’horizon',
          showDetails: 'Afficher les détails de {name}',
          closeDetails: 'Fermer les détails de la destination',
          mapDescription: 'Carte du monde interactive. Sélectionnez un pays en surbrillance.',
          mapError: 'La carte interactive n’a pas pu être chargée.',
          possibility:
            'Cette destination est une possibilité, et non un programme confirmé. Les détails du projet et les partenaires locaux devront être confirmés avant toute offre de voyage.',
          clickCountry: 'Sélectionnez un pays en surbrillance pour découvrir la destination.',
          unconfirmed: 'Les destinations indiquées ne sont pas des voyages confirmés.',
        }
      : {
          fullscreenMap: 'Full-screen destination map',
          openFullscreen: 'Open destination map full screen',
          openMap: 'Open map full screen',
          closeMap: 'Close full-screen map',
          horizon: 'Destinations on our horizon',
          showDetails: 'Show details for {name}',
          closeDetails: 'Close destination details',
          mapDescription: 'Interactive world map. Select a highlighted country.',
          mapError: 'The interactive map could not be loaded.',
          possibility:
            'This destination is a possibility, not a confirmed program. Project details and local partners must be confirmed before any voyage is offered.',
          clickCountry: 'Select a highlighted country to explore the destination.',
          unconfirmed: 'Destinations shown are not confirmed trips.',
        }
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mapLoadError, setMapLoadError] = useState(false)
  const [svgMarkup, setSvgMarkup] = useState('')
  const mapRef = useRef<HTMLDivElement>(null)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const openMapButtonRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const focusMapControl = useCallback(() => openMapButtonRef.current?.focus(), [])
  const activeDestinationRef = useRef(activeDestination)
  const nameOf = (destination: Destination) => (locale === 'fr' ? destination.nameFr : destination.name)
  const isMekong = activeDestination?.name === 'Cambodia' || activeDestination?.name === 'Vietnam'
  const photo = activeDestination ? destinationPhotos[activeDestination.name] : undefined

  useEffect(() => {
    const controller = new AbortController()
    fetch('/img/world-map.svg', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Map request failed: ${response.status}`)
        return response.text()
      })
      .then(setSvgMarkup)
      .catch(() => {
        if (!controller.signal.aborted) setMapLoadError(true)
      })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!isFullscreen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    openMapButtonRef.current?.focus()
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsFullscreen(false)
      if (event.key !== 'Tab') return
      const elements = mapRef.current?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]')
      if (!elements?.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      const outside = !mapRef.current?.contains(document.activeElement)
      if (event.shiftKey && (document.activeElement === first || outside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || outside)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      // The inline map mounts again when its portal closes.
      requestAnimationFrame(() => {
        if (restoreFocusRef.current?.isConnected) restoreFocusRef.current.focus()
        else focusMapControl()
      })
    }
  }, [isFullscreen, focusMapControl])

  useEffect(() => {
    const container = svgContainerRef.current
    const svg = container?.querySelector('svg')
    if (!container || !svg) return

    for (const destination of destinations) {
      destinationSvgIds[destination.name].forEach((id, index) => {
        const shape = svg.querySelector<SVGGraphicsElement>(`#${id}`)
        if (!shape) return
        shape.setAttribute('data-destination', destination.name)
        shape.setAttribute('role', 'button')
        shape.setAttribute('tabindex', index === 0 ? '0' : '-1')
        shape.setAttribute(
          'aria-label',
          copy.showDetails.replace('{name}', locale === 'fr' ? destination.nameFr : destination.name),
        )
        shape.setAttribute('aria-controls', 'destination-details')
        shape.setAttribute('aria-pressed', String(activeDestinationRef.current?.name === destination.name))
        shape.style.removeProperty('fill')
      })
    }
    function destinationFor(event: Event) {
      const target = event.target instanceof Element ? event.target.closest('[data-destination]') : null
      return destinations.find((destination) => destination.name === target?.getAttribute('data-destination'))
    }
    function select(event: Event) {
      const destination = destinationFor(event)
      if (destination) setActiveDestination(destination)
    }
    function keydown(event: KeyboardEvent) {
      if (event.key !== 'Enter' && event.key !== ' ') return
      if (!destinationFor(event)) return
      event.preventDefault()
      select(event)
    }
    function highlight(event: Event, highlighted: boolean) {
      const destination = destinationFor(event)
      if (!destination) return
      for (const id of destinationSvgIds[destination.name]) {
        svg?.querySelector(`#${id}`)?.toggleAttribute('data-highlighted', highlighted)
      }
    }
    const enter = (event: Event) => highlight(event, true)
    const leave = (event: Event) => highlight(event, false)
    container.addEventListener('click', select)
    container.addEventListener('keydown', keydown)
    container.addEventListener('pointerover', enter)
    container.addEventListener('pointerout', leave)
    container.addEventListener('focusin', enter)
    container.addEventListener('focusout', leave)
    return () => {
      container.removeEventListener('click', select)
      container.removeEventListener('keydown', keydown)
      container.removeEventListener('pointerover', enter)
      container.removeEventListener('pointerout', leave)
      container.removeEventListener('focusin', enter)
      container.removeEventListener('focusout', leave)
    }
  }, [svgMarkup, isFullscreen, locale, copy.showDetails])

  useEffect(() => {
    activeDestinationRef.current = activeDestination
    for (const shape of svgContainerRef.current?.querySelectorAll('[data-destination]') ?? []) {
      shape.setAttribute('aria-pressed', String(shape.getAttribute('data-destination') === activeDestination?.name))
    }
  }, [activeDestination, svgMarkup, isFullscreen])

  const map = (
    <div
      ref={mapRef}
      role={isFullscreen ? 'dialog' : undefined}
      aria-modal={isFullscreen || undefined}
      aria-label={isFullscreen ? copy.fullscreenMap : undefined}
      className={
        isFullscreen
          ? 'fixed inset-0 z-[100] flex h-[100dvh] flex-col overflow-y-auto bg-[#f7f6f2] text-mist-950'
          : 'mt-12 overflow-hidden border border-mist-200 bg-[#f7f6f2] text-mist-950'
      }
    >
      <header className="flex items-center justify-between gap-4 border-b border-mist-200 bg-white px-5 py-5 sm:px-7">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="font-display text-3xl font-light text-[#977447]">
            08
          </span>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase">{copy.horizon}</h3>
            <p className="mt-1 hidden text-xs text-mist-500 sm:block">{copy.clickCountry}</p>
          </div>
        </div>
        <button
          ref={openMapButtonRef}
          type="button"
          onClick={() => {
            if (!isFullscreen) restoreFocusRef.current = document.activeElement as HTMLElement
            setIsFullscreen(!isFullscreen)
          }}
          aria-label={isFullscreen ? copy.closeMap : copy.openMap}
          className="inline-flex min-h-11 shrink-0 items-center gap-3 border border-mist-200 px-3 text-xs font-medium transition-colors hover:border-[#977447] hover:bg-mist-50 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="hidden sm:inline">
            {isFullscreen ? (locale === 'fr' ? 'Fermer' : 'Close') : locale === 'fr' ? 'Plein écran' : 'Full screen'}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-4"
          >
            <path d={isFullscreen ? 'M6 6l12 12M18 6L6 18' : 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5'} />
          </svg>
        </button>
      </header>
      <div className={`grid lg:grid-cols-[minmax(0,1fr)_320px] ${isFullscreen ? 'flex-1' : ''}`}>
        <div className={`${styles.surface} relative flex min-w-0 items-center px-3 py-8 sm:px-6 sm:py-10`}>
          <div className="relative aspect-[2266/1354] w-full">
            <div
              ref={svgContainerRef}
              role="group"
              aria-label={copy.mapDescription}
              className={`${styles.canvas} absolute inset-0 [&>svg]:block [&>svg]:size-full`}
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
            {!svgMarkup && !mapLoadError && (
              <p role="status" className="absolute inset-0 flex items-center justify-center text-xs text-mist-500">
                {locale === 'fr' ? 'Chargement de la carte…' : 'Loading map…'}
              </p>
            )}
            {mapLoadError && (
              <p role="alert" className="absolute inset-0 flex items-center justify-center p-6 text-sm text-red-800">
                {copy.mapError}
              </p>
            )}
          </div>
          <p
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-6 text-[9px] tracking-[0.2em] text-mist-400 uppercase"
          >
            Humanitas / Atlas
          </p>
        </div>
        <aside
          id="destination-details"
          aria-live="polite"
          aria-atomic="true"
          className="flex flex-col border-t border-mist-200 bg-white lg:border-t-0 lg:border-l"
        >
          {photo && (
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image src={photo} alt="" fill sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" />
            </div>
          )}
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-[#80613b] uppercase">
              {activeDestination
                ? locale === 'fr'
                  ? activeDestination.regionFr
                  : activeDestination.region
                : locale === 'fr'
                  ? 'Votre prochaine découverte'
                  : 'Your next discovery'}
            </p>
            <h4 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em]">
              {activeDestination
                ? nameOf(activeDestination)
                : locale === 'fr'
                  ? 'Un monde de possibles.'
                  : 'A world of possibilities.'}
            </h4>
            <p className="mt-4 text-sm/7 text-mist-600">
              {activeDestination
                ? locale === 'fr'
                  ? activeDestination.reasonFr
                  : activeDestination.reason
                : locale === 'fr'
                  ? 'Explorez les régions qui inspirent notre démarche. Choisissez une destination sur la carte ou dans la liste pour en savoir plus.'
                  : 'Explore the regions inspiring our approach. Select a destination on the map or in the list to learn more.'}
            </p>
            <div className="mt-6 border-t border-mist-200 pt-5">
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-wide uppercase">
                <span aria-hidden="true" className="size-1.5 bg-[#977447]" />
                {isMekong
                  ? locale === 'fr'
                    ? 'Projet Mékong · 2028 · À l’étude'
                    : 'Mekong project · 2028 · Under study'
                  : locale === 'fr'
                    ? 'Horizons envisagés'
                    : 'Future possibilities'}
              </p>
              {isMekong && (
                <Link
                  href={localizedPath(locale, '/trips/mekong-2028')}
                  className="mt-5 inline-flex items-center gap-3 border-b border-mist-950 pb-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {locale === 'fr' ? 'Découvrir le projet' : 'Explore the project'}
                  <ArrowNarrowRightIcon />
                </Link>
              )}
            </div>
          </div>
        </aside>
      </div>
      <div
        role="group"
        aria-label={copy.horizon}
        className="grid grid-cols-2 border-t border-mist-200 bg-white sm:grid-cols-4"
      >
        {destinations.map((destination, index) => (
          <button
            key={destination.name}
            type="button"
            aria-pressed={activeDestination?.name === destination.name}
            aria-controls="destination-details"
            onClick={() => setActiveDestination(destination)}
            className="group flex min-h-14 items-center gap-3 border-r border-b border-mist-200 px-4 py-3 text-left text-xs font-medium text-mist-700 transition-colors hover:bg-[#f1ede5] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#977447] aria-pressed:bg-mist-950 aria-pressed:text-white sm:px-5"
          >
            <span aria-hidden="true" className="text-[9px] text-[#977447] group-aria-pressed:text-[#d4b98f]">
              0{index + 1}
            </span>
            <span className="flex-1">{nameOf(destination)}</span>
            <span aria-hidden="true" className="text-[#977447] group-aria-pressed:text-[#d4b98f]">
              <ArrowNarrowRightIcon className="size-3 -rotate-45" />
            </span>
          </button>
        ))}
      </div>
      <p className="bg-white px-5 py-4 text-[11px]/5 text-mist-500 sm:px-7">{copy.unconfirmed}</p>
    </div>
  )
  return isFullscreen ? createPortal(map, document.body) : map
}
