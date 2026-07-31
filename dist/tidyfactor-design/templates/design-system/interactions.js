/**
 * TidyFactor Design System — Shared UI Interactions (interactions.js)
 */
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Handler
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('tf-theme', nextTheme);
    });
  });

  // Restore saved theme preference
  const savedTheme = localStorage.getItem('tf-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Direction (RTL / LTR) Toggle Handler
  const dirToggles = document.querySelectorAll('[data-dir-toggle]');
  dirToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', nextDir);
    });
  });
});
