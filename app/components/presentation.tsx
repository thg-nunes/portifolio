'use client'

import { HandWaving } from '@phosphor-icons/react'

export const Presentation = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <section className="flex h-max gap-3">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">
          Oi, eu sou o Thiago
        </h2>
        <HandWaving className="h-8 w-8 text-[#fecc42] md:h-10 md:w-10" weight="fill" />
      </section>
      <p className="text-sm font-semibold dark:text-white/70 md:w-3/4 lg:text-base">
        Sou um desenvolvedor front-end (React e React-Native) com foco em criar e
        ocasionalmente projetar interfaces para web, promovendo experiências digitais
        excepcionalmente rápidas, acessíveis, visualmente atraentes e responsivas. Iniciei
        minha jornada em 2021, adoro o que faço e estou sempre em busca de novos
        conhecimeentos e experiencias.
      </p>
    </div>
  )
}
