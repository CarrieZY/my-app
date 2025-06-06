import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import HomeSrc from '/public/home.jpg'
export default function Page() {
  return (
    <div>
      <Hero  imgData={HomeSrc} alt='32132' title='this is homepage'/>
    </div>
  )
}

