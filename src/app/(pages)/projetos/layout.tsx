import { ReactNode } from 'react'

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <>
      <header className="sticky top-0 mb-8 bg-blue-950/50 py-4 text-white md:mb-16">
        <section className="mx-auto max-w-7xl">
          <h2 className="px-3 text-xl lg:text-2xl">Projetos em Destaque</h2>
        </section>
      </header>
      {children}
    </>
  )
}
