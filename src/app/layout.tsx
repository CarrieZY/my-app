import './globals.css'; 
import { ReactNode } from "react"
import Head from "@/components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
