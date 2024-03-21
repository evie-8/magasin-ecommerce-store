import type { Metadata } from 'next'

import './globals.css'
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import ProgressLoader from '@/components/ProgressBar';
import ModalProvider from '@/providers/modal-providers';
import ToastProvider from '@/providers/toast-provider';

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
      <body >
        <ModalProvider/>
        <ToastProvider/>
        <ProgressLoader/>
      <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
