import { ReactNode } from 'react'

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <>
      <header className="sticky top-0 mb-16 bg-blue-950/50 py-4 text-white">
        <section className="mx-auto max-w-7xl">
          <h2 className="lg:text-2xl">Projetos em Destaque</h2>
        </section>
      </header>
      {children}
    </>
  )
}
