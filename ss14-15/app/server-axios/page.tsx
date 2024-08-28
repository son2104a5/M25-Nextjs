import axios from 'axios'
import React from 'react'

async function getData() {
    const res: any = await axios.get('http://jsonplaceholder.typicode.com/users')
    return res.data
}

export default async function page() {
    const users = await getData()
    console.log(users);
    
  return (
    <div>data fetching with axios
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
