"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data))
    })
  return (
    <div>
        {products?.map((product: any) => (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <img src={product.image} alt={product.title} />
            </div>
        ))}
    </div>
  )
}
