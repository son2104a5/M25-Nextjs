import { NextResponse } from 'next/server'
import React from 'react'

const users = [
  {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
  },
  {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
  },
  {
      id: 3,
      name: 'Alice Doe',
      email: 'alice@example.com',
  }
]


export default function GET(req: any, res: any) {
  // let find = users.find(item => item.id === +res.params.id)
  // const { params } = res
  console.log(222,    res);
  
  return NextResponse.json("1111")
}
