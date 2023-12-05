'use client'

import { useImage, useLoading, useOutput, useRoomType, useTheme } from '@/store/useStore'
import React from 'react'

const GenButton = ({ scrollRef }:any) => {
    const imageUrl= useImage((state:any)=> state.imageUrl)
    const theme = useTheme((state:any)=> state.theme)
    const room= useRoomType((state:any)=> state.room)
    const setOutput = useOutput((state:any)=> state.setOutput)
    const setLoading = useLoading((state:any)=> state.setLoading)
    const setGenerating = useLoading((state:any)=> state.setGenerating)

    const handleClick = async () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        if(imageUrl && theme){
            setLoading(true)
            // setGenerating(true)
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageUrl, theme, room }),
            })

            const data = await response.json()
            setLoading(false)
            setOutput(data[1])

        }
      
    }
  return (
    <button 
    onClick={handleClick}
    className={`${imageUrl && theme  ? '' : 'cursor-not-allowed'} w-full py-4 mt-5  text-xl text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg transition`}>
        Generate Room
    </button>
    
  )
}

export default GenButton