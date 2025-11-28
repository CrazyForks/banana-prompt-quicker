const GITHUB_CONFIG_URL = 'https://raw.githubusercontent.com/glidea/banana-prompt-quicker/main/config.json';
const CONFIG_CACHE_KEY = 'config_cache';
const CONFIG_CACHE_DURATION = 2 * 60 * 1000; // 2 min

window.ConfigManager = {
    async get() {
        return window.Fetcher.fetchWithCache(
            GITHUB_CONFIG_URL,
            CONFIG_CACHE_KEY,
            CONFIG_CACHE_DURATION
        );
    }
};
