import { Metadata } from 'next'
import Image from 'next/image'
import { GoAlertFill } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'Projeto - Painel de Empresas',
  description:
    'Esse projeto foi desenvolvido para a JUCEMA com o propósito de substituir a página já existente que apresentava dados de abertura e fechamento de empresas no estado do maranhão.',
  icons: {
    icon: [
      {
        url: '/painel_estatisticas.png',
        href: '/painel_estatisticas.png',
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
                  className="bg-rose-500 rounded-md p-1 px-3 text-sm text-white"
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
            target="_blank"
            href="http://estatisticas.jucema.ma.gov.br/"
          >
            acessar projeto
          </a>
        </section>
        <a target="_blank" href="http://estatisticas.jucema.ma.gov.br/">
          <Image
            alt="imagem contendo gráficos com supostas análises estatísticas"
            src="/business-metrics.png"
            width={704}
            height={404}
            className="scale-95 transition-all duration-150 hover:scale-100 lg:h-[404px] lg:w-[704px]"
          />
        </a>
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

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Pesquisa de Layouts</span>
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

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Levantamento de requisítos</span>
          <p>
            Para saber quais os requisítos do sistema precisei conversar com o colega de
            equipe, e após algums minutos foram levanntados os seguintes pontos:
          </p>

          <div className="rounded-md p-9 font-semibold">
            <ul className="list-disc space-y-3 px-6 lg:text-sm">
              <li>
                O sistema de filtros deve conter a possibilidade de multipla seleção de
                opções
              </li>
              <li>
                A cada mudança de opções selecionadas, o sistema deve buscar os dados dos
                gráficos e as opções de filtros disponíveis para uma determinada seleção
              </li>
              <li>
                A aplicação deve conter duas páginas, uma para informações de empresas
                abertas e outra para informações de empresas ativas
              </li>
              <li>
                Ao virar o ano, as informações presentes no sistema devem permanecer as
                mesmas do ano anterior até que a data do ano atual seja 05 de fevereiro
              </li>
            </ul>
          </div>
        </section>
        <section className="pl-3">
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
                Da implementação: para implementar o layout, usei a linguagem{' '}
                <a
                  href="https://devdocs.io/javascript/"
                  className="font-semibold underline"
                >
                  JavaScript
                </a>{' '}
                e o framework{' '}
                <a
                  href="https://react.dev/reference/react"
                  className="font-semibold underline"
                >
                  ReactJS
                </a>{' '}
                para dar vida ao projeto, sobre o framework a usar, já tinha sido decidido
                pelo colega de equipe, pois ele tinha algum conhecimento sobre, e caso
                precisasse de alguma ajuda, ele saberia o que fazer. Ao longo da
                implementação do layout fui pedindo opnião de colegas de trabalho, mesmo
                que não fossem da mesma área que eu, mas opniões de vinda de usuários
                seria uma mão na roda para saber o que deveria melhorar.
              </li>
              <li>
                Da seleção dos filtros: para adicionar a possibilidade de seleção de
                multiplas opções em um único filtro precisei buscar por ferramentas que me
                oferecessem essa possibilidade, até que encontrei a{' '}
                <a
                  href="https://multiselect-react-dropdown.vercel.app/?path=/story/multiselect-dropdown--flat-array"
                  className="font-semibold underline"
                >
                  multiselect-react-dropdown
                </a>
                , uma ferramenta que me permitia ter total controle de como cada filtro
                funcionaria.
              </li>
              <li>
                Do gerenciamento de filtros: de alguma forma eu precisaria monitorar como
                cada filtro estava relacionado com as opções selecionadas, precisaria
                também que a cada seleção todos os gráfico e opções de filtros para
                combinação fossem atualizadas (isso foi complexo de fazer), e para essa
                tarefa resolvi usar a{' '}
                <a
                  href="https://react.dev/reference/react/useContext"
                  className="font-semibold underline"
                >
                  contextApi
                </a>{' '}
                do react.
              </li>
            </ul>
            <p className="bg-gray-200 p-3 font-semibold text-blue-950">
              <GoAlertFill className="mr-3 inline size-6 text-yellow-700" />O grande
              desafio para mim nessa etapa foi desenvolver a implementação do layout, pois
              assim que comecei eu sabia bem pouco sobre o framework e tive que ir
              aprendendo muita coisa enquanto fazia a aplicação. Houveram vários erros e
              problemas os quais passei dias para encontrar um solução, e a cada erro
              solucionado eu aprendia mais sobre o framework.
            </p>
          </div>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Resultados e Impacto</span>
        <section className="space-y-3 rounded-md p-9">
          <p>
            O usuário agora tinha uma página mais simples e confortável de se obter
            informações, pois os gráficos e filtros estavam mais bem distribuidos e
            organizados. Cada gráfico passou a ter um título descritivo do que
            representava tal informação, e com essas melhorias:
          </p>
          <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
            <li>
              A página obteve um layout mais atualizado, com novas informações e novos
              modelos de graficos/filtros.
            </li>
            <li>
              O usuário passou a conseguir obter mais informações sobre empresas
              abertas/fechadas do estado, uma vez que a combinação de filtros passou a ser
              muito maior que a página anterior
            </li>
            <li>
              Com a combinação de filtros maior, a quantidade de requisições também
              aumentou muito, e para resolver esse problema foi adicionado cache para cada
              requisição que fosse realizada, isso impediria uma sobrecarga no servidor do
              banco de dados.
            </li>
            <li>
              O tempo para fazer uma determinada avaliação de um respectivo dado(que
              geralmente é usado para repassar informações para uma empresa de
              telecomunicação) foi diminuido, e agora é mais rápido de obter as
              informações necessárias.
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Ferramentas usadas</span>
        <section className="space-y-3 rounded-md p-9">
          <p>
            Aqui estão todas as ferramentas as quais utilizei para desenvolver esse
            projeto:
          </p>
          <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
            <li>
              <a className="underline" href="https://devdocs.io/javascript/">
                JavaScript
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.typescriptlang.org/docs/">
                TypeScript
              </a>
            </li>
            <li>
              <a className="underline" href="https://react.dev/">
                ReactJs
              </a>
            </li>
            <li>
              <a className="underline" href="https://styled-components.com/docs">
                Styled-Components
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://multiselect-react-dropdown.vercel.app/"
              >
                multiselect-react-dropdown
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://react.dev/reference/react/useContext"
              >
                ContextApi
              </a>
            </li>
            <li>
              <a className="underline" href="https://axios-http.com/docs/intro">
                Axios
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://tanstack.com/query/latest/docs/framework/react/overview"
              >
                @tanstack/react-query
              </a>
            </li>
            <li>
              <a className="underline" href="https://github.com/apache/echarts">
                echarts-for-react
              </a>
            </li>
            <li>
              <a className="underline" href="https://prettier.io/docs/en/index.html">
                prettier
              </a>
            </li>
            <li>
              <a className="underline" href="https://eslint.org/docs/latest/">
                eslint
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">O que Aprendi</span>
        <ul className="space-y-3 pl-3">
          <li>
            1 - <span className="font-semibold">Planejamento é essencial:</span> com o
            primeiro contato com o desenvolvimento de software que iria para produção, não
            poderia simplismente implementar o layout sem antes ter metas estabelecidas,
            conhecimennto sobre o que a empresa queria ou sem saber quais requisitos
            deveriam ser seguidos
          </li>
          <li>
            2 - <span className="font-semibold">Peça ajuda quando necessário: </span>
            por vários momentos no início do projeto enfrentei dificuldade para resolver
            um problema devido a falta de experiência, e nesses momoentos eu pedi ajuda ao
            colega de equipe, o que me proporcionou adquirir mais conhecimento e
            prosseguir nas tarefas
          </li>
        </ul>
      </div>

      <div className="mx-auto space-y-3 border-b border-white/25 pb-[72px] text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Layout Final Do Projeto</span>
        <Image
          src="/painel_estatisticas.png"
          width={832}
          height={832}
          className="mx-auto"
          alt="imagem do projeto painel_estatisticas o qual fiz para a jucema"
        />
      </div>
    </main>
  )
}
