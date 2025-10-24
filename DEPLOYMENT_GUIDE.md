# GitHub Pages 部署指南

本指南将帮助您将博客部署到 GitHub Pages。

## 前置条件

- GitHub 账户（免费注册：https://github.com）
- Git 已安装在您的计算机上（https://git-scm.com）
- 本博客项目文件

## 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 登录您的 GitHub 账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. **重要**：仓库名称必须是 `yourusername.github.io`
   - 将 `yourusername` 替换为您的 GitHub 用户名
   - 例如：`john-doe.github.io`
4. 选择 "Public"（公开）
5. 不要初始化 README、.gitignore 或 license
6. 点击 "Create repository"

### 步骤 2：在本地初始化 Git

打开终端/命令提示符，进入博客项目目录：

```bash
cd /path/to/my-blog
```

初始化 Git 仓库：

```bash
git init
git add .
git commit -m "Initial commit: Add personal blog"
```

### 步骤 3：连接到 GitHub 仓库

执行以下命令（将 `yourusername` 替换为您的 GitHub 用户名）：

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

系统可能会要求您输入 GitHub 用户名和密码。

**注意**：如果使用了两步验证，您需要使用个人访问令牌而不是密码。

### 步骤 4：启用 GitHub Pages

1. 访问您的仓库：`https://github.com/yourusername/yourusername.github.io`
2. 点击 "Settings"（设置）
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，确保选择了 "Deploy from a branch"
5. 选择 "main" 分支
6. 点击 "Save"

### 步骤 5：访问您的博客

等待 1-2 分钟，然后访问：

```
https://yourusername.github.io
```

您应该能看到您的博客主页！

## 更新博客内容

每当您修改或添加新文章时，按照以下步骤更新：

```bash
# 进入项目目录
cd /path/to/my-blog

# 添加所有更改
git add .

# 提交更改
git commit -m "Update: Add new blog post or modify content"

# 推送到 GitHub
git push
```

GitHub Pages 会自动更新您的网站（通常需要 1-2 分钟）。

## 添加新文章

1. 在 `posts/` 目录中创建新的 HTML 文件
2. 使用现有文章作为模板
3. 编辑文章内容
4. 在 `index.html` 的 "最新文章" 部分添加链接
5. 按上述步骤提交和推送更改

## 自定义您的博客

### 修改博客标题和信息

编辑 `index.html` 中的以下部分：

- 博客标题：`<h1><a href="index.html">我的博客</a></h1>`
- 欢迎文本：`.hero` 部分
- 关于内容：`.about` 部分
- 联系信息：`.contact` 部分

### 修改颜色方案

编辑 `assets/css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #2c3e50;      /* 主色 */
    --secondary-color: #3498db;    /* 次色 */
    --accent-color: #e74c3c;       /* 强调色 */
}
```

### 修改字体

在 `assets/css/style.css` 中修改：

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 使用自定义域名

如果您有自己的域名，可以将其连接到 GitHub Pages：

1. 在仓库 Settings > Pages 中
2. 在 "Custom domain" 输入您的域名
3. 点击 "Save"
4. 按照 GitHub 的指示配置您的域名 DNS 设置

## 常见问题

**Q: 我的网站为什么没有出现？**
A: 
- 检查仓库名称是否正确（必须是 `yourusername.github.io`）
- 等待 2-3 分钟让 GitHub Pages 部署
- 检查 Settings > Pages 中是否正确选择了分支

**Q: 我的网站显示 404 错误？**
A:
- 确保 `index.html` 在仓库的根目录
- 检查仓库是否为公开（Public）
- 尝试清除浏览器缓存

**Q: 我如何添加评论功能？**
A: 您可以使用第三方服务，如：
- Disqus（https://disqus.com）
- Utterances（https://utteranc.es）
- Giscus（https://giscus.app）

**Q: 我可以使用 HTTPS 吗？**
A: 是的，GitHub Pages 自动为所有 `github.io` 网站提供 HTTPS。

## 获取帮助

- GitHub Pages 官方文档：https://pages.github.com
- GitHub 帮助中心：https://docs.github.com/pages

祝您的博客部署顺利！
