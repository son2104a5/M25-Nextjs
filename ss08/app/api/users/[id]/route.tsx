import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
// import React from 'react'

// const users = [
//   {
//       id: 1,
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//   },
//   {
//       id: 2,
//       name: 'Jane Doe',
//       email: 'janedoe@example.com',
//   },
//   {
//       id: 3,
//       name: 'Alice Doe',
//       email: 'alice@example.com',
//   }
// ]


// export default function GET(req: any, res: any) {
//   // let find = users.find(item => item.id === +res.params.id)
//   // const { params } = res
//   console.log(222,    res);
  
//   return NextResponse.json("1111")
// }

export async function PUT(req: NextRequest, params: { params: {id: string } }) {
  try {
    // Bước 1: Lấy vị trí file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json")

    // Đọc file
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Bước 2: Tìm kiếm vị trí phần tử cần cập nhật
    const findIndex = users.findIndex((user: any) => user.id == +params.params.id)

    // Bước 3: Gán lai giá trị cho phần tử cần cập nhật
    if (findIndex !== -1) {
      users[findIndex].name = "Anne"
    }
    // Bước 4: Ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8")

    // Bước 5: Trả về mesage cho client
    return NextResponse.json("Cập nhật thành công")
  } catch (error) {
      return NextResponse.json("Cập nhật thất bại")
  }
}