# 极简生活 (Minimalist Life)

一个专注于分享低欲望生活、断舍离方法与治愈系好物的静态网站。

## 项目介绍

本项目旨在传达「少即是多」的生活哲学。通过清新的莫兰迪配色与大面积留白，为用户提供一个视觉上的「避难所」。

核心功能：
1. **好物清单**：精选家居、数码、衣物、文具四大类极简好物，提供真实的推荐理由与性价比分析。
2. **断舍离指南**：包含极简生活原则介绍，以及交互式的「物品筛选测试」工具，帮助用户决定物品去留。
3. **治愈设计**：全站采用响应式设计，适配移动端与桌面端，提供流畅的动画体验。

## 技术栈

- **构建工具**: Vite (React + TypeScript)
- **样式库**: Tailwind CSS v4 (配置莫兰迪色系主题)
- **图标库**: Lucide React
- **容器化**: Docker & Nginx
- **路由**: React Router v7
- **部署**: 支持 Docker 一键部署或纯静态构建

## 目录结构

```
frontend/
├── src/
│   ├── components/     # 公共组件 (Layout 等)
│   ├── pages/          # 页面组件 (Home, GoodThings, DeclutterGuide)
│   ├── data/           # 静态数据 (物品列表, 问卷逻辑)
│   ├── index.css       # 全局样式与 Tailwind 主题配置
│   ├── App.tsx         # 路由配置
│   └── main.tsx        # 入口文件
├── public/             
│   └── images/         # 本地化图片资源
├── Dockerfile          # 前端构建镜像配置
├── nginx.conf          # Nginx 路由配置
├── package.json        # 依赖管理
├── vite.config.ts      # Vite 配置
└── tsconfig.json       # TypeScript 配置
```

## 快速开始

### 方式一：Docker 一键启动（推荐）

本项目支持使用 Docker Compose 快速部署。

1. 确保已安装 Docker 和 Docker Compose。
2. 在项目根目录下运行：

```bash
docker compose up -d --build
```

3. 访问 `http://localhost:3000` 查看效果。

### 方式二：本地开发

如果您想修改代码或进行本地调试：

1. **安装依赖**

```bash
cd frontend
pnpm install
```

2. **启动开发服务器**

```bash
pnpm dev
```

3. 访问 `http://localhost:5173`。

4. **构建生产版本**

```bash
pnpm build
```

构建产物将位于 `frontend/dist` 目录。

## 设计风格

- **主色调**: 莫兰迪灰蓝、柔和米白、治愈绿
- **字体**: Inter, System UI (清晰易读)
- **交互**: 简单的淡入淡出动画，无干扰的浏览体验

---
© 2024 Minimalist Life.
