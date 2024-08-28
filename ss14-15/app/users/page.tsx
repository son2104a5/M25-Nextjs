"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/api")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err))
    }, [])
  return (
    <div>Danh sách users:
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
