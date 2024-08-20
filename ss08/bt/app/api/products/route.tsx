import axios from 'axios';
import { NextResponse } from 'next/server';
import React from 'react'

export default function Products() {
    return 
}

export async function POST(req: Request) {
    const body = await req.json();
    const { id, user_name, age } = body;

    if (!id || !user_name || !age) {
        return NextResponse.json({ message: 'Thiếu thông tin người dùng' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Thêm mới thông tin người dùng thành công' }); 
}
