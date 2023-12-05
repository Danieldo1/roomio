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
<div className={`${isGenerating && 'animate-pulse'}  mt-2 bg-slate-500 flex rounded-lg items-center justify-center`}>
    <div className="md:h-[300px] h-[200px] flex  items-center justify-center">
        <Image src={livingroom} alt="livingroom" width={100} height={100} />
    </div>
</div>
 
  ) : (
    <div className=' '>
        <h2 className='text-3xl font-bold text-white mb-3'>Your Redesigned Room</h2>
        <img 
        src={output}
        alt="output"
        className='rounded-lg object-cover'
        />
    </div>
  )
}

export default Preview