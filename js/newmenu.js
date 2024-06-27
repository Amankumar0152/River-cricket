document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.getElementById('navbar-toggler');
    var menu = document.getElementById('navbar-menu');
  
    toggler.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
  });
  