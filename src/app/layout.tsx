"use client"
import type { Metadata } from "next";
import Link from "next/link";
import {useState} from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount] = useState(0);
  return (
    <html lang="en" >
      <body>  

      <h1>根layout</h1>
        {children}
<br/><br/>
        <button onClick={() => setCount(count + 1)}>count: {count}</button>

        <br/>
      <Link rel="stylesheet" href="/dashboard" >跳转到dashboard</Link>

      <br/>
      <Link rel="stylesheet" href="/dashboard/blog" >blog</Link>
      </body>
    </html>
  );
}
