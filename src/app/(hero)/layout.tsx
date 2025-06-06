
import { ReactNode } from "react"
import Head from "@/components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Head />
        {children}
      </div>
  );
}
