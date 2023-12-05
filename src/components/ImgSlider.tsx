'use client'

import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const ImgSlider = () => {
  return (
    <ReactCompareSlider 
    itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />}
    itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />}
    />
  )
}

export default ImgSlider