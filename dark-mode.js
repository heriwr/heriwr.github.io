const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark-mode');
});

// Add dark-mode class to body for initial dark mode support (optional)
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark-mode');
  toggle.checked = true;
}
