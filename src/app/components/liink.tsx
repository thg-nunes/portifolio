'use client'
import { ReactNode } from 'react'
import { Link } from 'react-scroll'
export type LinkProps = {}

export const LinkComponent = ({
  elementId,
  children,
}: {
  children: ReactNode
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
      className="py-2 leading-[48px] hover:bg-gray-450 hover:text-white  md:hover:bg-gray-700"
      onClick={() => history.pushState(null, '', elementId)}
    >
      {children}
    </Link>
  )
}
