import Image from 'next/image'
import { GithubLogo, LinkedinLogo, HandWaving } from '@phosphor-icons/react/dist/ssr'

import { Media } from '@/app/components/media'
import { Experiences } from '@/app/components/experiences'

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
      <div className="bg-gray-200 px-4 py-16 md:px-0" id="experiencias">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 lg:text-xl">
            Experiências
          </p>
          <p className="text-centertext-blue-950/70 dark:text-white/70 md:w-3/4 md:text-center">
            Aqui está um rápido resumo das minhas experiências mais recentes
          </p>
        </section>
        <Experiences
          company="JUCEMA"
          date={{
            start: 'Maio de 2021',
            end: 'Abril de 2024',
          }}
          jobFunction="Estagiário Front-End"
          jobInfo={{
            situation:
              'A empresa precisava atualizar uma página de dados estatísticos usada para obter algumas informações',
            action:
              'Projetei a interface do usuário, escrevi código front-end e back-end, eotimizei o desempenho do site usando cache de requisições.',
            task: 'Desenvolvimento de um site responsivo usando ReactJs integrado com uma api conectada ao banco de dados Pinot',
            result:
              'O painel empresarial foi lançado com sucesso e foi um dos serviços que serviu como modelo para as demais Juntas comerciais do país na construção de um portal nacional informações.',
          }}
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
