"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Blogs() {
    const router = useRouter()
    const handleClick = () => {

    }
  return (
    <div>
        <div className='font-bold text-center'>Danh sách bài viết</div>
        <div className='flex gap-4 ml-3'>
            <span className='border-2 p-2 text-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ooLA59TQ107iyOYmkwUzVZJKRisuExlTGQ&s"  className='w-[200px] h-[200px]' />
                <p>Lập trình cơ bản C</p>
                <button className='border-2 p-1 rounded w-[200px]' onClick={handleClick}>Xem chi tiết</button>
            </span>
            <span className='border-2 p-2 text-center'>
                <img src="https://gocnhocuachi.com/wp-content/uploads/2022/12/sta-je-java.jpg" className='w-[200px] h-[200px]'/>
                <p>Lập trình Java core</p>
                <button className='border-2 p-1 rounded w-[200px]' onClick={handleClick}>Xem chi tiết</button>
            </span>
            <span className='border-2 p-2 text-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png"  className='w-[200px] h-[200px]'/>
                <p>Lập trình PHP</p>
                <button className='border-2 p-1 rounded w-[200px]' onClick={handleClick}>Xem chi tiết</button>
            </span>
            <span className='border-2 p-2 text-center'>
                <img src="https://thuanbui.me/wp-content/uploads/2021/08/react-js.png"  className='w-[200px] h-[200px]'/>
                <p>Lập trình ReactJS</p>
                <button className='border-2 p-1 rounded w-[200px]' onClick={handleClick}>Xem chi tiết</button>
            </span>
        </div>
    </div>
  )
}
