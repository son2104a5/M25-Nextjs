import { NextResponse } from 'next/server'
import React from 'react'

const users = [
    { user_name: 'John', theme: 'dark', language: 'en', timezone: 'GMT' },
    { user_name: 'Doe', theme: 'light', language: 'en', timezone: 'GMT' },
]

// Bài 7:
export async function POST(req: Request, res: Response){
    const user = await req.json()
    users.push(user)
  return NextResponse.json({ data: users })
}

// Bài 8:
export async function GET(req: Request){
    return NextResponse.json({ data: users })
}
