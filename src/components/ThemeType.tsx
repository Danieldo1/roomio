'use client'

import Image from 'next/image'
import React from 'react'
import ambient from '../assets/ambient.jpg'
import costal from '../assets/costal.jpg'
import classic from '../assets/classic.jpg'
import industrial from '../assets/industrial.jpg'
import modern from '../assets/modern.jpg'
import minimalistic from '../assets/minimalistic.jpg'
import retro from '../assets/retro.jpg'
import scandinavian from '../assets/scandinavian.jpg'
import { useTheme } from '@/store/useStore'

const ThemeType = () => {
    const setTheme=useTheme((state:any)=>state.setTheme)
    const themes = [
        {value: 'Costal', imageUrl: costal},
        {value: 'Modern', imageUrl: modern},
        {value: 'Industrial', imageUrl: industrial},
        {value: 'Scandinavian', imageUrl: scandinavian},
        {value: 'Retro', imageUrl: retro},
        {value: 'Minimal', imageUrl: minimalistic},
        {value: 'Classic', imageUrl: classic},
        {value: 'Ambient', imageUrl: ambient},
    ]

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        document.querySelector(".selected")?.classList.remove("selected");
        e.currentTarget.classList.add("selected")
        setTheme(e.currentTarget.lastChild?.textContent);
    }


  return (
    <div className='grid grid-cols gap-10'>
        {themes.map((theme, index) => {
            return (
                <div onClick={handleClick} key={index} className='transition-all flex flex-col items-center group gap-2 cursor-pointer'>
                   <Image src={theme.imageUrl} alt={theme.value} className='rounded-lg group-hover:opacity-80' />
                   <p className='text-white font-semibold'>{theme.value}</p>
                </div>
            )     
        })}
    </div>
  )
}

export default ThemeType