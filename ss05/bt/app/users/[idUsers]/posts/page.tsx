"use client"
import React from 'react'

interface IDUsers {
    idUsers: string 
}

interface Props {
    params: IDUsers
}


export default function Posts(props: Props) {
    const {params} = props
    
  return (
    <div>Danh sách bài viết của User id: {params.idUsers}</div>
  )
}