import Image from 'next/image'

import { Locale } from './components/locale'
import { Media } from './components/media'
import { Presentation } from './components/presentation'
import { Skills } from './components/skills'
import { LinkToProject } from './components/linkToProject'
import { Contact } from './components/contact'
import { GoTop } from './components/goTop'
import { AppMode } from './components/appMode'
import { NavList } from './components/navList'

export default function Home() {
  return (
    <main className="bg-white text-blue-950 dark:bg-black dark:text-white">
      <div className="relative mx-auto flex h-10 max-w-7xl justify-between border-b border-gray-700 px-4">
        <p className="text-xl font-bold leading-10">{`</>`}</p>
        <section className="flex flex-row-reverse items-center gap-4 md:flex-row">
          <NavList />
          <div className="hidden h-5 border border-blue-950 dark:border-white md:block" />
          <div className="flex items-center gap-2 border-blue-950/70">
            <AppMode />
            <a
              download
              href="/Currículo-thiago-nunes.pdf"
              className="hidden rounded-full bg-blue-950 p-1 px-3 text-xs font-bold capitalize text-white hover:bg-gray-700 hover:transition-all hover:duration-200 dark:bg-white dark:text-gray-800  dark:hover:bg-white/80 md:block"
            >
              donload CV
            </a>
          </div>
        </section>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-10 md:flex-row">
        <section className="flex w-3/4 flex-col gap-8 md:gap-12 md:py-12">
          <Presentation />
          <Locale />
          <Media />
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

      <div className="bg-gray-200 py-16 dark:bg-blue-950" id="sobre-mim">
        <div className="mx-auto flex h-min max-w-7xl flex-col items-center">
          <p className=" mb-10 w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-white/70">
            Sobre Mim
          </p>
          <section className="flex flex-col gap-8 px-4 md:flex-row">
            <div className="grid grid-rows-2 items-center gap-12 md:w-2/4">
              <section className="flex items-center justify-center">
                <div className="h-56 w-72 bg-gray-300 dark:bg-gray-700" />
                <div className="absolute mb-8 ml-7">
                  <img
                    src="/Games-Brasil.jpg"
                    className="h-56 w-72 border-[5px] border-solid border-white dark:border-black"
                    alt="imagem de uma mesa com uma tela de computador, controles de video game e fone"
                  />
                </div>
              </section>
              <section className="flex items-center justify-center">
                <div className="h-56 w-72 bg-gray-300 dark:bg-gray-700" />
                <div className="absolute mb-8 ml-7">
                  <img
                    src="/tecnologia.jpg"
                    className="h-56 w-72 border-[5px] border-solid border-white dark:border-black"
                    alt="imagem de um notebook indicando tecnologia"
                  />
                </div>
              </section>
            </div>
            <section className="flex flex-col gap-4 md:w-2/4">
              <h3 className="text-xl font-semibold md:text-3xl">
                Curioso sobre mim? Aqui está !
              </h3>
              <p className="text-sm text-blue-950 dark:text-white/70 lg:text-base lg:text-base">
                Por me aventurar na criação de user interfaces(quando necessário) posso
                dizer que tenho habilidades no design, porém, especializado em
                desenvolvimento front-end (React e React-Native) e com alguns bons
                conhecimentos em back-end (com NodeJs). Estou muito entusiasmado em dar
                vida aos aspectos técnicos e visuais dos produtos digitais. Design
                perfeito em pixels e escrever código claro, legível e com desempenho
                vigoroso é importante para mim.
              </p>
              <p className="text-sm text-blue-950 dark:text-white/70 lg:text-base">
                Comecei minha jornada como desenvolvedor web em 2021 e, desde então,
                continuo a crescer e a evoluir como desenvolvedor, assumindo novos
                desafios e aprendendo as tecnologias mais recentes ao longo do caminho.
                Estou construindo aplicações web de última geração usando tecnologias
                modernas como next.js, typesctipt, tailwindcss, jest e muito mais.
              </p>
              <p className="text-sm text-blue-950 dark:text-white/70 lg:text-base">
                Gosto de trabalhar em produtos de ponta a ponta, desde a idealização até o
                desenvolvimento, pois foi assim que iniciei minha carreira, criando desde
                as interfaces, passando pela implementação, manutenção e implementações
                das aplicações.
              </p>
              <p className="text-sm text-blue-950 dark:text-white/70 lg:text-base">
                Quando não estou no modo de desenvolvedor completo, estou passando o tempo
                aprendendo ou buscando algo novo para aprender e acrescentar nos
                conhecimentos, jogando um pouco no computador ou aproveitando algum tempo
                livre com atividade fisica.
              </p>
              <p className="text-sm text-blue-950 dark:text-white/70 lg:text-base">
                Então fique à vontade para entrar em contato e dizer olá.
              </p>
            </section>
          </section>
        </div>
      </div>

      <div className="px-4 py-16" id="habilidades">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-white/70">
            Habilidades
          </p>
          <p className="text-center text-blue-950/70 dark:text-white/70 md:w-3/4">
            As habilidades, ferramentas e tecnologias nas quais sou muito bom ou que tenho
            algum conhecimento
          </p>
        </section>
        <Skills />
      </div>

      <div className="bg-gray-200 px-4 py-16 dark:bg-blue-950 md:px-0" id="experiencias">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-white/70">
            Experiências
          </p>
          <p className="text-centertext-blue-950/70 dark:text-white/70 md:w-3/4 md:text-center">
            Aqui está um rápido resumo das minhas experiências mais recentes
          </p>
        </section>
        <section className="mx-auto flex flex-col justify-between gap-4 rounded-md bg-gray-50 p-8 shadow-md dark:bg-gray-800 md:w-3/4 md:flex-row md:gap-0">
          <p className="text-2xl font-bold text-green-550">JUCEMA</p>
          <p className="text-bold block text-sm md:hidden">Maio de 2021 - Atual</p>
          <div className="md:w-2/4">
            <p className="mb-3 text-xl font-semibold">Estagiário Front-End Developer</p>
            <ul className="flex flex-col gap-3 text-sm text-blue-950/70 dark:text-white/70">
              <li>
                <span className="font-semibold text-blue-950/70 dark:text-white/100">
                  Situação:
                </span>
                {` `}A empresa precisava atualizar uma página de dados estatísticos usada
                para obter algumas informações
              </li>
              <li>
                <span className="font-semibold text-blue-950/70 dark:text-white/100">
                  Tarefa:
                </span>
                {` `}
                Desenvolvimento de um site responsivo usando ReactJs integrado com uma api
                conectada ao banco de dados Pinot
              </li>
              <li>
                <span className="font-semibold text-blue-950/70 dark:text-white/100">
                  Ação:
                </span>
                {` `}
                Projetei a interface do usuário, escrevi código front-end e back-end, e
                otimizei o desempenho do site usando cache de requisições.
              </li>
              <li>
                <span className="font-semibold text-blue-950/70 dark:text-white/100">
                  Resultado:
                </span>
                {` `}O painel empresarial foi lançado com sucesso e foi um dos serviços
                que serviu como modelo para as demais Juntas comerciais do país na
                construção de um portal nacional informações.
              </li>
              <ul>
                <p className="font-semibold text-blue-950/70 dark:text-white/100">
                  Links para as matérias
                </p>
                <li className="mb-2 list-disc transition-all duration-150 hover:text-blue-950 dark:hover:text-white/100">
                  <a href="http://portal.jucema.ma.gov.br/pagina/898" target="_blank">
                    site da jucema
                  </a>
                </li>
                <li className="list-disc transition-all duration-150 hover:text-blue-950 dark:hover:text-white/100">
                  <a
                    href="https://twitter.com/carlosbrandaoma/status/1674185203709890562"
                    target="_blank"
                  >
                    twitter do governador
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <p className="text-bold hidden text-sm md:block">Maio de 2021 - Atual</p>
        </section>
      </div>

      <div className="px-4 py-16 md:px-0" id="trabalhos">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="dart:text-white/70 w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold dark:bg-gray-700">
            Trabalhos Que Fiz
          </p>
          <p className="md::text-center text-center text-blue-950 dark:text-white/70 md:w-2/4">
            Alguns dos projetos notáveis ​​que construí
          </p>
        </section>

        <section className="mx-auto mb-10 flex max-w-7xl flex-col rounded-md md:flex-row">
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[462px] "
              src={'/painel__estatisticas.png'}
              alt="imagem do projeto de estatisticas"
            />
          </div>
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:gap-6 md:px-5">
            <p className="text-xl font-semibold dark:text-white">
              Painel de dados Estatisticos
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi o primeiro que fiz na jucema, onde necessitava de mudança
              total em seu layout e funcionalidades, entãoganhei a responsabilidade de
              projetar o layout no figma, fazer a implementação e dar manutenção para
              novas implementações caso necessario. Isso enquanto estagiario ainda. Esse
              foi o projeto que fiz e que foi apresentado(dentre outros projetos da
              empresa) na reunião nacional da federação das juntas comerciais do brasil,
              sendo o meu projeto destaque.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto é conectado a uma API(feita tambem por mim) sem muita
              complexidade, mas que esta conectada ao banco de dados PINOT, e exibe os
              dados estatisticos de empresas do maranhao.
            </p>
            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                ReactJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NextJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                TypeScript
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Tailwindcss
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NodeJs
              </p>
            </section>
            <section>
              <LinkToProject
                projectName="painel_estatisticas"
                href="http://estatisticas.jucema.ma.gov.br/"
              />
            </section>
          </div>
        </section>

        <section className="mx-auto mb-10 flex  max-w-7xl flex-col-reverse rounded-md md:flex-row">
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:flex-col md:gap-6 md:px-5">
            <p className="text-xl font-semibold">Painel de Empresas do Maranhao</p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi o segundo que fiz na jucema, onde tambem necessitava de
              mudança total em seu layout e funcionalidades, então fiquei na
              responsabilidade de projetar o layout no figma, fazer sua implementação e
              tambem dar manutenção para novas implementações caso necessario. Essa tarefa
              tambem foi enquanto estagiario ainda.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto é conectado a uma API(feita tambem por mim) sem muita
              complexidade, mas que esta conectada ao banco de dados PINOT, e exibe os
              dados estatisticos de empregos gerados no maranhao.
            </p>
            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                ReactJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NextJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                TypeScript
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Tailwindcss
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NodeJs
              </p>
            </section>
            <section>
              <LinkToProject
                projectName="pagina_caged"
                href="http://caged.jucema.ma.gov.br/"
              />
            </section>
          </div>
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[448px] lg:w-[462px]"
              src={'/painel_caged.png'}
              alt="imagem do projeto caged"
            />
          </div>
        </section>

        <section className="mx-auto mb-10 flex max-w-7xl flex-col rounded-md md:flex-row">
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[462px]"
              src={'/pagina_de_relatorios.png'}
              alt="imagem do projeto da pagina_de_relatorios"
            />
          </div>
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:gap-6 md:px-5">
            <p className="text-xl font-semibold">Página de relatórios</p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi o terceiro que fiz na jucema, diferente dos outros, esse é
              de acesso restrito e seu seu layout, funcionalidades e fluxo de
              funcionamento foram todos pensados do total zero. Então junto de um colega
              de trabalho, projetamos o layout no figma, e com o layout pronto, dei
              iniicio as implementações que ao longo do tempo foram mudando e evoluindo, e
              junto com essas mudanças, acabei tendo que mudar nocódigo tambem.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              No fim, o que seria uma simples pagina para organização de relatorios
              gerados mensalmente, acabou ganhando mais funcionalidades e paginas. Um
              destaque nesse projeto são as paginas com diferentes niveis de acesso(onde
              uso o JWT) e integração com uma api
            </p>
            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                ReactJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NextJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                TypeScript
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Tailwindcss
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
            </section>
            <section>
              <LinkToProject
                projectName="link do layout no figma"
                href="https://www.figma.com/file/InevirOT1PmXQAIgL0UQ1M/P%C3%A1gina-Relat%C3%B3rios?type=design&node-id=0%3A1&mode=design&t=xc5cN7AxV5exS1Ne-1"
              />
            </section>
          </div>
        </section>

        <section className="mx-auto mb-10 flex  max-w-7xl flex-col-reverse rounded-md md:flex-row">
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:flex-col md:gap-6 md:px-5">
            <p className="text-xl font-semibold">MarketSpace</p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi desenvolvido no bootcamp que fiz, para isso, me foi
              fornecido um layout criado no figma com todas as telas e possíveis
              funcionalidades que o app deveria ter. A ideia era criar um app de vendas,
              onde a missão era fazer implementação do layout usando react-native e as
              ferramentas até então aprendidas, além de fazer a conexão do app com uma api
              fornecida já pronta.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              O desafio nao foi nada simples, passei um mês inteiro trabalhando nele, mas
              o resultado final ficou sensasional, pois todas as telas e funcionalidades
              foram implementadas.
            </p>
            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Native
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Navigation
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Expo
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Hook-Form
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Asyn-Storage
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <LinkToProject
                projectName="link do layout no figma"
                href="https://www.figma.com/file/uPaRrJFFDoXtqWuljmXVDh/Marketspace-%E2%80%A2-Desafio-React-Native-(Copy)?type=design&node-id=0-1&mode=design&t=zodGuOkQLLNVbCXB-0"
              />
              <LinkToProject
                projectName="link do projeto em meu github"
                href="https://github.com/thg-nunes/marketspace-mobile"
              />
            </section>
          </div>
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[462px]"
              src={'/marketspace.png'}
              alt="imagem do projeto marketspace"
            />
          </div>
        </section>

        <section className="mx-auto mb-10 flex max-w-7xl flex-col rounded-md md:flex-row">
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[462px]"
              src={'/dailyDiet.png'}
              alt="imagem do projeto da dailydiet"
            />
          </div>
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:gap-6 md:px-5">
            <p className="text-xl font-semibold">MMarketSpace</p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi desenvolvido no bootcamp que fiz, para isso, me foi
              fornecido um layout criado no figma com todas as telas e possíveis
              funcionalidades que o app deveria ter. A ideia era criar um app para
              gerenciar as dietas do usuario, com possibilidade de: adicionar, excluir,
              marcar como concluida, e editar uma dieta, fora outras funcionalidades
              visuais a cada ação do usuario. A missão era fazer implementação do layout
              usando react-native e as ferramentas até então aprendidas, além de fazer a
              conexão do app com uma api fornecida já pronta.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse desafio eu ja achei mais facil, até mesmo por que foi o segundo que fiz
              pela trilha de desenvolvimento mobile, porém, mesmo sendo simple de
              desenvolve-lo, pude treinar e aperfeiçoar muitos conhecimentos sobre
              desenvolvimento mobile.
            </p>
            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Native
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Navigation
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Navegação Aninhada
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Expo
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Hook-Form
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <LinkToProject
                projectName="link do layout no figma"
                href="https://www.figma.com/file/DZ9As8Pe9BxONlRDqKFra5/Daily-Diet-(Community)?type=design&node-id=0-1&mode=design&t=TpP3zGSqPJ5203WL-0"
              />
              <LinkToProject
                projectName="link do projeto em meu github"
                href="https://github.com/thg-nunes/daily-diet-mobile"
              />
            </section>
          </div>
        </section>

        <section className="mx-auto mb-10 flex  max-w-7xl flex-col-reverse rounded-md md:flex-row">
          <div className="flex flex-col gap-2 bg-white px-10 py-10 dark:bg-gray-800 md:w-1/2 md:flex-col md:gap-6 md:px-5">
            <p className="text-xl font-semibold">c-shoes</p>
            <p className="text-sm text-blue-950 dark:text-white">
              Esse projeto foi desenvolvido em um desafio de entrevista que participei,
              fiz ele totalmento do zero e com um prazo para entregar, o prazo foi
              cumprido e todos os requisitos do desafio tambem. Foi algo bem simples onde
              usei alguns dos conhecimentos que adquiri durante o inicio da jornada.
            </p>
            <p className="text-sm text-blue-950 dark:text-white">
              Por mais simples que esse projeto seja, ele tem um diferencial, está coberto
              por testes, onde use o jest para realiza-los. Assim comprovando o
              conhecimento em TDD & testes E2E.
            </p>

            <section className="my-4 flex flex-wrap gap-3 md:my-0">
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                NextJs
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Jest
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Axios
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                TypeScript
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Styled-Components
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                React-Toastify
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Git
              </p>
              <p className="w-max cursor-pointer rounded-full bg-gray-300 px-5 py-1 text-base text-blue-950 duration-200 hover:bg-gray-600 hover:text-white dark:bg-gray-700 dark:text-white/70 dark:hover:bg-gray-500">
                Figma
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <LinkToProject
                projectName="link do projeto"
                href="https://shoes-commerce-pfjm.vercel.app/c-shoes/home"
              />
              <LinkToProject
                projectName="link do projeto em meu github"
                href="https://github.com/thg-nunes/shoes-commerce"
              />
            </section>
          </div>
          <div className="bg-gray-200 py-8 dark:bg-gray-700 md:w-1/2 md:py-10">
            <img
              className="mx-auto h-52 w-72 rounded-md md:h-60 md:w-96 lg:h-96 lg:w-[462px]"
              src={'/c-shoes.png'}
              alt="imagem do projeto c-shoes"
            />
          </div>
        </section>
      </div>

      <div className="md:-x0 bg-gray-200 px-4 py-16 dark:bg-blue-950" id="contato">
        <section className="mx-auto mb-10 flex max-w-7xl flex-col items-center gap-4">
          <p className="w-max rounded-full bg-gray-300 px-5 py-1 text-xs font-semibold text-blue-950 dark:bg-gray-700 dark:text-white">
            Contato
          </p>
          <p className="text-center text-sm font-semibold text-blue-950 dark:text-white/70 md:w-3/4 md:text-base">
            Sinta-se à vontade para entrar em contato comigo se estiver procurando um
            desenvolvedor, tiver alguma dúvida ou simplesmente quiser se conectar. 😊
          </p>
        </section>
        <Contact />
      </div>
      <GoTop />
    </main>
  )
}
