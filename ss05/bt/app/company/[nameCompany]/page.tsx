"use client"
import React from 'react'

interface NameCompany {
    nameCompany: string 
}

interface Props {
    params: NameCompany
}


export default function NameCompany(props: Props) {
    const {params} = props
  return (
    <div>Company name: {params.nameCompany}</div>
  )
}