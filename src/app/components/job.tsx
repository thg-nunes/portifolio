import Image from 'next/image'

export type JobProps = {
  jobName: string
  tasks: string[]
  shortDesctiption: string
  jobLink: string
  projectSrc: string
  itemsDirection?: 'row' | 'reverse'
}
const _itemsDirection = {
  row: 'mx-auto flex flex-col-reverse gap-3 max-w-7xl items-center justify-around md:flex-row',
  reverse:
    'mx-auto flex max-w-7xl flex-col-reverse gap-3 flex-row-reverse items-center justify-around md:flex-row-reverse',
}

export const Job = ({
  jobLink,
  jobName,
  shortDesctiption,
  tasks,
  projectSrc,
  itemsDirection = 'row',
}: JobProps): JSX.Element => {
  return (
    <div className={_itemsDirection[itemsDirection]}>
      <section className="flex max-w-80 flex-col gap-3 rounded-md bg-gray-200 p-3 text-blue-950">
        <p className="font-semibold">{jobName}</p>
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
        <p>{shortDesctiption}</p>
        <a href={jobLink} className="w-max underline lg:no-underline lg:hover:underline">
          ver projeto
        </a>
      </section>

      <a href={jobLink} className="group relative">
        <span className="absolute hidden h-full w-full bg-black/25 text-white group-hover:block" />
        <Image
          width={680}
          height={592}
          className="rounded-md lg:h-[592px] lg:w-[680px]"
          src={projectSrc}
          alt="imagem do projeto de estatisticas"
        />
      </a>
    </div>
  )
}
