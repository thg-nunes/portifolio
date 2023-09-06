'use client'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { Media } from './media'

export const Contact = (): JSX.Element => {
  return (
    <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <AiOutlineMail className="h-7 w-7" />
        <p className="text-sm md:text-xl">desenvolvedor.nunes@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <BsTelephone className="h-7 w-7" />
        <p className="text-sm md:text-xl">(98) 98514-4149</p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-center text-sm text-blue-950 dark:text-white/70">
          Você tambem pode me encontrar nessas plataformas
        </p>
        <Media />
      </div>
    </section>
  )
}
