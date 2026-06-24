# NoahDuck Harbor Build

这是一个独立的新站构建稿，刻意没有命名为“正式站”或 `noah-personal-site`，避免和旧项目混淆。

## 运行

```bash
npm install
npm run dev -- --port 4192
```

当前路由：

- `/` 首页
- `/shallow` 浅水区
- `/open-sea` 公海
- `/deep` 深水区
- `/vault` 藏宝库

## 验证

```bash
npm run lint
npm run build
```

本轮已通过两项验证。

## 落地说明

- 内容数据先放在 `src/data/site.ts`，后续可以替换成真实 CMS、Markdown 或旧站数据接口。
- 页面结构在 `src/pages/`，导航在 `src/components/SiteNav.tsx`。
- 全局 tokens、响应式和空间语法在 `src/styles/site.css`。
- 头像资源在 `public/assets/noahduck-avatar.jpg`。

## 后续接入重点

- 把平台链接替换成真实账号 URL，当前微信、视频号保留为搜索引导。
- 将浅水区、深水区、公海的示例内容替换成真实文章数据。
- 如果迁回旧 React 项目，优先迁移结构和 CSS 语法，不要把旧列表组件硬套回来。
