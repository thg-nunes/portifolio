import Image from 'next/image'
import { GithubLogo, LinkedinLogo, HandWaving } from '@phosphor-icons/react/dist/ssr'

import { Media } from '@/app/components/media'

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-10 text-white md:flex-row">
        <section className="flex w-3/4 flex-col gap-8 md:gap-12 md:py-12">
          <div className="flex flex-col gap-3">
            <section className="flex h-max gap-3">
              <h2 className="text-2xl font-bold md:text-3xl lg:text-5xl">
                Olá, seja bem vindo
              </h2>
              <HandWaving
                className="h-8 w-8 text-[#fecc42] md:h-10 md:w-10"
                weight="fill"
              />
            </section>
            <p className="text-sm dark:text-white/70 md:w-3/4 lg:text-base">
              Me chamo thiago, um desenvolvedor{' '}
              <span className="text-rose-00 font-bold">front-end</span> que gosta do que
              faz! Apaixonado por criar e ocasionalmente projetar interfaces para web,
              promovendo experiências digitais excepcionalmente{' '}
              <span className="font-bold">rápidas</span>, visualmente{' '}
              <span className="font-bold">atraentes</span> e{' '}
              <span className="font-bold">responsivas</span>. Iniciei minha jornada em
              2021 e estou sempre em busca de novos conhecimentos e experiências.
            </p>
          </div>
          <a
            download
            href="/Currículo-thiago-nunes.pdf"
            className="hidden w-max rounded-md bg-rose-500 p-2 px-6 text-xs font-bold capitalize text-white hover:bg-rose-500/80 hover:transition-all hover:duration-200 md:block lg:text-base"
          >
            donload CV
          </a>
        </section>
        <Image
          src="/my_photo.png"
          width={240}
          height={240}
          className="size-60 rounded-full border-[4px] border-solid border-white dark:border-black"
          alt="minha foto de usuário"
        />
      </div>
      {/* <footer>
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
      </footer> */}
    </main>
  )
}
