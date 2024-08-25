import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div>
      <strong>Bài 1:</strong>
      <div className='flex gap-3'>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"primary"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button size={"lg"} variant={"primary"}>Size large</Button>
        <Button variant={"primary"} size={"sm"}>Size small</Button>
      </div>
      <strong>Bài 2:</strong>
      <div>
        
      </div>
    </div>
  )
}
