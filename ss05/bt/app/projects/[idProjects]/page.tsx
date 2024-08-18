"use client"
import React from 'react'

interface IDProjects {
    idProjects: string
}

interface Props {
    params: IDProjects
}

export default function page(props: Props) {
    const { params } = props
    return (
      <div>
        Trang chi tiết dự án có id: {params.idProjects}
      </div>
    )
}
