export type ExperiencesProps = {
  company: string
  date: {
    start: string
    end?: string
  }
  jobFunction: string
  jobInfo: {
    situation: string
    task: string
    action: string
    result: string
  }
}

export const Experiences = ({
  company,
  date,
  jobFunction,
  jobInfo,
}: ExperiencesProps): JSX.Element => {
  return (
    <section className="mx-auto flex flex-col justify-between gap-4 rounded-md bg-gray-50 p-8 shadow-md md:w-3/4 md:flex-row md:gap-0">
      <p className="text-2xl font-bold text-green-550">{company}</p>
      <p className="text-bold block text-sm md:hidden">
        {date.start} - {date.end}
      </p>
      <div className="md:w-2/4">
        <p className="mb-3 text-xl font-semibold">{jobFunction}</p>
        <ul className="flex flex-col gap-3 text-sm text-blue-950">
          <li className="lg:text-base">
            <span className="font-semibold text-blue-950">Situação: </span>
            {jobInfo.situation}
          </li>
          <li className="lg:text-base">
            <span className="font-semibold text-blue-950">Tarefa: </span>
            {jobInfo.task}
          </li>
          <li className="lg:text-base">
            <span className="font-semibold text-blue-950">Ação: </span>
            {jobInfo.action}
          </li>
          <li className="lg:text-base">
            <span className="font-semibold text-blue-950">Resultado: </span>
            {jobInfo.result}
          </li>
        </ul>
      </div>
      <p className="text-bold hidden text-sm md:block">
        {date.start} - {date.end}
      </p>
    </section>
  )
}

{
  /* <ul>
            <p className="font-semibold text-blue-950">Links para as matérias</p>
            <li className="mb-2 list-disc transition-all duration-150 hover:underline dark:hover:text-white/100">
              <a href="http://portal.jucema.ma.gov.br/pagina/898" target="_blank">
                site da jucema
              </a>
            </li>
            <li className="list-disc transition-all duration-150 hover:underline dark:hover:text-white/100">
              <a
                href="https://twitter.com/carlosbrandaoma/status/1674185203709890562"
                target="_blank"
              >
                twitter da postagem
              </a>
            </li>
          </ul> */
}
