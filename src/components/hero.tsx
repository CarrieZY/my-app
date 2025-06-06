import React from 'react'
import type {StaticImageData} from 'next/image'
import Image from 'next/image'
interface HeroProps {
  // Add props here
  imgData:StaticImageData,
  alt: string
  title:string
}
export default function Hero(props: HeroProps) {

  return (
    <div className='relative h-screen'>
        <div className='absolute -z-10 inset-0'>
            <Image src={props.imgData} alt={props.alt} fill style={{objectFit: 'fill'}}/>
            <div className='absolute inset-0 bg-gradient-to-b from-slate-900 opacity-70'></div>
        </div>
        <div className="pt-48 flex justify-center">
            <h1 className='color-white text-7xl'>{props.title}</h1>
        </div>
    </div>
  )
}
