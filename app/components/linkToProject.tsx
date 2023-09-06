'use client'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

export const LinkToProject = ({
  href,
  projectName,
}: {
  href: string
  projectName: string
}): JSX.Element => {
  return (
    <Link
      href={href}
      className="flex w-max cursor-pointer items-center gap-2"
      target="_blank"
    >
      <BiLinkExternal size={24} className="text-blue-950/70 dark:text-white/70" />
      <p className="text-xs font-semibold text-blue-950/70 transition-all duration-150 hover:text-blue-950 dark:text-white/70 dark:hover:text-white/100">
        {projectName}
      </p>
    </Link>
  )
}
