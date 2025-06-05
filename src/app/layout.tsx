"use client"
import type { Metadata } from "next";
import Link from "next/link";
import {useState} from "react";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount] = useState(0);
  const pathname = usePathname();
  return (
    <html lang="en" >
      <body>  

      <h1>根layout</h1>
        {children}
<br/><br/>
        <button onClick={() => setCount(count + 1)}>count: {count}</button>

        <br/>
      <Link rel="stylesheet" href="/dashboard" className={`'link' ${pathname === '/dashboard' ? 'active' : ''}`} >跳转到dashboard</Link>

      <br/>
      <Link rel="stylesheet" href="/dashboard/blog" className={`'link' ${pathname === '/dashboard/blog' ? 'active' : ''}`}>blog</Link>
      </body>
    </html>
  );
}
