import React from 'react'

interface Props {
    params: any
}

export default function page(props: Props) {
    const { params } = props
  return (
    <div>
        <p>Bạn đang xem blog với đường dẫn: {params.slug}</p>
    </div>
  )
}
