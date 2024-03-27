document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar-default');
    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        // If scrolled down and past the header's height, hide the header
        if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight / 2) {
            header.classList.add("hidden-header");
        } else {
            header.classList.remove("hidden-header");
        }
        lastScrollTop = currentScroll;
    });
});

// Scroll to Contact section
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    // Scroll to Reserve now section
    document.querySelector('a[href="#reservenow"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#reservenow').scrollIntoView({
            behavior: 'smooth'
        });
    });
    // Scroll to About Us section
    document.querySelector('a[href="#aboutus"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#aboutus').scrollIntoView({
            behavior: 'smooth'
        });
    });
});