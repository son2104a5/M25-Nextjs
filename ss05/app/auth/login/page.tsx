"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const isCheckLogin = true
    const router = useRouter()
    const loginUser = () => {
        if (isCheckLogin) {
            router.push('/dashboard')
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng')
        }
    }
  return (
    <div className='flex gap-10'>
        Trang Login
        <button onClick={loginUser}>Login</button>
    </div>
  )
}
