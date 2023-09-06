'use client'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Media = (): JSX.Element => {
  return (
    <div className="flex w-max items-center gap-2">
      <a
        href="https://github.com/thg-nunes"
        target="_blank"
        className="group/github flex items-center gap-2 overflow-hidden"
      >
        <GithubLogo
          size={24}
          className="text-blue-950/70 dark:text-white"
          weight="bold"
        />
        <span className="right-0 hidden text-xs font-semibold capitalize text-blue-950/70 group-hover/github:block dark:text-white">
          github
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/thiago-nunes-3a7771219/"
        className="group/liinkedin flex items-center gap-2 overflow-hidden"
        target="_blank"
      >
        <LinkedinLogo
          size={24}
          className="text-blue-950/70 dark:text-white"
          weight="bold"
        />
        <span className="right-0 hidden text-xs font-semibold capitalize text-blue-950/70 group-hover/liinkedin:block dark:text-white">
          linkedin
        </span>
      </a>
    </div>
  )
}
