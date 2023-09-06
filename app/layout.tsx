import './globals.css'
import { Inter } from 'next/font/google'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
