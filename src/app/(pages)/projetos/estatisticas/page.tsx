import { Metadata } from 'next'
import Image from 'next/image'
import { GoAlertFill } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'Projeto - Painel de Empresas',
  description:
    'Esse projeto foi desenvolvido para a JUCEMA com o propósito de melhori no sistema já existente.',
  icons: {
    icon: [
      {
        url: '/business-metrics.png',
        href: '/business-metrics.png',
      },
    ],
  },
}

export default function CompanyStatistics(): JSX.Element {
  const tasks = ['Design do Sistema', 'Implementação do Layout', 'Estatísticas']

  return (
    <main className="mx-auto max-w-7xl space-y-12">
      <div className="flex lg:items-center lg:justify-between">
        <section className="lg:h-max lg:w-[38%]">
          <section className="flex flex-col gap-3 rounded-md text-white">
            <p className="font-semibold lg:text-2xl">
              Desenvolvedor do Sistema Estatístico
            </p>
            <div className="flex flex-wrap gap-3">
              {tasks.map((task) => (
                <span
                  className="rounded-md bg-rose-500 p-1 px-3 text-sm text-white"
                  key={task}
                >
                  {task}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-wrap justify-between gap-3 text-white lg:my-12">
            <div>
              <p className="lg:text-xl">Tempo do Projeto</p>
              <span className="opacity-85 lg:text-sm">
                Dezembro de 2021 - Abril de 2022
              </span>
            </div>
            <div>
              <p className="lg:text-xl">Setor</p>
              <span className="opacity-85 lg:text-sm">
                Estatísticas / Análise de dados
              </span>
            </div>
            <div>
              <p className="lg:text-xl">Dunção</p>
              <span className="opacity-85 lg:text-sm">Desenvolvedor, Design</span>
            </div>
          </section>
          <a
            className="text-white hover:underline"
            href="http://estatisticas.jucema.ma.gov.br/"
          >
            acessar projeto
          </a>
        </section>
        <Image
          alt="imagem contendo gráficos com supostas análises estatísticas"
          src="/business-metrics.png"
          width={704}
          height={404}
          className="lg:h-[404px] lg:w-[704px]"
        />
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Contexto</span>
        <p>
          A jucema possuia uma página que apresentava dados de empresas do maranhão, porém
          a página havia algumas limitações além de layout antigo. Me diverti com esse
          primeiro projeto, pois até aquele dia não sabia nada de desenvolvimento
          front-end e nem de criação de layout.
        </p>
        <p className="rounded-md bg-blue-700/40 p-9 font-semibold">
          <span className="mb-3 block lg:text-xl">O desafio</span>A ideia era que eu
          fizesse uma melhoria no layout da página(não havia design para o fazer), mudar
          os dados que eram expostos ao usuário(removendo os que não eram tão
          interessantes e adicionando novas informações) e melhoria na forma de combinação
          de filtros de busca da página(até então só podia selecionar uma opção por
          filtro).
        </p>
      </div>
      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Estratégia e Planejamento</span>
        <p>
          Até aquele momente eu nunca tinha acriado um layout nem uma aplicação web, então
          eu planejei os seguintes passos: 1) preciso criar um layout para que seja
          analisado 2) com o layout aprovado preciso buscar as ferramentas que posso usar
          para implementa-lo.
        </p>

        <section>
          <span className="font-semibold lg:text-2xl">Pesquisa de Layouts</span>
          <p>
            Comecei a buscar modelos de dashboards que apresentavam dados estatísticos,
            fui anotando os pontos em comum e até mesmo tirei algumas informações da
            página que já estava implementada e que poderiam ser mantidas.
          </p>

          <div className="rounded-md p-9 font-semibold">
            <span className="mb-3 block lg:text-xl">Descoberta</span>
            <ul className="list-disc space-y-3 px-6 lg:text-sm">
              <li>Os gráficos mais usados: Barra | Linha | Pizza</li>
              <li>
                Ajuste no layout: São mais usados em forma de coluna, ou seja, um abaixo
                do outro
              </li>
            </ul>
          </div>
        </section>
        <section>
          <span className="font-semibold lg:text-2xl">
            Desenvolvimento e Implementação
          </span>

          <div className="rounded-md p-9">
            <span className="mb-3 block lg:text-xl">Ferramentas</span>
            <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
              <li>
                Do layout: com os pontos cruciais anotados, dei início ao desenvolvimento
                do layout. Usei o <span className="font-semibold">figma</span> para criar
                o protótipo da página, nesse processo obtive ajuda de um colega da equipe
                e demorei pouco menos de 1 semana para entregar um primeiro resultado, e
                ao longo desse processo tive várias negações para o protótipo, houveram
                vários reajustes e fui aprendendo como a ferramenta funcionava (confesso
                que foi divertido).
              </li>
              <li>
                Da implementação: para implementar o layout, usei o framework{' '}
                <span className="font-semibold">ReactJS</span> para dar vida ao projeto,
                sobre o framework a usar, já tinha sido decidido pelo colega de equipe,
                pois ele tinha algum conhecimento sobre, e caso precisasse de alguma
                ajuda, ele saberia o que fazer.;
              </li>
            </ul>
            <p className="bg-gray-200 p-3 font-semibold text-blue-950">
              <GoAlertFill className="mr-3 inline size-6 text-yellow-700" />O grade
              desafio para mim nessa etapa foi desenvolver a implementação do layout, pois
              assim que comecei eu sabia bem pouco sobre o framework e tive que ir
              aprendendo muita coisa enquanto fazia a aplicação. Houveram vários erros e
              problemas os quais passei dias para encontrar um solução, e a cada erro
              solucionado eu aprendia mais sobre o framework.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
