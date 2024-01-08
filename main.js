// Gets year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Collapses navigation bar after selection
document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link')) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});