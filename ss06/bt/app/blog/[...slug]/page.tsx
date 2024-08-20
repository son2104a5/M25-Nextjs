import React from 'react'

interface Props {
    slug: any
}

export default function page(props: Props) {
    const { slug } = props
  return (
    <div>
        <p>Bạn đang xem blog với đường dẫn: {slug.slug}</p>
    </div>
  )
}
