import { ButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroLeftAligned } from '@/components/sections/hero-left-aligned'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/i18n'

export function HomeHero({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <HeroLeftAligned
        id="hero"
        eyebrow={
          <p className="max-w-full text-xs font-medium tracking-[0.18em] text-white/80 uppercase sm:text-sm">
            Un programme de voyages solidaires
          </p>
        }
        headline={
          <>
            Voyager autrement.
            <br />
            Se rapprocher, humainement.
          </>
        }
        subheadline={
          <p>
            ÆRIA Humanitas allie voyages solidaires et soutien aux initiatives locales de lutte contre la pauvreté.
            Chaque voyage du programme contribue à cette mission, en collaboration avec ÆRIA Voyages.
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center gap-6">
            <ButtonLink href={localizedPath(locale, '/about')} color="light" size="lg" className="gap-2">
              Découvrir ÆRIA Humanitas
            </ButtonLink>
            <a
              href="#upcoming-trips"
              className="inline-flex items-center gap-3 border-b border-white/50 pb-2 text-sm font-medium text-white transition hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Explorer le projet Mékong
            </a>
          </div>
        }
        footer={
          <div className="grid gap-4 border-t border-white/25 pt-6 text-[10px] font-medium tracking-[0.16em] text-white/75 uppercase sm:grid-cols-3">
            <span>01 / La rencontre</span>
            <span>02 / Le soutien local</span>
            <span>03 / La transparence</span>
          </div>
        }
      />
    )
  return (
    <HeroLeftAligned
      id="hero"
      eyebrow={
        <p className="max-w-full text-xs font-medium tracking-[0.18em] text-white/80 uppercase sm:text-sm">
          A solidarity travel program
        </p>
      }
      headline={
        <>
          Travel with purpose.
          <br />
          Connect through humanity.
        </>
      }
      subheadline={
        <p>
          ÆRIA Humanitas brings solidarity travel together with support for community-led initiatives against poverty.
          Every program voyage contributes to this mission, in collaboration with ÆRIA Voyages.
        </p>
      }
      cta={
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href={localizedPath(locale, '/about')} color="light" size="lg" className="gap-2">
            Discover ÆRIA Humanitas <ArrowNarrowRightIcon />
          </ButtonLink>
          <a
            href="#upcoming-trips"
            className="inline-flex items-center gap-3 border-b border-white/50 pb-2 text-sm font-medium text-white transition hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Explore the Mekong project <ArrowNarrowRightIcon />
          </a>
        </div>
      }
      footer={
        <div className="grid gap-4 border-t border-white/25 pt-6 text-[10px] font-medium tracking-[0.16em] text-white/75 uppercase sm:grid-cols-3">
          <span>01 / Connection</span>
          <span>02 / Local support</span>
          <span>03 / Transparency</span>
        </div>
      }
    />
  )
}
