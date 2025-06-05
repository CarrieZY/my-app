import React from 'react'

export default function Template({children}:{children:React.ReactNode}) {
  return (
    <div>
      <h2>我是Template</h2>
      {children}
    </div>
  )
}
