document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-button');

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow background scrolling
    });

    popup.style.display = 'flex';
});
