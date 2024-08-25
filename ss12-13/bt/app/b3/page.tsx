"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState<any>()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  return (
    <div>
        {
            data && data.map((item: any) => (
                <div key={item.id}>
                    {item.name} - {item.email}
                </div>
            ))
        }
    </div>
  )
}
