'use client'

import GenButton from '@/components/GenButton'
import Preview from '@/components/Preview'
import SelectCmpnt from '@/components/SelectCmpnt'
import ThemeType from '@/components/ThemeType'
import UploadImg from '@/components/UploadImg'
import React,{ useRef } from 'react'

const RoomPage = () => {
    const topOfPageRef = useRef(null);
  return (
    <div className='container mx-auto py-10 ' >

            <div className=' flex flex-col text-center items-center pb-10'>
                <div className='md:flex hidden flex-col gap-5 text-center'>
                    <h1 className='text-6xl font-bold text-white'>Redesign your <span className='text-blue-500'>room</span> in seconds</h1>
                    <p className='text-2xl text-gray-500'>Upload a room, select a theme, and get inspired to create new looks for your room.</p>
                </div>
            </div>

        <div className='w-full flex flex-col md:flex-row items-center md:items-stretch gap-10 px-10 md:px-0'>
            <div className='flex flex-col items-center gap-8 md:w-[70%]'>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Upload a photo of your room</h3>
                    <UploadImg />
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Select Type</h3>
                    <SelectCmpnt />
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Room Theme</h3>
               
                    <ThemeType />
                </div>

              
                <GenButton scrollRef={topOfPageRef} />
            </div>

                <div className='w-full mx-auto flex flex-col  text-center' ref={topOfPageRef}>
                <Preview />
                </div>
        </div>
    </div>
  )
}

export default RoomPage