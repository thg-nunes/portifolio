import { FaGithub } from 'react-icons/fa'

import { Locale } from '@/app/components/locale'
import { Media } from '@/app/components/media'
import { Presentation } from '@phosphor-icons/react'
import Image from 'next/image'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-10 text-white md:flex-row">
        <section className="flex w-3/4 flex-col gap-8 md:gap-12 md:py-12">
          {/* <Presentation />
          <Locale /> */}
          <div className="flex w-max items-center gap-2 text-white">
            <Media
              target="_blank"
              description="github"
              href="https://github.com/thg-nunes"
              icon={<GithubLogo size={24} weight="bold" />}
            />
            <Media
              target="_blank"
              description="linkedin"
              href="https://www.linkedin.com/in/thiago-nunes-3a7771219/"
              icon={<LinkedinLogo size={24} weight="bold" />}
            />
          </div>
        </section>
        <section className="relative mb-[72px] h-52">
          <div className="h-64 w-48 bg-gray-300 dark:bg-gray-700" />
          <div className="absolute -left-8 -top-5 h-56 w-52">
            <Image
              src="/my_photo.png"
              width={208}
              height={224}
              className=" border-[4px] border-solid border-white dark:border-black"
              alt="minha foto de usuário"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
