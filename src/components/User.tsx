'use client'

import React from 'react'
import { useUser,UserButton } from '@clerk/nextjs'
import Link from 'next/link'


const User = () => {
    const {user} = useUser()

  return !user ? (
    <Link href={'/room'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >
        Log in
    </Link>
  ) : (
    <UserButton />
  )
}

export default User