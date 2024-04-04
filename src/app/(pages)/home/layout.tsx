import { Metadata } from 'next'
import { List } from '@phosphor-icons/react/dist/ssr'

import { LinkComponent } from '../../components/liink'
import { appRoutes } from '@/src/utils/appRouts'

export const metadata: Metadata = {
  title: 'Home',
  icons: [
    {
      url: '/homePage-icon.svg',
      href: '/homePage-icon.svg',
    },
  ],
  description:
    'Aqui você vai encontrar um breve resumo de quem sou e o que faço, além de trabalhos já realizados.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="border-b border-gray-700 text-white">
          <section className="relative mx-auto flex max-w-7xl justify-between px-4">
            <span className="text-xl font-bold leading-10 md:leading-[48px]">{`<thg />`}</span>
            <List className="peer/mobileMenu size-10 md:hidden" />
            <ul className="absolute right-full top-full flex h-svh w-3/4 flex-col gap-4 bg-blue-950/90 md:relative md:right-0 md:h-12 md:flex-row md:items-center md:bg-transparent">
              {appRoutes.map(({ elementId, linkText }) => (
                <li
                  key={elementId}
                  className=" w-full cursor-pointer px-3 text-center font-semibold duration-300 hover:bg-gray-450 hover:text-white dark:text-white md:h-full md:text-sm md:hover:bg-gray-700 lg:text-base"
                >
                  <LinkComponent elementId={elementId} linkText={linkText} />
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </header>
      {children}
    </>
  )
}
