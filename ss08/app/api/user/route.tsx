// "use client"
// import React from 'react'
import { NextResponse } from "next/server"
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

export async function GET() {
    
  return NextResponse.json({data: users})
}

export async function POST(req: any) {
    const data = await req.json()

    return NextResponse.json({
        message: 'thêm user thành công',
        user: data
    })
}

export async function PUT(req: any) {
    const data = await req.json()

    return NextResponse.json({
        message: 'cập nhật user thành công',
        user: data
    })
}

export async function PATCH(req: any) {
    const data = await req.json()

    return NextResponse.json({
        message: 'cập nhật user thành công vs method PATCH',
        user: data
    })
}

export async function DELETE(req: any) {
    const data = await req.json()

    return NextResponse.json({
        message: 'xoá user thành công',
        user: data
    })
}