'use client'
import { useState } from 'react'
import { List, XSquare } from '@phosphor-icons/react'

import { LinkComponent } from '../components/liink'

const navListfilters = {
  open: 'absolute left-0 right-0 top-full z-10 h-max py-8 w-full list-none bg-gray-700 text-xs text-blue-950/80 dark:text-white/80 md:flex md:h-10 transition-all duration-200',
  close:
    'absolute left-full right-0 top-full z-10 h-max py-8 w-max list-none bg-gray-700 text-xs text-blue-950/80 dark:text-white/80 md:flex md:h-10 transition-all duration-200 md:relative md:left-0 md:top-0 md:py-0 md:bg-transparent',
}

export const NavList = (): JSX.Element => {
  const [filtersVisible, setFiltersVisible] = useState<'close' | 'open'>('close')

  return (
    <>
      {filtersVisible === 'open' ? (
        <XSquare
          size={24}
          onClick={() => setFiltersVisible('close')}
          className="peer/closeIcon text-blue-950 dark:text-white md:hidden"
          weight="fill"
        />
      ) : (
        <List
          size={24}
          onClick={() => setFiltersVisible('open')}
          className="peer/openIcon text-blue-950 dark:text-white md:hidden"
          weight="fill"
        />
      )}
      <nav className={navListfilters[filtersVisible]} id="navList">
        <LinkComponent
          closeFilter={() => setFiltersVisible('close')}
          elementId="sobre-mim"
          linkText="Sobre"
        />
        <LinkComponent
          closeFilter={() => setFiltersVisible('close')}
          elementId="habilidades"
          linkText="Habilidades"
        />
        <LinkComponent
          closeFilter={() => setFiltersVisible('close')}
          elementId="experiencias"
          linkText="Experiencia"
        />
        <LinkComponent
          closeFilter={() => setFiltersVisible('close')}
          elementId="trabalhos"
          linkText="Trabalhos"
        />
        <LinkComponent
          closeFilter={() => setFiltersVisible('close')}
          elementId="contato"
          linkText="Contato"
        />
      </nav>
    </>
  )
}
