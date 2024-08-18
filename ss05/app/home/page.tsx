"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Home() {
    const pathName = usePathname()
    console.log(pathName);
    
  return (
    <div className='flex flex-col'>
        Trang chủ
        <Link className={pathName == '/home/news' ? 'active' : ''} href={'home/news'}>news</Link>
        <Link className={pathName == '/home/contact' ? 'active' : ''} href={'home/contact'}>contact</Link>
    </div>
  )
}
