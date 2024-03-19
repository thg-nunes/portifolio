'use client'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Media = (): JSX.Element => {
  return (
    <div className="flex w-max items-center gap-2 text-white">
      <a
        href="https://github.com/thg-nunes"
        target="_blank"
        className="flex items-center gap-2 overflow-hidden hover:opacity-80 hover:transition-all hover:duration-150"
      >
        <GithubLogo size={24} weight="bold" />
        <span className="right-0 text-xs font-semibold capitalize">github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/thiago-nunes-3a7771219/"
        className="flex items-center gap-2 overflow-hidden hover:opacity-80 hover:transition-all hover:duration-150"
        target="_blank"
      >
        <LinkedinLogo size={24} weight="bold" />
        <span className="right-0 text-xs font-semibold capitalize">linkedin</span>
      </a>
    </div>
  )
}
