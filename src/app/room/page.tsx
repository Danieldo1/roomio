import SelectCmpnt from '@/components/SelectCmpnt'
import UploadImg from '@/components/UploadImg'
import React from 'react'

const RoomPage = () => {
  return (
    <div className='container mx-auto py-10'>
        <div className='w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10'>
            <div className='flex flex-col items-center gap-8 md:w-1/3'>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Upload a photo of your room</h3>
                    {/* upload photo */}
                    <UploadImg />
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Select Type</h3>
                    {/* Select component */}
                    <SelectCmpnt />
                </div>
                <div className='flex flex-col items-center gap-5 w-full'>
                    <h3 className='text-xl font-bold text-white'>Room Theme</h3>
                    {/* theme component*/}
                </div>

                {/* Generate button */}
            </div>

            <div className='md:w-2/3 flex flex-col items-center pb-10'>
                <div className='md:flex hidden flex-col gap-5 text-center'>
                    <h1 className='text-6xl font-bold text-white'>Redesign your <span className='text-blue-500'>room</span> in seconds</h1>
                    <p className='text-2xl text-gray-500'>Upload a room, select a theme, and get inspired to create new looks for your room.</p>
                </div>
                {/* Preview component */}
            </div>
        </div>
    </div>
  )
}

export default RoomPage