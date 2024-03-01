const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode'); // Use body instead of the root 
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Initial dark mode setup on page load
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}
