import type { Metadata } from 'next'
import { Josefin_Sans,Belanosima } from 'next/font/google'
import './globals.css'


import { ClerkProvider } from '@clerk/nextjs'
import Nav from '@/components/Nav'

const josafin = Josefin_Sans({ subsets: ['latin'],weight: ['100', '200', '300', '400', '500', '600', '700'], variable:'--font-josafin' })
const belanosima = Belanosima({ subsets: ['latin-ext'], weight: '700',variable:'--font-cairo' })
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
      <body className={`${belanosima.variable} ${josafin.className} bg-[#17181c] flex flex-col min-h-screen container mx-auto `}>
        <header className='w-full '>
          <Nav />
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
