import { NextResponse } from 'next/server'
import React from 'react'

type ParamTypes = {
    params: {
        id: any
    }
}

let users = [
    { id: 1, user_name: 'John', age: 20 },
    { id: 2, user_name: 'Jane', age: 34 },
    { id: 3, user_name: 'Doe', age: 22 },
    { id: 4, user_name: 'Noah', age: 31 },
]

// Bài 2:
// export async function GET(req: Request, { params }: ParamTypes){
//     const { id } = params
    
//     let find = users.find(user => user.id == id)
    
//     return NextResponse.json(find ? { data: find } : 'Không tìm thấy người dùng có id = ?');
// }

// Bài 4:
// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//     const userId = parseInt(params.id, 10);

//     // Find the user by ID
//     const userIndex = users.findIndex(user => user.id === userId);

//     if (userIndex === -1) {
//         return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     // Remove the user from the list
//     users = users.filter(user => user.id !== userId);

//     return NextResponse.json({ message: 'Xóa thông tin tài khoản thành công' });
// }

// Bài 6:
// export async function PUT(req: Request){
//     const data = await req.json()

//     return NextResponse.json({
//         message: 'Cập nhật thông tin tài khoản thành công',
//     })
// }