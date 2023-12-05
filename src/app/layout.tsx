import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Room.io',
  description: 'Room.io get inspired to create new looks for your room.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className+ ' bg-[#17181c] flex flex-col min-h-screen container mx-auto' }>
        <header className='w-full '>
          <Nav />
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
