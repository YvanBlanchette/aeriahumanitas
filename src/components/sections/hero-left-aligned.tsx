import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'
import { HeroBackgroundMedia } from './hero-background-media'

export function HeroLeftAligned({
  eyebrow,
  headline,
  subheadline,
  cta,
  demo,
  footer,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  demo?: ReactNode
  footer?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section
      className={clsx(
        'relative isolate flex min-h-[min(900px,90svh)] flex-col overflow-hidden bg-mist-950 pt-[calc(var(--scroll-padding-top)+5rem)] pb-12 text-white',
        className,
      )}
      {...props}
    >
      <HeroBackgroundMedia />
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-black/85 via-black/45 to-black/15" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
      <Container className="relative z-10 flex flex-1 flex-col justify-center gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex max-w-4xl flex-col items-start gap-6">
            {eyebrow}
            <Heading
              color="light"
              className="max-w-5xl text-5xl/none tracking-[-0.055em] sm:text-7xl/none lg:text-8xl/none"
            >
              {headline}
            </Heading>
            <Text size="lg" className="flex max-w-xl flex-col gap-4 text-white/80">
              {subheadline}
            </Text>
            {cta}
          </div>
          {demo}
        </div>
        {footer && <div className="mt-auto">{footer}</div>}
      </Container>
    </section>
  )
}
