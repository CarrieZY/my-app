import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import reliabilitySrc from '/public/reliability.jpg'


export default function Page() {
    return (
        <div>
            <Hero imgData={reliabilitySrc} alt='reliability' title='this is reliability' />
        </div>
    )
}

