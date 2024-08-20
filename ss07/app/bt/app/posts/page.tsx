"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const [inputValue, setInputValue] = useState("")
    const router = useRouter()
    const searchParam = useSearchParams()
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const handleClick = () => {
        if (inputValue) {
            router.push(`/posts?search=${inputValue}`)
        }
    }
  return (
    <div>
        <div>Search Value: {searchParam.get('search')}</div>
        <input 
            type="text"
            className='border-2 rounded p-2'
            onChange={handleInputChange}
        />
        <button className='border-2 p-2 ml-2' onClick={handleClick}>Search</button>
    </div>
  )
}
