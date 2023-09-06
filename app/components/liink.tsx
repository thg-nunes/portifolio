'use client'
import { Link } from 'react-scroll'
export type LinkProps = {}

export const LinkComponent = ({
  elementId,
  linkText,
  closeFilter,
}: {
  closeFilter: () => void
  linkText: string
  elementId: string
}): JSX.Element => {
  return (
    <Link
      activeClass="active"
      to={elementId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => {
        history.pushState(null, '', elementId)
        closeFilter()
      }}
    >
      <li className="cursor-pointer px-3 text-center font-semibold leading-10 text-blue-950 duration-300 hover:bg-gray-450 hover:text-white dark:text-white md:hover:bg-gray-700">
        {linkText}
      </li>
    </Link>
  )
}
