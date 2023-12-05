'use client'
import { useRoomType } from '@/store/useStore'
import React from 'react'
import Select from 'react-select'

const SelectCmpnt = () => {
    const setRoomType = useRoomType((state:any)=> state.setRoom)
    
    function handleChange(e: any){
        setRoomType(e.value)
    }


    const options=[
        {value:'living room', label:'Living Room'},
        {value:'bedroom', label:'Bedroom'},
        {value:'bathroom', label:'Bathroom'},
        {value:'kitchen', label:'Kitchen'},
    ]

  return (
    <div className='w-full'>
        <Select onChange={handleChange} options={options}   placeholder='Select Room Type' className='cursor-pointer' />
    </div>
  )
}

export default SelectCmpnt