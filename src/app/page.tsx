import ImgSlider from '@/components/ImgSlider'
import Image from 'next/image'
import Link from 'next/link'
import { ReactCompareSlider } from 'react-compare-slider'

export default function Home() {
  return (
    <main className='my-auto gap-10 p-11 lg:flex-row flex-col flex justify-center lg:justify-around items-center'>
     <div className='flex relative max-w-xl flex-col  items-center gap-5 gradiant-bg'>
      <h1 className='text-5xl text-center font-bold text-white'>Design your room in seconds {' '} <span className='text-blue-500'> with Room.io</span></h1>
      <p className='text-center text-gray-500 text-lg'>Our user-friendly platform seamlessly combines cutting-edge artificial intelligence with your creative vision, making room transformations as easy as 1-2-3</p>
      <Link href={'/room'}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Design your room
        </button>
      </Link>
     </div>

     <div>
      
      <ImgSlider
      />
     </div>
    </main>
  )
}
