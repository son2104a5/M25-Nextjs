"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParams = useSearchParams()
    const idProduct = searchParams.get('id')
    const nameProduct = searchParams.get('name')
    
  return (
    <div>Trang danh sách sản phẩm
        <div>sản phẩm có id: { idProduct }</div>
        <div>tên: { nameProduct }</div>
    </div>
  )
}
