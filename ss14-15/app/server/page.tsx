"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}

export default async function page() {
    // tạo function lấy data ở trên server
    const router = useRouter()
    const users = await getUser()
    const handleClick = async () => {
        router.push('/useswr')
    }
  return (
    <div className='flex flex-col'>data fetching server with fetch
        <button onClick={handleClick} className='p-1 bg-blue-400 w-20'>Click</button>
        {
            users.map((user: any) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))
        }
    </div>
  )
}
