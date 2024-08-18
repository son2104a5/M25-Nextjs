"use client"
import React from 'react'

interface IDProduct {
    idProduct: string 
}

interface Props {
    params: IDProduct
}


export default function ProductDetail(props: Props) {
    console.log("Giá trị của props", props);
    const {params} = props
  return (
    <div>Sp có id là: {params.idProduct}</div>
  )
}
/*
    client component
    server component
*/
