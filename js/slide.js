    document.addEventListener("DOMContentLoaded", function() {
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(element => {
            element.classList.add('show');
        });
    });
