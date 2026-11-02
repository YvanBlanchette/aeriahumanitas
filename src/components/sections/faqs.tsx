import { ElDisclosure } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { type ComponentProps, type ReactNode, useId } from 'react'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'
import { MinusIcon } from '../icons/minus-icon'
import { PlusIcon } from '../icons/plus-icon'

export function Faq({
  id,
  question,
  answer,
  ...props
}: { question: ReactNode; answer: ReactNode } & ComponentProps<'div'>) {
  const autoId = useId()
  id = id || autoId

  return (
    <div id={id} {...props}>
      <button
        type="button"
        id={`${id}-question`}
        command="--toggle"
        commandfor={`${id}-answer`}
        className="flex w-full items-start justify-between gap-6 py-4 text-left text-base/7 text-mist-950 dark:text-white"
      >
        {question}
        <PlusIcon className="h-lh in-aria-expanded:hidden" />
        <MinusIcon className="h-lh not-in-aria-expanded:hidden" />
      </button>
      <ElDisclosure
        id={`${id}-answer`}
        hidden
        className="-mt-2 flex flex-col gap-2 pr-12 pb-4 text-sm/7 text-mist-700 dark:text-mist-400"
      >
        {answer}
      </ElDisclosure>
    </div>
  )
}

export function FAQs({
  headline,
  subheadline,
  className,
  children,
  ...props
}: {
  headline?: ReactNode
  subheadline?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('bg-mist-100 dark:bg-mist-900', className)} {...props}>
      <div className="grid items-stretch md:grid-cols-[40%_60%] lg:min-h-[40rem]">
        <div
          className="relative h-full overflow-hidden bg-red-500  dark:bg-mist-950"
          aria-hidden="true"
        >
          <Image
            src="/img/photos/egypt.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20">
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex flex-col gap-6">
              <Subheading>{headline}</Subheading>
              {subheadline && <Text className="flex flex-col gap-4 text-pretty">{subheadline}</Text>}
            </div>
            <div className="mt-8 divide-y divide-mist-950/10 border-y border-mist-950/10 dark:divide-white/10 dark:border-white/10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
