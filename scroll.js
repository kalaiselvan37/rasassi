document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.getElementById('navbar-default');
    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
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
    // Scroll to Home section
    document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({
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
    // Scroll to menu section
    document.querySelector('a[href="#menu"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#menu').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function shakeOnScroll() {
const imagesToShake = document.querySelectorAll('.shake-on-scroll');
imagesToShake.forEach(image => {
const bounding = image.getBoundingClientRect();
if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
) {
    image.classList.add('shake');
} else {
    image.classList.remove('shake');
}
});
}
window.addEventListener('scroll', shakeOnScroll);

document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    var currentUrl = window.location.pathname;

    // Check if the current URL matches the home page URL
    if (currentUrl === '#menu') {
        // If it does, add a specific class to the "Home" link by its id
        document.getElementById('menu').classList.add('text-red-800', 'md:text-xl');
    }
});




// document.addEventListener("DOMContentLoaded", function () {
//     const menuLinks = document.querySelectorAll("#navbar-default a");
//     menuLinks[0].classList.add("active");
//     menuLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             menuLinks.forEach(function (link) {
//                 link.classList.remove("active");
//             });
//             this.classList.add("active");
//         });
//     });
// });

function handleClick(element) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}