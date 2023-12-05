'use client'

import React from 'react'
import livingroom from '../assets/livingroom.svg'
import { useLoading } from '@/store/useStore'
import { useOutput } from '@/store/useStore'
import Image from 'next/image'



const Preview = () => {
    const isLoading = useLoading((state:any)=> state.isLoading)
    const isGenerating = useLoading((state:any)=> state.isGenerating)
    const output= useOutput((state:any)=> state.output)

    return isLoading ? (
    <div className={`${isGenerating && 'animate-pulse'} md:w-[500px] md:h-[300px] w-[350px] h-[200px] mt-10 bg-slate-500 rounded-lg flex items-center justify-center `}>
        <Image src={livingroom} alt="livingroom" width={100} height={100} />
    </div>
  ) : (
    <div className='my-auto  '>
        <img 
        src={output}
        alt="output"
        className='rounded-lg object-cover'
        />
    </div>
  )
}

export default Preview