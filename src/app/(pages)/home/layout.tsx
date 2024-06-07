import { Metadata } from 'next'
import { MenuMobile } from './menuMobile'

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
      <header className="fixed top-0 z-50 w-full overflow-hidden bg-gray-800 py-2 lg:py-0">
        <nav className="border-b border-gray-700 text-white">
          <section className="relative mx-auto flex max-w-7xl justify-between px-4">
            <span className="text-xl font-bold leading-10 md:leading-[48px]">{`<thg />`}</span>
            <MenuMobile />
          </section>
        </nav>
      </header>
      {children}
    </>
  )
}
