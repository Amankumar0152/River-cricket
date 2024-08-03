document.addEventListener("DOMContentLoaded", function() {
    // Once the content is fully loaded, hide the loading spinner and show the content
    window.addEventListener("load", function() {
        const loadingOverlay = document.querySelector('.loading-overlay');
        const content = document.querySelector('.content');
        
        // Hide the loading overlay
        loadingOverlay.style.display = 'none';
        
        // Show the content
        content.style.visibility = 'visible';
    });
});
