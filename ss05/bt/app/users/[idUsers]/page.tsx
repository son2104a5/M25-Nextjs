"use client"
import React from 'react'

interface IDUsers {
    idUsers: string 
}

interface Props {
    params: IDUsers
}


export default function IDUsers(props: Props) {
    const {params} = props
    
  return (
    <div>User id: {params.idUsers}</div>
  )
}