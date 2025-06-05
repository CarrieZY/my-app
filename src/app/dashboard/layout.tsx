

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{padding: "10px",border: "1px solid #ccc"}}>
      <h1>我是DashboardLayout</h1>
      <h2>{children}</h2>
      </div>
  );
}
