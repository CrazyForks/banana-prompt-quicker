class AIStudioSite extends BaseSite {
    async findPromptInput() {
        return this.findElement('aistudio', 'promptInput', 'ms-prompt-input-wrapper textarea');
    }

    async findTargetButton() {
        return this.findElement('aistudio', 'insertButton', 'ms-run-button button');
    }

    getCurrentTheme() {
        return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }

    insertButton(btn, target) {
        const p = target.parentElement
        p.parentElement.insertBefore(btn, p)
    }
};
