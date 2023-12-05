'use client'

import { useImage, useLoading, useOutput, useRoomType, useTheme } from '@/store/useStore'
import React from 'react'

const GenButton = () => {
    const imageUrl= useImage((state:any)=> state.imageUrl)
    const theme = useTheme((state:any)=> state.theme)
    const room= useRoomType((state:any)=> state.room)
    const setOutput = useOutput((state:any)=> state.setOutput)
    const setLoading = useLoading((state:any)=> state.setLoading)
    const setGenerating = useLoading((state:any)=> state.setGenerating)

    console.log(imageUrl, theme, room)
    const handleClick = async () => {
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
    className={`${imageUrl && theme  ? '' : 'cursor-not-allowed'} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition`}>
        Generate Room
    </button>
  )
}

export default GenButton