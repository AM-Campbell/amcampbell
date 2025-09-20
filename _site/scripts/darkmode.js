// Dark mode functionality
class ThemeManager {
  constructor() {
    this.init();
  }


  init() {
    // Theme is already set by the inline script, just update the icon
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    this.updateToggleIcon(currentTheme);

    // Listen for system theme changes (only if no saved preference)
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleIcon(theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  

  updateToggleIcon(theme) {

    const SYMBOLS_ASTRO = {
        sun: '☉',    // U+2609 - Actual astronomical symbol for sun
        moon: '☽'    // U+263D - Astronomical crescent moon
    };

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.innerHTML = theme === 'dark' ? SYMBOLS_ASTRO.sun : SYMBOLS_ASTRO.moon;
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const themeManager = new ThemeManager();
  
  // Add toggle button to page
  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle theme');
  document.body.appendChild(toggleButton);
  
  // Set initial icon
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  themeManager.updateToggleIcon(currentTheme);
  
  // Add click listener
  toggleButton.addEventListener('click', () => themeManager.toggleTheme());
});