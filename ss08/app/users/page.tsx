"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState<any>({ data: [] })
    useEffect(()=>{
        let data = axios.get('http://localhost:3000/api/user')
        data
         .then(res => setUsers(res.data))
         .catch(err => console.error(err))
    }, [])
    // const users = fetch('http://localhost:3000/api/user')
    // users
    //  .then(res => res.json())
    //  .then(data => console.log(data))
    //  .catch(err => console.error(err))
  return (
    <div>
        <p>Danh sách user</p>
        {
            users.length > 0 ? users?.map((item: any) => {
                return (
                    <div key={item.id}>
                        <p>id: {item.id}</p>
                        <p>name: {item.name}</p>
                    </div>
                )
            }) : 'No found'
        }
    </div>
  )
}
