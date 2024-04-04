'use client'

import { List, XSquare } from '@phosphor-icons/react/dist/ssr'

import { LinkComponent } from '../../components/liink'
import { appRoutes } from '@/src/utils/appRouts'
import { useState } from 'react'

const MENU_STYLE = {
  open: 'fixed right-0 flex h-svh w-4/5 z-10 flex-col gap-4 bg-blue-950/90 transition-all duration-700 md:relative md:right-0 md:w-full md:h-12 md:flex-row md:items-center md:bg-transparent',
  close:
    'absolute -right-full flex h-svh w-4/5 flex-col gap-4 bg-blue-950/90 transition-all duration-700 md:relative md:w-auto md:right-0 md:h-12 md:flex-row md:items-center md:bg-transparent',
}

export const MenuMobile = (): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <List className="size-10 md:hidden" />
      </button>
      <ul className={menuIsOpen ? MENU_STYLE.open : MENU_STYLE.close}>
        <button className="m-3 w-max" onClick={() => setMenuIsOpen(false)}>
          <XSquare className="size-10 md:hidden" />
        </button>
        {appRoutes.map(({ elementId, linkText }) => (
          <LinkComponent elementId={elementId}>
            <li
              key={elementId}
              className="md:text-smlg:text-base w-full cursor-pointer px-6 text-center font-semibold duration-300 md:h-full"
            >
              {linkText}
            </li>
          </LinkComponent>
        ))}
      </ul>
    </>
  )
}
