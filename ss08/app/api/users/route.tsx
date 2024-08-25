// "use client"
// import React from 'react'
import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// const users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//     },
//     {
//         id: 2,
//         name: 'Jane Doe',
//         email: 'janedoe@example.com',
//     },
//     {
//         id: 3,
//         name: 'Alice Doe',
//         email: 'alice@example.com',
//     }
// ]

// export async function GET() {
    
//   return NextResponse.json({data: users})
// }

// export async function POST(req: any) {
    //     const data = await req.json()
    
    //     return NextResponse.json({
        //         message: 'thêm user thành công',
        //         user: data
        //     })
        // }
        
// export async function PUT(req: any) {
//     const data = await req.json()

//     return NextResponse.json({
//         message: 'cập nhật user thành công',
//         user: data
//     })
// }

// export async function PATCH(req: any) {
//     const data = await req.json()

//     return NextResponse.json({
//         message: 'cập nhật user thành công vs method PATCH',
//         user: data
//     })
// }

// export async function DELETE(req: any) {
//     const data = await req.json()

//     return NextResponse.json({
//         message: 'xoá user thành công',
//         user: data
//     })
// }

export async function GET() {
    try {
        // Bước 1: Lấy ra đường dẫn cua file cần đọc
        const filePath = path.join(process.cwd(), "database/users.json")

        // Bước 2: Sử dụng fs để đọc file
        const data = fs.readFileSync(filePath, "utf8");

        // Bước 3: Ép kiểu từ dạng JSON sang TS
        const users = JSON.parse(data)

        // Trả về dữ liệu cho phía client
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Bước 1: Lấy dữ liệu từ phía client
        const userReq = await req.json()

        // Bước 2: Lấy ra đường dẫn của file cần ghi
        const filePath = path.join(process.cwd(), "database", "users.json")

        // Bước 3: Đọc file cần ghi vào
        const users = JSON.parse(fs.readFileSync(filePath, 'utf8'))

        // Bước 4: Push dữ liệu vào trong mảng
        users.push(userReq)

        // Bước 5: Ghi file
        fs.writeFileSync(filePath, JSON.stringify(users), "utf8")

        // Bước 6: Trả về kiểu dữ liệu cho client
        return NextResponse.json({ message: "Ghi file thành công" })
    } catch (error) {
        return NextResponse.json({ message: "Ghi file thất bại" })
    }
}

