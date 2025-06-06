import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import performanceSrc from '/public/performance.jpg'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
    title: 'My Website',
    description: 'My website description',
    icons: {
        icon: 'cate.ico', // 默认图标（必须放在 public/ 目录下）
    },
    openGraph: { // 覆盖默认 openGraph社交分享
        title: '动态标题', // 覆盖默认 title
        description: '动态描述',
        images: 'https://example.com/og-image.jpg',
    },
};
export default function Page() {
    return (
        <div>
            <Hero imgData={performanceSrc} alt='32132' title='performance' />
        </div>
    )
}

