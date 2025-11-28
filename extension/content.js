function init() {
    const hostname = window.location.hostname;

    let site;
    if (hostname.includes('aistudio')) {
        site = new AIStudioSite();
    } else if (hostname.includes('business.gemini.google')) {
        site = new GeminiEnterpriseSite();
    } else if (hostname.includes('gemini')) {
        site = new GeminiSite();
    } else {
        site = new BaseSite();
    }

    // TODO: 解除双向引用
    const modal = new BananaModal(site);
    site.modal = modal;

    // Only initialize button and observers on specific platforms
    if (hostname.includes('aistudio') || hostname.includes('gemini')) {
        site.ensureButtonByWatch();
    }

    // Listen for messages from background (context menu)
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === 'openModal') {
            if (modal) {
                modal.show();
            }
        }
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
} else {
    window.addEventListener('load', init);
}