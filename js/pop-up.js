document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');

    if (!sessionStorage.getItem('popupShown')) {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 100);
        sessionStorage.setItem('popupShown', 'true');
    }

    closeButton.addEventListener('click', () => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    });

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.opacity = '0';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 500);
        }
    });
});
