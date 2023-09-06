'use client'
import { Circle, MapPin } from '@phosphor-icons/react'

export const Locale = (): JSX.Element => {
  return (
    <div className="grid w-max grid-rows-2 gap-1 text-sm font-semibold text-blue-950/70 dark:text-white/70 md:gap-3">
      <section className="flex items-center gap-2 ">
        <MapPin size={16} className="text-blue-950/70 dark:text-white/70" weight="bold" />
        <span>São Luis-MA, Brasil</span>
      </section>
      <section className="flex items-center gap-2 ">
        <Circle size={16} className="text-green-550" weight="fill" />
        <span>Disponível para novos projetos</span>
      </section>
    </div>
  )
}
