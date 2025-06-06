import './globals.css'; 
import { ReactNode } from "react"
import Head from "@/components/header";
import Hero from "@/components/hero";
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const ImageData = {
    src: "https://images.unsplash.com/photo-1688708997960-5a6f8e9a5a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "A beautiful landscape"  
  }
  return (
    <html lang="en" >
      <body>
        <Head></Head>
        {/* <Hero imgData={ImageData} alt={'3123132'} title='标题'></Hero> */}
        {children}
      </body>
    </html>
  );
}
