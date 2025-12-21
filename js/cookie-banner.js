// D:\CKMBlog\source\js\cookie-banner.js

(function() {
    // === 配置区域 ===
    // 如果你的博客不在根目录（例如在 /blog/ 下），请修改这里为 '/blog'
    const siteRoot = '/'; 
    const cssPath = `${siteRoot}css/cookie-banner.css`;
    const storageKey = 'user-cookie-consent';

    // 1. 检查用户是否已经做出过选择
    if (localStorage.getItem(storageKey)) {
        return; // 如果已经同意或拒绝过，直接退出，不加载任何东西
    }

    // 2. 动态加载 CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);

    // 3. 构建 Banner HTML
    const bannerHTML = `
        <div id="cookie-consent-banner">
            <div class="cookie-content">
                <p>
                    本网站使用 Cookies 以确保您获得最佳的浏览体验。继续浏览即表示您同意我们的隐私政策。
                    <a href="${siteRoot}privacy/" target="_blank">了解更多隐私政策</a>
                </p>
            </div>
            <div class="cookie-buttons">
                <button id="cookie-decline" class="cookie-btn decline">拒绝</button>
                <button id="cookie-accept" class="cookie-btn accept">接受</button>
            </div>
        </div>
    `;

    // 4. 插入到 Body 底部
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // 5. 添加交互逻辑
    const banner = document.getElementById('cookie-consent-banner');
    const btnAccept = document.getElementById('cookie-accept');
    const btnDecline = document.getElementById('cookie-decline');

    // 延迟一小会儿显示，制造滑入动画效果
    setTimeout(() => {
        banner.classList.add('show');
    }, 100);

    // 同意按钮
    btnAccept.addEventListener('click', () => {
        localStorage.setItem(storageKey, 'accepted');
        hideBanner();
        // 这里可以放置“同意”后才加载的统计脚本，例如 Google Analytics
        // loadAnalytics(); 
    });

    // 拒绝按钮
    btnDecline.addEventListener('click', () => {
        localStorage.setItem(storageKey, 'declined');
        hideBanner();
    });

    function hideBanner() {
        banner.classList.remove('show');
        // 动画结束后从 DOM 移除
        setTimeout(() => {
            banner.remove();
        }, 500);
    }
})();