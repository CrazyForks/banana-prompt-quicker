const GITHUB_PROMPTS_URL = 'https://raw.githubusercontent.com/glidea/banana-prompt-quicker/main/prompts.json';
const PROMPTS_CACHE_KEY = 'banana_prompts_cache';
const PROMPTS_CACHE_DURATION = 60 * 60 * 1000; // 60 min

window.PromptManager = {
    async get() {
        return window.Fetcher.fetchWithCache(
            GITHUB_PROMPTS_URL,
            PROMPTS_CACHE_KEY,
            PROMPTS_CACHE_DURATION
        );
    }
};
