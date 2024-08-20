"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const [inputValue, setInputValue] = useState({
        name: '',
        category: ''
    })
    const searchParam = useSearchParams()
    const router = useRouter()
    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setInputValue({...inputValue, [name]: value })
    }
    const handleSearch = () => {
        router.push(`/products?name=${inputValue.name}&category=${inputValue.category}`)
    }
  return (
    <div className='flex flex-col gap-4 w-[500px]'>
        <p>Tên: {searchParam.get('name')}</p>
        <p>Danh mục: {searchParam.get('category')}</p>
        <input type="text" placeholder='Tìm kiếm theo tên' className='p-2 rounded border-2' name='name' onChange={handleInputChange}/>
        <input type="text" placeholder='Tìm kiếm theo danh mục' className='p-2 rounded border-2' name='category' onChange={handleInputChange}/>
        <button className='bg-black text-white p-2 rounded' onClick={handleSearch}>Tìm kiếm</button>
    </div>
  )
}
