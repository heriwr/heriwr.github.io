const toggleIcons = document.querySelectorAll('.dark-mode-switch i');

toggleIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    toggleIcons.forEach(i => i.classList.toggle('active'));
  });
});

// Add dark-mode class to body for initial dark mode support (optional)
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark-mode');
  toggleIcons.forEach(i => i.classList.remove('active')); // Adjust active state for dark mode on load
}
