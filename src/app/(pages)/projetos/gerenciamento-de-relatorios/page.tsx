import { Metadata } from 'next'
import Image from 'next/image'
import { GoAlertFill } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'Projeto - Painel de Empresas',
  description:
    'Esse projeto foi desenvolvido para a JUCEMA com o propósito de facilitar o gerenciamento de relatórios gerados mensalmente, esse projeto foi totalmente inovador para a empresa, pois até o momento não havia uma forma de fazer tal tarefa.',
  icons: {
    icon: [
      {
        url: '/pagina_de_relatorios.png',
        href: '/pagina_de_relatorios.png',
      },
    ],
  },
}

export default function CompanyStatistics(): JSX.Element {
  const tasks = [
    'Design do Sistema',
    'Autenticação',
    'Code Review',
    'Documentação',
    'Implementação do Layout',
  ]

  return (
    <main className="mx-auto max-w-7xl space-y-12">
      <div className="flex lg:items-center lg:justify-between">
        <section className="lg:h-max lg:w-[38%]">
          <section className="flex flex-col gap-3 rounded-md text-white">
            <p className="font-semibold lg:text-2xl">
              Desenvolvedor do Sistema De Gerenciamento de Relatórios
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
                Novembro de 2022 - Março de 2023
              </span>
            </div>
            <div>
              <p className="lg:text-xl">Finalidade</p>
              <span className="opacity-85 lg:text-sm">Gerenciamento de Relatórios</span>
            </div>
            <div>
              <p className="lg:text-xl">Função</p>
              <span className="opacity-85 lg:text-sm">Desenvolvedor, Design</span>
            </div>
          </section>
          <a
            className="text-white hover:underline"
            target="_blank"
            href="https://www.figma.com/file/TiNSLaHJW8ZvHRdj7DiTco/sistema-de-relat%C3%B3rios?type=whiteboard&node-id=0%3A1&t=cjX2la1jJjsi1Kv4-1"
          >
            acessar projeto
          </a>
        </section>
        <a
          target="_blank"
          href="https://www.figma.com/file/TiNSLaHJW8ZvHRdj7DiTco/sistema-de-relat%C3%B3rios?type=whiteboard&node-id=0%3A1&t=cjX2la1jJjsi1Kv4-1"
        >
          <Image
            alt="imagem contendo gráficos com supostas análises estatísticas"
            src="/sistema de relatórios.png"
            width={704}
            height={404}
            className="scale-95 transition-all duration-150 hover:scale-100 lg:h-[404px] lg:w-[704px]"
          />
        </a>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Contexto</span>
        <p>
          Mensalmente ssão gerados relatórios com informações de empresas abertas/fechadas
          e também empregos gerados no estado. Precisamos de um sistema que nos
          possibilite gerenciar de forma mais facil e rápida todos esses arquivos, e você
          deverá criar a página para nós que deverá atender alguns requisítos.
        </p>
        <p className="rounded-md bg-blue-700/40 p-9 font-semibold">
          <span className="mb-3 block lg:text-xl">O desafio</span> Eu deveria cria o
          protótipo do sistema e realizar a implementação do mesmo, devendo haver forma de
          realizar o download, deletar um arquivo específico da base de dados que
          estivesse com erro, fazer o upload desses relatórios, um sistema de
          autenticação, deveria tambtem ter uma página para cadastrar usuários e gerenciar
          o acesso deles ao sistema. Um diferencial desse projeto foi a implementação de
          páginas com diferentes níveis de acesso, sendo que para cada nivel deveria ser
          exibida uma inforção/função diferente.
        </p>
      </div>
      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Estratégia e Planejamento</span>
        <p>
          Parti primeiramente para a prototipação de todas as possíveis páginas que aquele
          sistema deveria ter, atentando a cada um dos requisítos levantados. Porém aqui
          surgiu um detalhe: eu nunca tinha feito um sistema de autenticação, não fazia
          ideia de como faria a proteção das rotas ou recursos que um usuário poderia ou
          não ver. Então comecei a buscar informações de como deveria fazer tudo isso de
          forma segura e performática.
        </p>

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Pesquisa de Layouts</span>
          <p>
            Como era um sistema que deveria listar os relatórios e usuários, posso dizer
            que essa parte foi tranquila, pois haviam vários dashboard's que continham
            tais implementações, e aopós um tempo de busca notei que em várias aplicações
            para listar algum tipo de informação o mais comum era usar um tipo de tabela
            para classificar/dividir tudo. Os relatórios deveriam ser filtrados por tipo,
            para isso usei o mesmo padrão de filtros das outras duas aplicações
            construidas para a empresa.
          </p>
        </section>

        <section className="pl-3">
          <span className="font-semibold lg:text-xl">Levantamento de requisítos</span>
          <p>
            Aapós algums minutos de análise de como o sistema deveria funcionar e
            conversas do colega de equipe com o chefe do setor foram levanntados os
            seguintes pontos:
          </p>

          <div className="rounded-md p-9 font-semibold">
            <ul className="list-disc space-y-3 px-6 lg:text-sm">
              <li>Os relatórios devem ser filtrados por ano, mês e tipo</li>
              <li>
                A cada mudança de opções selecionadas, o sistema deve buscar os relatórios
                existentes para uma determinada combinação de filtro
              </li>
              <li>
                O sistema deve conter os seguintes níveis de acesso: user, admin e root
              </li>
              <li>
                O usuário autenticado só pode ver as informações compatíveis com seu nível
                de acesso a uma página
              </li>
              <li>
                O sistema deve ter uma forma de realizar: upload, download e deleção de
                relatório, deve haver um meio de editar dados e ativar/desativar um
                usuário
              </li>
              <li>
                Para toda ação a ser tomada deve haver um popup de confimação e explicação
                de determinada ação
              </li>
              <li>
                Ao realizar o primeiro login, o usuário deve ser obrigado a alterar sua
                senha
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
                Do layout: dando início ao desenvolvimento do layout. Usei o{' '}
                <span className="font-semibold">figma</span> para criar o protótipo das
                páginas, funcionalidades as quais deveriam aparecer para cada tipo de
                usuário e tabelas para listar os usuários e relatórios. Usei várias ideias
                que julguei interessantes para esse tipo de aplicação das quais vi nos
                dashboards durante as buscas por inspirações.
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
                para dar vida ao projeto devida a já experiência com a ferramenta
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
                cada filtro estava relacionado com as opções selecionadas na página de
                listagem de relatórios, precisaria também que a cada seleção de opção no
                filtro fosse feita uma busca pelos relatórios existentes para aquela
                combinação, para isso usei a{' '}
                <a
                  href="https://react.dev/reference/react/useContext"
                  className="font-semibold underline"
                >
                  contextApi
                </a>{' '}
                do react.
              </li>
              <li>
                Para fazer validação dos campos de formulários existentes na aplicação e
                impedir que o usuário enviasse informações em branco ou com valores
                incorretos, usei a lib{' '}
                <a
                  className="font-semibold underline"
                  href="https://react-hook-form.com/get-started"
                >
                  react-hook-form
                </a>
              </li>
              <li>
                Já para exibir mensagens de aviso ao usuário para ações que o mesmo tomava
                eu usei a lib{' '}
                <a
                  className="underline"
                  href="https://www.npmjs.com/package/react-toastify"
                >
                  react-toastify
                </a>
              </li>
              <li>
                E para criar o campo onde o usuário iria clicar para selecionar os
                arquivos para upload, usei a lib
                <a href="https://react-dropzone.js.org/" className="underline">
                  react-dropzone
                </a>
              </li>
            </ul>
            <p className="bg-gray-200 p-3 font-semibold text-blue-950">
              <GoAlertFill className="mr-3 inline size-6 text-yellow-700" />O grade
              desafio para mim nesse projeto foi desenvolver autenticação, pois usariamos
              um sistema baseado em{' '}
              <a
                className="semibold underline"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API"
              >
                JWT
              </a>{' '}
              e quando o token expirasse eu deveria fazer uma atualização do token e de
              todas as requisições que estavam usando o token antigo sem que o usuário
              precisasse fazer um novo login ou percebesse esse processo.
            </p>
          </div>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Resultados e Impacto</span>
        <section className="space-y-3 rounded-md p-9">
          <p>
            Os impactos desse novo sistema foram significativos para os que precisavam
            gerenciar ou acessar esses relatórios, veja:
          </p>
          <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
            <li>
              O usuário agora podia fazer o upload de um relatório de forma mais facil e
              com apenas algums cliques
            </li>
            <li>
              Caso um relatório estivesse errado ou corrompido, agora havia como deletar
              ele da base de dados sem nenhuma complexidade ou demora no processo
            </li>
            <li>
              Antes os relatórios eram enviados por email assim que eram gerados, e agora
              passou a ter a possibilidade de download no momento que o usuário desejasse
            </li>
            <li>
              Antes as pessoas ficavam a espera de alguém do setor para obter um
              relatório, agora bastava entrar no sistema que ela teria acesso de forma
              imediata
            </li>
            <li>
              No que diz respeito ao upload o sistema trouxe a possibilidade de upload de
              múltiplos arquivos de uma vez
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto space-y-3 text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Ferramentas usadas</span>
        <section className="space-y-3 rounded-md p-9">
          <p>
            Aqui estão algumas das ferramentas que usei para o processo de construção da
            aplicação:
          </p>
          <ul className="mb-6 list-disc space-y-3 px-6 lg:text-sm">
            <li>
              <a
                className="underline"
                href="https://www.npmjs.com/package/react-toastify"
              >
                react-toastify
              </a>
            </li>
            <li>
              <a className="underline" href="https://react-hook-form.com/get-started">
                react-hook-form
              </a>
            </li>
            <li>
              <a href="https://react-icons.github.io/react-icons/" className="underline">
                react-icons
              </a>
            </li>
            <li>
              <a href="https://react-dropzone.js.org/" className="underline">
                react-dropzone
              </a>
            </li>
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
              <a className="underline" href="https://tailwindui.com/documentation">
                TailwindCss
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
      <div className="mx-auto space-y-3 border-b border-white/25 pb-[72px] text-white lg:w-3/4">
        <span className="font-semibold lg:text-2xl">Layout Final Do Projeto</span>
        <p>
          Esse projeto não tem acesso publico, como mencionado o acesso é por meio de
          user/password. Mas você pode ver o projeto no figma clicando na imagem abaixo.
        </p>
        <a
          className="mt-3 inline-block underline"
          href="https://www.figma.com/file/TiNSLaHJW8ZvHRdj7DiTco/sistema-de-relat%C3%B3rios?type=whiteboard&node-id=0-1"
        >
          <Image
            className="scale-95 hover:scale-100 hover:transition-all hover:duration-150"
            src="/projeto-relatorios.png"
            alt="imagem do layout no figma do projeto pagina de relatórios"
            width={832}
            height={832}
          />
        </a>
      </div>
    </main>
  )
}
