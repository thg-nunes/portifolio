import { LinkComponent } from '../../components/liink'

import { appRoutes } from '@/src/utils/appRouts'

export const metadata = {
  title: 'Home',
  description:
    'Aqui você vai encontrar um breve resumo de quem sou e oo que faço, além de trabalhos já realizados.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="border-b border-gray-700 text-white">
          <section className="relative mx-auto flex max-w-7xl justify-between px-4 py-1">
            <span className="text-xl font-bold leading-10">{`<thg />`}</span>
            <ul className="flex flex-row-reverse items-center gap-4 md:flex-row">
              {appRoutes.map(({ elementId, linkText }) => (
                <li
                  key={elementId}
                  className="cursor-pointer px-3 text-center font-semibold leading-10 duration-300 hover:bg-gray-450 hover:text-white dark:text-white md:hover:bg-gray-700"
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
