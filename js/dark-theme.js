const darkModeButton = document.getElementById('darkModeButton');
        const dropdown = document.getElementById('dropdown');
        const dimMode = document.getElementById('dimMode');
        const lightOutMode = document.getElementById('lightOutMode');

        darkModeButton.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        dimMode.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('dark-mode');
            document.body.classList.add('dim-mode');
            dropdown.style.display = 'none';
        });

        lightOutMode.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('dim-mode');
            document.body.classList.add('dark-mode');
            dropdown.style.display = 'none';
        });

        document.addEventListener('click', (e) => {
            if (!darkModeButton.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });