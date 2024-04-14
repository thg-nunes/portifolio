import Image from 'next/image'
import { HandWaving } from '@phosphor-icons/react/dist/ssr'

import { Job } from '../../components/job'
import { GoTop } from '../../components/goTop'
import { Skills } from '../../components/skills'
import { Experiences } from '../../components/experiences'

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
            href="/currículo-front-end.pdf"
            className="bg-rose-500 hover:bg-rose-500/80 hidden w-max rounded-md p-2 px-6 text-xs font-bold capitalize text-white hover:transition-all hover:duration-200 md:block lg:text-base"
          >
            download CV
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
          <p className="text-center text-blue-950/70 dark:text-white/70 md:w-3/4 md:text-center">
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
              'Projetei a interface do usuário, escrevi código front-end e back-end, e otimizei o desempenho do site usando cache de requisições',
            task: 'Desenvolvimento de um site responsivo usando ReactJs integrado com uma api conectada ao banco de dados Pinot',
            result:
              'O painel empresarial foi lançado com sucesso e foi um dos serviços que serviu como modelo para as demais Juntas comerciais do país na construção de um portal nacional de informações.',
          }}
        />
      </div>

      <div className="space-y-20 lg:py-8" id="trabalhos">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 lg:text-xl">
            Trabalhos
          </p>
          <p className="text-center text-white md:w-3/4 md:text-center">
            Aqui estão alguns dos projetos os quais já fiz ou participei
          </p>
        </section>
        <Job
          jobName="Painel de Empresas do Maranhão"
          shortDesctiption="Painel de dados estatísticos da Junta Comercial do Estado do Maranhão - JUCEMA."
          projectSrc="/painel_estatisticas.png"
          jobLink="/projetos/estatisticas"
          tasks={['Design do Sistema', 'Implementação do Layout', 'Manutenção']}
        />

        <Job
          itemsDirection="reverse"
          projectSrc="/painel_caged.png"
          jobName="Painel de Empregos do Formais"
          shortDesctiption="Painel de empregos formais do Maranhão feito para a JUCEMA."
          jobLink="/projetos/painel-empregos"
          tasks={['Design do Sistema', 'Implementação do Layout', 'Mudança de Framework']}
        />

        <Job
          jobName="Página de relatórios"
          projectSrc="/pagina_de_relatorios.png"
          shortDesctiption="Projeto feito para gerenciar os relatórios mensais de empregos e empresas."
          jobLink="/projetos/gerenciamento-de-relatorios"
          tasks={[
            'Design do Sistema',
            'Autenticação',
            'Code Review',
            'Documentação',
            'Implementação do Layout',
          ]}
        />
      </div>

      <div className="bg-gray-200 px-4 py-16" id="habilidades">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 lg:text-xl">
            Habilidades
          </p>
          <p className="text-center text-blue-950 md:w-3/4 md:text-center">
            Aqui estão algumas das ferramentas e tecnologias nas quais sou muito bom ou
            que tenho algum conhecimento
          </p>
        </section>

        <Skills />
      </div>
      <GoTop />
    </main>
  )
}
