'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function HeroBackgroundMedia() {
  const [videoAllowed, setVideoAllowed] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopViewport = window.matchMedia('(min-width: 768px)')
    const updatePlayback = () => setVideoAllowed(!motionPreference.matches && desktopViewport.matches)

    updatePlayback()
    motionPreference.addEventListener('change', updatePlayback)
    desktopViewport.addEventListener('change', updatePlayback)
    return () => {
      motionPreference.removeEventListener('change', updatePlayback)
      desktopViewport.removeEventListener('change', updatePlayback)
    }
  }, [])

  return (
    <>
      <Image
        src="/img/photos/aeria-humanitas-hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
      />
      {videoAllowed && (
        <video
          className="absolute inset-0 -z-10 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img/photos/aeria-humanitas-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/aeria-humanitas-optimized.mp4" type="video/mp4" />
        </video>
      )}
    </>
  )
}
