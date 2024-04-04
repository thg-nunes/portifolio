'use client'
import { Link } from 'react-scroll'
export type LinkProps = {}

export const LinkComponent = ({
  elementId,
  linkText,
}: {
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
      className="leading-[48px]"
      onClick={() => history.pushState(null, '', elementId)}
    >
      {linkText}
    </Link>
  )
}
