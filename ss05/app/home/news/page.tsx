"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function New() {
    const pathName = usePathname()

  return (
    <div className='flex flex-col'>
        News
        <Link className={pathName == '/home/news' ? 'active' : ''} href={'news'}>news</Link>
        <Link className={pathName == '/home/contact' ? 'active' : ''} href={'contact'}>contact</Link>
    </div>
  )
}
