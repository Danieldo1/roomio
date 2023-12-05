'use client'

import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import result from '../assets/output.png'
import soviet from '../assets/soviet-apt.jpeg'

const ImgSlider = () => {
  return (
    <ReactCompareSlider 
    position={70}
    itemOne={<ReactCompareSliderImage src='/soviet-apt.jpeg' />}
    itemTwo={<ReactCompareSliderImage src='/output.png' />}
   className='rounded-lg'
    />
  )
}

export default ImgSlider