function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}