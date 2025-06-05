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



## 关于模版  template
与layout类似 包装子布局和页面，模版在导航时为每个子项组件创建一个新的实例，并且每次导航时都会重新渲染模版，在客户端不保留模版的状态，重新同步状态
### 语法：
```jsx
import React from 'react'

export default function Template({children}:{children:React.ReactNode}) {
  return (
    <div>
      <h2>我是Template</h2>
      {children}
    </div>
  )
}
```
与layout的关系是：template嵌套在layout中  
两者之间的差异：layout在导航时不会重新渲染（会保留状态），template在导航时会重新渲染（不会保留状态）

