document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.getElementById('navbar-toggler');
    var menu = document.getElementById('navbar-menu');
  
    toggler.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
  });
  


// document.addEventListener('DOMContentLoaded', function() {
//     const menuBtn = document.getElementById('menu-btn');
//     const navbar = document.getElementById('navbar');

//     menuBtn.addEventListener('click', function() {
//         navbar.classList.toggle('show');
//         toggleMenuIcon();
//     });

//     // Show the menu button only on mobile devices
//     if (window.innerWidth <= 768) {
//         menuBtn.style.display = 'block';
//     }
// });

// function toggleMenuIcon() {
//     const menuBtn = document.getElementById('menu-btn');
//     const spans = menuBtn.querySelectorAll('span');

//     spans.forEach(span => {
//         span.classList.toggle('open');
//     });
// }
