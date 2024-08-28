import axios from 'axios'
import React from 'react'

const getProducts = async () => {
    const res: any = await axios.get('http://localhost:3000/api/handler')
    return res.data
}

export default async function page() {
    const data = await getProducts()
    console.log(data);
    
  return (
    <div>
        <table className='w-2/3'>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                    <td>decription</td>
                    <td>category</td>
                    <td>image</td>
                    <td>rating</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.data.map((item: any)=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td><img src={item.image} alt={item.title} width="100" height="100" /></td>
                                <td className='flex flex-col'>
                                    {item.rating.rate}
                                    {item.rating.count}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
