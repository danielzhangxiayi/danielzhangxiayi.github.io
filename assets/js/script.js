// ==================== 博客脚本 ====================

// 页面加载时的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航链接的活跃状态
    initializeNavigation();
    
    // 添加平滑滚动效果
    addSmoothScroll();
});

// 初始化导航链接的活跃状态
function initializeNavigation() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 检查当前页面是否匹配导航链接
        if (currentPage.includes(href) || (currentPage.endsWith('/') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 添加平滑滚动效果
function addSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果不是首页，不处理锚点链接
            if (window.location.pathname.includes('posts/')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 添加返回顶部按钮功能
function addBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 20px;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // 显示/隐藏按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 添加文章阅读时间估计
function addReadingTime() {
    const postContent = document.querySelector('.post-content');
    if (postContent) {
        const text = postContent.innerText;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 假设平均阅读速度为 200 字/分钟
        
        const readingTimeElement = document.createElement('p');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.innerHTML = `<strong>阅读时间：</strong> 约 ${readingTime} 分钟`;
        readingTimeElement.style.cssText = `
            color: #7f8c8d;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ecf0f1;
        `;
        
        const postHeader = document.querySelector('.post-header');
        if (postHeader) {
            postHeader.appendChild(readingTimeElement);
        }
    }
}

// 添加代码复制功能
function addCodeCopyButton() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '复制';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #3498db;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
        
        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerHTML = '已复制！';
                setTimeout(() => {
                    copyButton.innerHTML = '复制';
                }, 2000);
            });
        });
    });
}

// 页面加载完成后执行额外功能
window.addEventListener('load', function() {
    addBackToTopButton();
    addReadingTime();
    addCodeCopyButton();
});

