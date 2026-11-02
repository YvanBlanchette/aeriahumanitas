import { HomeApproach } from '@/components/home/home-approach'
import { HomeContact } from '@/components/home/home-contact'
import { HomeDestinations } from '@/components/home/home-destinations'
import { HomeFaqs } from '@/components/home/home-faqs'
import { HomeHero } from '@/components/home/home-hero'
import { HomeImpact } from '@/components/home/home-impact'
import { HomeMission } from '@/components/home/home-mission'
import { HomeNewsletter } from '@/components/home/home-newsletter'
import { HomeProjects } from '@/components/home/home-projects'
import { ProjectNextSteps } from '@/components/sections/project-next-steps'
import type { Locale } from '@/i18n'

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="[&_a]:rounded-none [&_article]:rounded-none [&_button]:rounded-none [&_input]:rounded-none [&_textarea]:rounded-none">
      <HomeHero locale={locale} />
      <HomeMission locale={locale} />
      <HomeImpact locale={locale} />
      <HomeApproach locale={locale} />
      <HomeDestinations locale={locale} />
      <HomeProjects locale={locale} />
      {locale === 'en' && <ProjectNextSteps locale={locale} />}
      <HomeFaqs locale={locale} />
      <HomeNewsletter locale={locale} />
      <HomeContact locale={locale} />
    </div>
  )
}
