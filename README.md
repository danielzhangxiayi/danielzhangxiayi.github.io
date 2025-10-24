# 我的个人博客

这是一个使用 HTML、CSS 和 JavaScript 构建的个人博客，可以通过 GitHub Pages 免费托管。

## 项目结构

```
my-blog/
├── index.html              # 博客主页
├── README.md              # 项目说明文件
├── posts/                 # 博客文章目录
│   ├── first-post.html    # 第一篇文章
│   ├── second-post.html   # 第二篇文章
│   └── third-post.html    # 第三篇文章
└── assets/                # 资源文件目录
    ├── css/
    │   ├── style.css      # 主样式表
    │   └── post.css       # 文章页面样式
    └── js/
        └── script.js      # JavaScript 脚本
```

## 功能特性

- **响应式设计**：在各种设备上都能正常显示
- **现代化外观**：使用现代的 CSS 样式和配色方案
- **易于扩展**：简单的 HTML 结构，易于添加新文章
- **无需数据库**：完全静态网站，无需后端支持
- **快速加载**：轻量级设计，加载速度快

## 如何部署到 GitHub Pages

### 第一步：创建 GitHub 账户和仓库

1. 如果您还没有 GitHub 账户，请访问 [GitHub](https://github.com) 并注册。
2. 登录您的 GitHub 账户。
3. 创建一个新的仓库，命名为 `yourusername.github.io`（将 `yourusername` 替换为您的 GitHub 用户名）。
   - 例如：如果您的用户名是 `john`，仓库名应该是 `john.github.io`

### 第二步：上传博客文件

**方法 1：使用 Git 命令行**

1. 在您的计算机上打开终端/命令提示符。
2. 导航到您的博客项目目录：
   ```bash
   cd /path/to/my-blog
   ```

3. 初始化 Git 仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add blog files"
   ```

4. 添加远程仓库：
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```

5. 推送文件到 GitHub：
   ```bash
   git branch -M main
   git push -u origin main
   ```

**方法 2：使用 GitHub 网页界面**

1. 访问您创建的仓库页面。
2. 点击 "Add file" > "Upload files"。
3. 选择您的博客文件并上传。

### 第三步：启用 GitHub Pages

1. 在您的仓库页面，点击 "Settings"（设置）。
2. 在左侧菜单中，找到 "Pages"。
3. 在 "Source" 部分，选择 "main" 分支。
4. 点击 "Save"。

GitHub 将自动部署您的网站。几分钟后，您可以访问 `https://yourusername.github.io` 来查看您的博客。

## 如何添加新文章

1. 在 `posts/` 目录中创建一个新的 HTML 文件，例如 `fourth-post.html`。
2. 使用现有文章作为模板，复制其结构。
3. 编辑文章内容、标题和日期。
4. 在 `index.html` 的 "最新文章" 部分添加一个新的 `<article class="post-card">` 块，链接到您的新文章。
5. 提交更改到 GitHub：
   ```bash
   git add .
   git commit -m "Add new blog post: fourth-post"
   git push
   ```

## 自定义您的博客

### 修改颜色方案

编辑 `assets/css/style.css` 文件中的 CSS 变量：

```css
:root {
    --primary-color: #2c3e50;      /* 主色 */
    --secondary-color: #3498db;    /* 次色 */
    --accent-color: #e74c3c;       /* 强调色 */
    --text-color: #333;            /* 文本颜色 */
    --light-bg: #ecf0f1;           /* 浅色背景 */
    --white: #ffffff;              /* 白色 */
}
```

### 修改博客信息

编辑 `index.html` 中的以下部分：

- **博客标题**：修改 `<h1>` 标签中的 "我的博客"
- **欢迎文本**：修改 `.hero` 部分的内容
- **关于部分**：修改 `.about` 部分的内容
- **联系信息**：修改 `.contact` 部分的邮箱、GitHub 和 Twitter 链接

### 修改字体

在 `assets/css/style.css` 中修改 `body` 的 `font-family` 属性：

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 浏览器兼容性

该博客支持所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

## 许可证

这个项目是开源的，您可以自由使用、修改和分发。

## 常见问题

**Q: 我的网站为什么没有出现？**
A: GitHub Pages 可能需要几分钟来部署您的网站。请等待几分钟，然后刷新页面。

**Q: 我可以使用自己的域名吗？**
A: 可以。在仓库的 Settings > Pages 中，您可以添加自定义域名。

**Q: 我如何添加评论功能？**
A: 您可以使用第三方服务，如 Disqus 或 Utterances，来添加评论功能。

## 联系方式

如果您有任何问题或建议，欢迎通过以下方式与我联系：

- 邮箱：your-email@example.com
- GitHub：[您的 GitHub 用户名]

祝您的博客之旅愉快！

