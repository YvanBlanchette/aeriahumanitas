import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import type { Locale } from '@/i18n'
import { localizedPath } from '@/i18n'
import Image from 'next/image'

export function HomeMission({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section id="mission" className="bg-white py-20 sm:py-28 dark:bg-mist-950">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start gap-5">
            <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
              Notre mission
            </p>
            <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white">
              Voyager avec intention. Laisser une empreinte positive.
            </h2>
            <p className="max-w-xl text-lg/8 text-mist-700 dark:text-mist-300">
              Nous contribuons à l’amélioration des conditions de vie de communautés défavorisées, notamment l’accès aux
              services essentiels, à l’éducation et aux possibilités économiques grâce à nos partenariats avec des
              organismes locaux.
            </p>
            <ButtonLink href={localizedPath(locale, '/about')} size="lg" className="mt-1 gap-2">
              Découvrir notre approche <ArrowNarrowRightIcon />
            </ButtonLink>
          </div>
          <div className="relative min-h-[22rem] sm:min-h-[32rem]">
            <div className="absolute top-0 left-0 z-10 aspect-[4/3] w-[74%] overflow-hidden">
              <Image
                src="/img/photos/asia.webp"
                alt="Voyageurs à la rencontre de personnes d’un village"
                fill
                sizes="(min-width: 1024px) 35vw, 75vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 z-20 aspect-[4/3] w-[68%] overflow-hidden border-t-8 border-l-8 border-[#f4f2ed] bg-mist-200 dark:border-mist-950">
              <Image
                src="/img/photos/kenya.webp"
                alt="Voyageurs partageant un moment avec une famille locale"
                fill
                sizes="(min-width: 1024px) 35vw, 70vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    )
  return (
    <section id="mission" className="bg-[#f4f2ed] py-20 sm:py-28 dark:bg-mist-950">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
            Our mission
          </p>
          <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white">
            Travel with purpose. Leave a positive impact.
          </h2>
          <p className="max-w-xl text-lg/8 text-mist-700 dark:text-mist-300">
            We aim to contribute to better living conditions with local organizations through access to essential
            services, education, economic opportunity, and greater understanding of international development.
          </p>
          <ButtonLink href={localizedPath(locale, '/about')} size="lg" className="mt-1 gap-2">
            Learn about our approach <ArrowNarrowRightIcon />
          </ButtonLink>
        </div>
        <div className="relative min-h-[22rem] sm:min-h-[32rem]">
          <div className="absolute top-0 left-0 z-10 aspect-[4/3] w-[74%] overflow-hidden">
            <Image
              src="/img/photos/asia.webp"
              alt="Travelers meeting local residents in a village"
              fill
              sizes="(min-width: 1024px) 35vw, 75vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 z-20 aspect-[4/3] w-[68%] overflow-hidden border-t-8 border-l-8 border-[#f4f2ed] bg-mist-200 dark:border-mist-950">
            <Image
              src="/img/photos/kenya.webp"
              alt="Travelers sharing a moment with a local family"
              fill
              sizes="(min-width: 1024px) 35vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
