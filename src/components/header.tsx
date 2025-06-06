"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Head() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="absolute w-full z-10 ">
      <nav className="container flex items-center justify-between p-8 color-white header-bg">
        <Link href="/" className="font-32 font-bold">Home</Link>
        <div className="space-x-4 font-16">
          <Link href="/performance" className={`${pathname === "/performance" ? 'color-purple' : ''}`}>Performance</Link>
          <Link href="/reliability" className={`${pathname === "/reliability" ? 'color-purple' : ''}`}>Reliability</Link>
          <Link href="/scale" className={`${pathname === "/scale" ? 'color-purple' : ''}`}>scale</Link>
        </div>
      </nav>
    </div>
  )
}
