import { NextResponse } from 'next/server'
import React, { useActionState } from 'react'

type ParamTypes = {
    params: {
        id: any
    }
}

const users = [
    { id: 1, user_name: 'John', age: 20 },
    { id: 2, user_name: 'Jane', age: 34 },
    { id: 3, user_name: 'Doe', age: 22 },
    { id: 4, user_name: 'Noah', age: 31 },
]

// Bài 1 + 3:
export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const userName = searchParams.get('user_name');

    if (!userName) {
        return NextResponse.json(users);
    }

    const filteredUsers = users.filter(user => 
        user.user_name.toLowerCase().includes(userName.toLowerCase())
    );

    return NextResponse.json(filteredUsers ? filteredUsers : { data: users });
}

// Handle POST requests
// Bài 5:
export async function POST(request: Request) {
    const body = await request.json();
    const { id, user_name, age } = body;

    if (!id || !user_name || !age) {
        return NextResponse.json({ message: 'Thiếu thông tin người dùng' }, { status: 400 });
    }

    // Add the new user to the list
    users.push({ id, user_name, age });

    return NextResponse.json({ message: 'Thêm mới thông tin người dùng thành công' });
}