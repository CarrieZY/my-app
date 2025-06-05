

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <h2>嵌套layout {children}</h2>
  );
}
