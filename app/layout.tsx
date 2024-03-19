import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import ProgressLoader from '@/components/ProgressBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magasin | E-commerce',
  description: 'Magasin | E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressLoader/>
      <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
