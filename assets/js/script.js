document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('js-navbar-toggle');
    const menu = document.getElementById('js-menu');
    
    navToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
