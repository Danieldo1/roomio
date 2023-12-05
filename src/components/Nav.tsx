import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/livingroom.svg'
import User from '@/components/User'

const Nav = () => {
  return (
    <div className='container border-b p-5 mx-auto flex items-center justify-between '>
            <Link href={'/'} className='flex items-center gap-3 p-2'>
              <Image src={logo} alt='logo' width={50} height={50} />
              <h3 className='text-2xl md:text-3xl font-bold text-white'>Room.io</h3>
            </Link>
            <User />
    </div>
  )
}

export default Nav