import { AnchorHTMLAttributes, ReactElement } from 'react'

type MediaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactElement
  description: string
}

export const Media = ({ icon, description, ...rest }: MediaProps): JSX.Element => {
  return (
    <a
      className="flex cursor-pointer items-center gap-2 overflow-hidden hover:opacity-80 hover:transition-all hover:duration-150"
      {...rest}
    >
      {icon}
      <span className="right-0 text-xs font-semibold capitalize">{description}</span>
    </a>
  )
}
