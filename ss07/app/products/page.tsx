import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParams = useSearchParams()
  return (
    <div>Trang danh sách sản phẩm</div>
  )
}
