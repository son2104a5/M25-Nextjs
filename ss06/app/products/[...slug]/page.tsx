"use client"
import React from 'react'

interface Product {
    idProduct: string
}

interface Props {
    params: any
}

export default function ProductDetail(props: Props) {
    const { params } = props
  return (
    <div>sp có id là: {params.slug}</div>
  )
}
