"use client"
import React, { useEffect, useState } from 'react'

interface ID {
    id: number
}

interface Props {
    params: ID
}

export default function page(props: Props) {
    const [data, setData] = useState<any>()
    let totem;
    const { params } = props
    function getAPI(){
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => setData(data))
    }
    getAPI()
    data?.map((item: any) => {
        if(item.id == params.id){
            totem = item
        }
    })
    console.log(totem);
    
    
  return (
    <div>B2</div>
  )
}
