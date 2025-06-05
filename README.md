## layout 多个页面之前共享的UI
即使在路由发生跳转的情况下，layout里面的内容也不会进行中心渲染，而是直接进行渲染
它有几种存在形式：rootLayout（根layout）、NestingLayout（嵌套layout）、PageLayout（页面layout）
### rootLayout（根layout）
语法格式：
```jsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}
```

### NestingLayout（嵌套layout）
语法格式：
```jsx
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <h2>嵌套layout {children}</h2>
  );
}

```
在项目的dashboard目录下新建一个blog/page.tsx文件,在浏览器url输入：http://localhost:3000/dashboard/blog  可以看到展示了嵌套layout的内容又展示了根layout的内容