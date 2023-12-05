import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/livingroom.svg'
import { ClerkProvider } from '@clerk/nextjs'
import User from '@/components/User'
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
          <div className='container border-b p-5 mx-auto flex items-center justify-between '>
            <Link href={'/'} className='flex items-center gap-3 p-2'>
              <Image src={logo} alt='logo' width={50} height={50} />
              <h3 className='text-2xl md:text-3xl font-bold text-white'>Room.io</h3>
            </Link>
            <User />

          </div>
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
