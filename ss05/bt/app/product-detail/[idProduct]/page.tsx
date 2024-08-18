"use client"
import React from 'react'

interface IDProduct {
    idProduct: string 
}

interface Props {
    params: IDProduct
}


export default function ProductDetail(props: Props) {
    const {params} = props
  return (
    <div>Product id: {params.idProduct}</div>
  )
}