import type { Locale } from '@/i18n'
import Image from 'next/image'

export function HomeImpact({ locale }: { locale: Locale }) {
  if (locale === 'fr')
    return (
      <section id="impact" aria-labelledby="impact-heading" className="bg-mist-100 dark:bg-mist-900">
        <div className="grid items-stretch lg:min-h-[48rem] lg:grid-cols-[40%_60%]">
          <div className="relative min-h-72 overflow-hidden bg-mist-200 sm:min-h-96 lg:min-h-0 dark:bg-mist-950">
            <Image
              src="/img/photos/greenland.webp"
              alt="Paysage naturel au Groenland"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20">
            <div className="w-full max-w-3xl">
              <div className="flex flex-col items-start gap-5">
                <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
                  Comment chaque voyage contribue
                </p>
                <h2
                  id="impact-heading"
                  className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
                >
                  Chaque voyage du programme ÆRIA Humanitas contribue à la solidarité locale.
                </h2>
                <p className="text-base text-mist-700 dark:text-mist-300">
                  Chaque voyage vendu dans le cadre du programme ÆRIA Humanitas comprend une contribution de solidarité
                  de 150 $ par passager qui est automatiquement ajoutée au prix total du voyage.
                </p>
                <p className="text-base text-mist-700 dark:text-mist-300">
                  L’agence de voyage ajoute un montant additionnel de 150 $ par passager à même ses profits, pour une
                  contribution totale de 300 $.
                </p>
                <p className="text-base">
                  La contribution de solidarité est ensuite versée à des organismes locaux de lutte contre la pauvreté.
                </p>
              </div>

              <div className="mt-8 grid gap-px bg-mist-200 sm:grid-cols-3 dark:bg-mist-700">
                <div className="bg-white p-6 dark:bg-mist-950">
                  <p className="text-sm font-medium text-mist-600 dark:text-mist-400">Contribution du passager</p>
                  <p className="mt-2 font-display text-4xl tracking-tight text-mist-950 dark:text-white">150 $ CA</p>
                  <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">Ajoutée au prix du voyage</p>
                </div>
                <div className="bg-white p-6 dark:bg-mist-950">
                  <p className="text-sm font-medium text-mist-600 dark:text-mist-400">Contribution Agence Voyage</p>
                  <p className="mt-2 font-display text-4xl tracking-tight text-mist-950 dark:text-white">150 $ CA</p>
                  <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">Issue des profits de l’agence</p>
                </div>
                <div className="bg-mist-950 p-5 text-white dark:bg-white dark:text-mist-950">
                  <p className="text-sm font-medium text-white/75 dark:text-mist-700">Contributions par passager</p>
                  <p className="mt-1 font-display text-4xl tracking-tight">300 $ CA</p>
                  <p className="mt-1 text-sm text-mist-300 dark:text-mist-400">Contributions totales</p>
                </div>
              </div>

              <p className="mt-4 text-sm/6 text-mist-600 dark:text-mist-400">
                La contribution fait partie du prix du voyage ÆRIA Humanitas et est obligatoire dans le cadre de ce
                programme.
              </p>

              <div className="mt-8 border-t border-mist-950/10 pt-6 dark:border-white/10">
                <h3 className="font-display text-xl tracking-tight text-mist-950 dark:text-white">
                  Des priorités locales, un soutien défini avec les communautés.
                </h3>
                <p className="mt-2 text-base/7 text-mist-700 dark:text-mist-300">
                  Le programme destine les contributions à des organismes crédibles établis dans chaque destination. Les
                  partenaires et initiatives seront confirmés pour chaque voyage avant sa mise en vente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  return (
    <section id="impact" aria-labelledby="impact-heading" className="bg-mist-100 dark:bg-mist-900">
      <div className="grid items-stretch lg:min-h-[48rem] lg:grid-cols-[40%_60%]">
        <div className="relative min-h-72 overflow-hidden bg-mist-200 sm:min-h-96 lg:min-h-0 dark:bg-mist-950">
          <Image
            src="/img/photos/greenland.webp"
            alt="Travelers sharing a moment with a local family"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col items-start gap-5">
              <p className="text-sm font-semibold tracking-[0.16em] text-mist-600 uppercase dark:text-mist-400">
                How each voyage helps
              </p>
              <h2
                id="impact-heading"
                className="font-display text-4xl leading-tight tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl dark:text-white"
              >
                A clear contribution for every Humanitas-program voyage.
              </h2>
              <p className="max-w-2xl text-lg/8 text-mist-700 dark:text-mist-300">
                For a voyage sold as part of the Humanitas program, a $150 CAD solidarity contribution is added
                automatically to each passenger’s total price. ÆRIA Voyages adds a further $150 CAD per eligible
                passenger from its profits, for a total contribution of $300 CAD. The final terms and recipient
                organizations will be communicated before any program voyage is offered for booking.
              </p>
            </div>

            <div className="mt-8 grid gap-px bg-mist-200 sm:grid-cols-2 dark:bg-mist-700">
              <div className="bg-white p-6 dark:bg-mist-950">
                <p className="text-sm font-medium text-mist-600 dark:text-mist-400">Passenger contribution</p>
                <p className="mt-2 font-display text-4xl tracking-tight text-mist-950 dark:text-white">$150 CAD</p>
                <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">
                  Automatically added to the Humanitas-program voyage price
                </p>
              </div>
              <div className="bg-white p-6 dark:bg-mist-950">
                <p className="text-sm font-medium text-mist-600 dark:text-mist-400">ÆRIA Voyages contribution</p>
                <p className="mt-2 font-display text-4xl tracking-tight text-mist-950 dark:text-white">$150 CAD</p>
                <p className="mt-1 text-sm text-mist-600 dark:text-mist-400">From profits, subject to program terms</p>
              </div>
            </div>

            <div className="mt-3 bg-mist-950 p-5 text-white dark:bg-white dark:text-mist-950">
              <p className="text-sm font-medium text-white/75 dark:text-mist-700">
                Total contribution per eligible passenger
              </p>
              <p className="mt-1 font-display text-4xl tracking-tight">$300 CAD</p>
            </div>

            <p className="mt-4 text-sm/6 text-mist-600 dark:text-mist-400">
              The $150 CAD contribution is part of the Humanitas-program voyage price and is not optional within that
              program. ÆRIA Voyages may also offer a separate voyage outside the program, without this contribution.
            </p>

            <div className="mt-8 border-t border-mist-950/10 pt-6 dark:border-white/10">
              <h3 className="font-display text-xl tracking-tight text-mist-950 dark:text-white">
                Local priorities. Community-led support.
              </h3>
              <p className="mt-2 text-base/7 text-mist-700 dark:text-mist-300">
                The program allocates contributions to credible organizations rooted in each destination. Specific
                partners and initiatives will be identified and confirmed for each voyage before it is offered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
