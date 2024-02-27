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

document.addEventListener("DOMContentLoaded", function () {
    const menuCardButton = document.querySelector("#menuCardButton");
    const iframeContainer = document.querySelector("#iframeContainer");
    const pdfIframe = document.querySelector("#pdfIframe");
    const closeIframeButton = document.querySelector("#closeIframe");
    
    menuCardButton.addEventListener("click", function () {
        const pdfUrl = "./assets/Documents/Rasassi-NEW-MAIN-MENU.pdf";
        pdfIframe.src = pdfUrl;
        iframeContainer.classList.add("visible");
    });

    closeIframeButton.addEventListener("click", function () {
        iframeContainer.classList.remove("visible"); 
        pdfIframe.src = "";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = ["./assets/images/cardpic1.png"]; // Add your image paths here
    let currentImageIndex = 0;
    const carousel = document.querySelector('.carousel');

    function showNextImage() {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        carousel.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
});
