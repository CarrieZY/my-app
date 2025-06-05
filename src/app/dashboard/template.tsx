"use client" 

import React from 'react'

export default function template({children}:{children:React.ReactNode}) {
    const [count,setCount] = React.useState(0)
  return (
    <div style={{color:'green'}}>
        我是Dashboard的Template组件

        <button onClick={()=>setCount(count+1)}>Dashboard的count:{count}</button>
      <h1>{children}</h1>
    </div>
  )
}
