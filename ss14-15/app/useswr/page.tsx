"use client"
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

const fetchData = async (url: any) => {
    const res = await axios.get(url)
    return res.data
}

export default function page() {
    const {data, error} = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        fetchData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    if (error) {
        return <div>Failed to load data</div>
    }
    if (!data) {
        return <div>Loading...</div>
    }
    
  return (
    <div>Use SWR
        {
            data.map((item: any) => (
                <li key={item.id}>
                    {item.name} - {item.email}
                </li>
            ))
        }
    </div>
  )
}
