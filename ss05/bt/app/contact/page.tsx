"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Contact() {
  const pathName = usePathname()
  return (
    <div>
      {/* B2 */}
      {/* Đây là trang liên hệ */}
      {/* B5 */}
      <div className='flex gap-4'>
        <Link href={'/'} className={pathName == '/' ? 'active' : ''}>Home</Link>
        <Link href={'/about'} className={pathName == '/about' ? 'active' : ''}>About</Link>
        <Link href={'/contact'} className={pathName == '/contact' ? 'active' : ''}>Contact</Link>
        <Link href={'/login'} className={pathName == '/login' ? 'active' : ''}>Login</Link>
      </div>
      Contact Page
    </div>
  )
}
