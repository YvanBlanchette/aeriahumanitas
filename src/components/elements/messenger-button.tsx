import type { Locale } from '@/i18n'

export function MessengerButton({ locale }: { locale: Locale }) {
  const label =
    locale === 'fr' ? 'Écrivez-nous sur Messenger (nouvel onglet)' : 'Message us on Messenger (opens in a new tab)'

  return (
    <a
      href="https://m.me/aeriahumanitas"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 flex size-18 items-center justify-center rounded-full bg-[#977447] text-white shadow-[0_6px_24px_#97744740] transition-colors hover:bg-[#80613b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#977447] sm:right-10 sm:bottom-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#977447]/30 group-hover:[animation-play-state:paused] motion-safe:animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"
      />
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="relative size-10">
        <path d="M12 2C6.37 2 2 6.13 2 11.7c0 2.91 1.2 5.43 3.15 7.17.16.14.26.34.27.56l.05 1.78a.8.8 0 0 0 1.12.71l1.99-.87a.8.8 0 0 1 .54-.04c.91.25 1.87.39 2.88.39 5.63 0 10-4.13 10-9.7S17.63 2 12 2Zm6.01 7.46-2.94 4.67a1.5 1.5 0 0 1-2.17.4l-2.34-1.76a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.67a1.5 1.5 0 0 1 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z" />
      </svg>
    </a>
  )
}
