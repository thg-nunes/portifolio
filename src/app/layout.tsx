import { Inter } from 'next/font/google'
import { AiOutlineMail } from 'react-icons/ai'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import { Media } from './components/media'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })
const year = new Date().getFullYear()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-800`}>
        {children}
        <footer
          className="flex flex-col items-center space-y-6 px-4 py-16 text-white md:px-0"
          id="contato"
        >
          <section className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 md:flex-row">
            <div className="flex items-center gap-2">
              <AiOutlineMail className="h-7 w-7" />
              desenvolvedor.nunes@gmail.com
            </div>

            <section className="flex gap-3">
              <Media
                target="_blank"
                description="github"
                href="https://github.com/thg-nunes"
                icon={<GithubLogo size={24} weight="bold" />}
              />
              <Media
                target="_blank"
                description="linkedin"
                href="https://www.linkedin.com/in/thiago-nunes-3a7771219/"
                icon={<LinkedinLogo size={24} weight="bold" />}
              />
            </section>
          </section>
          <p>Feito por: Thiago Nunes</p>
          <span>Copyright ©{year} All rights reserved </span>
        </footer>
      </body>
    </html>
  )
}
