import ImgSlider from '@/components/ImgSlider'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'flowbite-react';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';


export default function Home() {
  return (
    <main className='my-auto gap-10 lg:flex-row flex-col flex justify-center lg:justify-around items-center'>
     <div className='flex relative max-w-xl flex-col  items-center gap-2 gradient-bg'>
      <h1 className='text-5xl md:text-6xl px-11 mt-5  text-center font-bold text-white'>Design your room in seconds with {' '} <span className='text-blue-500 text1'>room.io</span></h1>
      <p className='text-center mx-3 font-bold text-gray-400 text-lg md:text-2xl'>Our user-friendly platform seamlessly combines cutting-edge artificial intelligence with your creative vision. <br /><span className='text-gray-300 '> Making room transformations as easy as 1-2-3</span></p>
      <Link href={'/room'}>
      <Button outline  className="mt-5 p-2 text-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
        Design your room
        <ArrowSmallRightIcon className="ml-1 -mr-1 h-10 w-10" aria-hidden="true" />

      </Button>
      </Link>
     </div>
        

      <ImgSlider />
     <div>
     </div>
    </main>
  )
}
