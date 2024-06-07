import { Metadata } from 'next'
import Image from 'next/image'
import { GoAlertFill } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'Projeto - Painel de Empregos',
  description:
    'Esse projeto foi desenvolvido para a JUCEMA com o propósito de substituir a página já existente que apresentava histórico dos dados de empregos gerados no estado do maranhão.',
  icons: {
    icon: [
      {
        url: '/business-metrics-2.jpg',
        href: '/business-metrics-2.jpg',
      },
    ],
  },
}

export default function CompanyStatistics(): JSX.Element {
  const tasks = ['Design do Sistema', 'Implementação do Layout', 'Estatísticas']

  return (
    <main className="mx-auto max-w-7xl space-y-12 px-3 md:w-11/12">
      <div className="flex lg:items-center lg:justify-between">
        <section className="space-y-4 lg:h-max lg:w-[38%]">
          <section className="flex flex-col gap-3 rounded-md text-white">
            <p className="text-xl font-semibold lg:text-2xl">
              Desenvolvedor do Sistema De Empregos Formais
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
              <span className="opacity-85 lg:text-sm">Maio de 2022 - Agosto de 2022</span>
            </div>
            <div>
              <p className="lg:text-xl">Setor</p>
              <span className="opacity-85 lg:text-sm">
                Estatísticas / Análise de dados
              </span>
            </div>
            <div>
              <p className="lg:text-xl">Função</p>
              <span className="opacity-85 lg:text-sm">Desenvolvedor, Design</span>
            </div>
          </section>
          <a
            className="inline-block text-white underline lg:no-underline lg:hover:underline"
            target="_blank"
            href="http://caged.jucema.ma.gov.br/"
          >
            acessar projeto
          </a>
        </section>
        <a
          target="_blank"
          className="hidden md:block"
          href="http://caged.jucema.ma.gov.br/"
        >
          <Image
            alt="imagem contendo gráficos com supostas análises estatísticas"
            src="/business-metrics-2.jpg"
            width={704}
            height={404}
            className="scale-95 transition-all duration-150 hover:scale-100 lg:h-[404px] lg:w-[704px]"
          />
        </a>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="text-2xl font-semibold">Contexto</span>
        <p>
          A jucema possuia uma página que apresentava dados de empregos gerados no
          maranhão, porém a página havia algumas limitações além de layout antigo(mesmo
          problema do projeto de estatísticas). Um diferencial desse projeto será a nova
          tecnologia usada.
        </p>
        <p className="rounded-md bg-blue-700/40 p-9 font-semibold">
          <span className="mb-3 block lg:text-xl">O desafio</span>A ideia era que eu
          fizesse a criação de um novo layout para a página e fizesse a implementação do
          mesmo, mudar os dados que eram expostos ao usuário(removendo os que não eram tão
          interessantes e adicionando novas informações) e melhoria na forma de combinação
          de filtros de busca da página(até então só podia selecionar uma opção por
          filtro). O desafio aqui seria implementar um novo framework nessa aplicação, o
          qual eu mesmo sugeri a ideia e dei os motivos de o aceitarem.
        </p>
      </div>
      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="text-2xl font-semibold">Estratégia e Planejamento</span>
        <p>
          Nesse ponto eu já tinha um bom conhecimento de ReactJS e Front-End, o que me
          possibilitou criar essa aplicação de forma mais organizada, padronizada e com um
          tempo menor de entrega. Com a primeira experiência em criar um layout e fazer a
          implementação para uma aplicação web, usei as mesmas estratégias que no primeiro
          projeto: 1) preciso criar um layout o mais rápido possível para que seja
          analisado e melhorado 2) Com o layout aprovado preciso buscar as ferramentas que
          posso usar para implementa-lo.
        </p>

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Pesquisa de Layouts</span>
          <p>
            A sugestão do colega de equipe e do chefe que solicitou os trabalhos foi de
            que eu usasse o primeiro layout feito, pois como já havia sido aprovado, não
            haveria risco de ser reprovação. Só havia um porém, ele deveria apresentar
            graficos diferentes.
          </p>
        </section>

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Levantamento de requisítos</span>
          <p>
            Para saber quais os requisitos do sistema, precisei conversar com o colega de
            equipe, e após alguns minutos foram levantados os seguintes pontos:
          </p>

          <div className="rounded-md p-3 font-semibold md:p-9">
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
                Ao virar o ano, as informações presentes no sistema devem permanecer as
                mesmas do ano anterior até que a data do ano atual seja 05 de fevereiro
              </li>
              <li>A página deve conter um mapa contendo as infomações por município</li>
              <li>
                A página deve ter uma forma de acompanhar algumas informações como: quais
                as opções de filtros mais selecionadas, acessos por mês que a página
                recebia e o local de onde veio um acesso.
              </li>
            </ul>
          </div>
        </section>
        <section className="pl-3">
          <span className="font-semibold lg:text-2xl">
            Desenvolvimento e Implementação
          </span>

          <div className="rounded-md p-3 lg:p-9">
            <span className="mb-3 block lg:text-xl">Ferramentas</span>
            <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
              <li>
                Com os pontos cruciais anotados, dei início ao desenvolvimento do layout.
                Usei o <span className="font-semibold">figma</span> para criar o protótipo
                da página. Nesse processo, o colega de equipe deu algumas sugestões que me
                ajudaram a agilizar a entrega do layout. E para essa aplicação, o
                diferencial é que deveria criar duas páginas, porém semelhantes. Isso
                também me proporcionou ter maior agilidade na prototipação, pois ao fazer
                a primeira página, a segunda automaticamente já estaria pré-pronta.
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
                <a href="https://nextjs.org/docs/app" className="font-semibold underline">
                  NextJs
                </a>{' '}
                para dar vida ao projeto, sobre o framework foi sugestão minha, o motivo
                foi pela maior possibilidade que a ferramenta me dava, por exemplo: eu
                poderia gerar uma página no momento do build da aplicação e mater essa
                página em cache, o que me dava a chance de fazer uma aplicação mais
                rápida(por mais que fosse uma SPA), pois ao usuário acessar a página no
                endereço web essa já estaria com seus dados todos armazenados em cache e
                só no ponto de mandar o html | css | javascript para o browser trata-lo
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
            <p className="rounded-md bg-gray-200 p-3 font-semibold text-blue-950">
              <GoAlertFill className="mr-3 inline size-6 text-yellow-700" />O grande
              desafio para mim nessa etapa foi desenvolver a a aplicação com o novo
              framework, por mais que fosse baseado em ReactJS ele tinha suas
              particularidades, das quais precisei aprender durante a implementação do
              sistema.
            </p>
          </div>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="text-2xl font-semibold">Resultados e Impacto</span>
        <section className="space-y-3 rounded-md p-3 lg:p-9">
          <p>Os impactos dessa nova página no sistema do órgão foram os seguintes:</p>
          <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
            <li>O usuário agora podia verificar informações por município</li>
            <li>
              A página obteve um novo layout com responsividade, algo que a aplicação
              anterior não tinha
            </li>
            <li>
              O usuário passou a conseguir obter mais possibilidade de obter informações
              mais completas, uma vez que a combinação de filtros passou a ser muito maior
              que a página anterior
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
        <span className="text-2xl font-semibold">Ferramentas usadas</span>
        <section className="space-y-3 rounded-md p-3 lg:p-9">
          <p>
            Por ser um projeto semlhante ao{' '}
            <a href="/projetos/estatisticas">Sistema Estatístico</a>as libs aqui usadas
            foram quase todas iguais, com um diferencial sendo o NextJs, veja as
            ferramentas usadas:
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
              <a className="underline" href="https://nextjs.org/docs/app/">
                NextJs
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
        <span className="text-2xl font-semibold">O que Aprendi</span>
        <ul className="space-y-3 pl-3">
          <li>
            1 - Opiniões são bem-vindas: a princípio, fiquei em dúvida se minha sugestão
            seria levada em consideração ou não. No entanto, mesmo ocupando o cargo de
            estagiário, minha sugestão de novo framework foi bem aceita. Uma vez que
            sabendo as facilidades e benefícios que isso traria no futuro para a empresa
            (diminuição no custo com servidores), não havia motivo para não implementá-la.
          </li>
        </ul>
      </div>

      <div className="mx-auto space-y-3 border-b border-white/25 pb-[72px] text-white lg:w-3/4">
        <span className="text-2xl font-semibold">Layout Final Do Projeto</span>
        <Image
          src="/painel_caged.png"
          width={832}
          height={832}
          className="mx-auto"
          alt="imagem do projeto painel_estatisticas o qual fiz para a jucema"
        />
      </div>
    </main>
  )
}
