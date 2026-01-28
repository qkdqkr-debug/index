// js/theme.js

let currentTheme = localStorage.getItem('theme') || 'light'; // Default to light

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
            themeToggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙'; // Update button icon
        });
        // Set initial icon based on current theme
        themeToggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }

    applyTheme(currentTheme);
});

// Export applyTheme for external use if needed
export { applyTheme, currentTheme };
