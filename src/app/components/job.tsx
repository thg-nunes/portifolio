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
  row: 'mx-auto flex max-w-7xl items-center justify-around',
  reverse: 'mx-auto flex max-w-7xl flex-row-reverse items-center justify-around',
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
        <a href={jobLink} className="w-max hover:underline">
          ver projeto
        </a>
      </section>

      <a href={jobLink} className="group relative">
        <span className="absolute hidden h-full w-full bg-black/25 text-white group-hover:block" />
        <Image
          width={464}
          height={464}
          className="rounded-md lg:size-[464px]"
          src={projectSrc}
          alt="imagem do projeto de estatisticas"
        />
      </a>
    </div>
  )
}
