import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next List',
  description: "The Next alternative to Craig's List",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <Navbar />
        <div className='pb-20 pt-28'>
        {children}
        </div>
        </body>
    </html>
  )
}
