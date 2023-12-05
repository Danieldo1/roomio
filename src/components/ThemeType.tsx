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

const ThemeType = () => {
    const themes = [
        {value: 'costal', imageUrl: costal},
        {value: 'modern', imageUrl: modern},
        {value: 'industrial', imageUrl: industrial},
        {value: 'scandinavian', imageUrl: scandinavian},
        {value: 'retro', imageUrl: retro},
        {value: 'minimal', imageUrl: minimalistic},
        {value: 'classic', imageUrl: classic},
        {value: 'ambient', imageUrl: ambient},
    ]

    const handleClick = (e:React.MouseEvent<HTMLDListElement, MouseEvent>) => {
        document.querySelector('.selected')?.classList.remove('selected')
        e.currentTarget.classList.add('selected')
        setTheme(e.currentTarget.lastChild?.textContent)
    }


  return (
    <div className='grid grid-cols-2 gap-5'>
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