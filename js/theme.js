// Theme toggle functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.currentTheme = localStorage.getItem('theme');
        
        this.init();
    }
    
    init() {
        // Set initial theme
        if (this.currentTheme) {
            document.documentElement.setAttribute('data-theme', this.currentTheme);
            if (this.currentTheme === 'dark') {
                this.updateToggleButton(true);
            }
        } else if (this.prefersDark.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateToggleButton(true);
        }
        
        // Add event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.prefersDark.addEventListener('change', (e) => this.handleSystemThemeChange(e));
    }
    
    toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateToggleButton(!isDark);
    }
    
    handleSystemThemeChange(e) {
        if (!this.currentTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            this.updateToggleButton(e.matches);
        }
    }
    
    updateToggleButton(isDark) {
        const icon = this.themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            this.themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            this.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
}); 