import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import scaleSrc from '/public/scale.jpg'
export default function Page() {
  return (
    <div>
      <Hero  imgData={scaleSrc} alt='scale' title='this is scale'/>
    </div>
  )
}

