"use client" 
import React from 'react'

export default function Template({children}:{children:React.ReactNode}) {

    const [count, setCount] = React.useState(0)
  return (
    <div>
      <h2>我是Template</h2>

      <button onClick={() => setCount(count + 1)}>Template的count:{count}</button>
      {children}
    </div>
  )
}
