document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav.container-fluid");
    const menuToggleBtn = document.getElementById("menuToggleBtn");

    // Apply scroll behavior on BOTH 786px and 1024px screens
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100 && window.innerWidth >= 786) { 
            nav.classList.add("scrolled-nav"); // Add scrolling effect on 786px and above
            menuToggleBtn.style.display = "block"; // Show hamburger icon
        } else {
            nav.classList.remove("scrolled-nav"); // Remove effect when back at the top
            menuToggleBtn.style.display = "none"; // Hide menu icon when at top
        }
    });

    // Existing functionality to toggle navigation
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            const icon = menuToggleBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });
    }

    // Change main burger image on footer icon click
    const footerImages = document.querySelectorAll(".footer-hero img");
    const heroMainImage = document.querySelector(".hero-image img");

    if (footerImages.length > 0 && heroMainImage) {
        footerImages.forEach((img) => {
            img.addEventListener("click", () => {
                const newSrc = img.getAttribute("src");
                if (newSrc) {
                    heroMainImage.setAttribute("src", newSrc);
                }
            });
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Change icon dynamically
            const icon = darkModeToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon");
                icon.classList.toggle("fa-sun");
            }

            // Ensure menu toggle color changes
            const menuToggle = document.querySelector(".menu-toggle");
            if (menuToggle) {
                menuToggle.style.color = document.body.classList.contains("dark-mode") ? "white" : "black";
            }
        });
    }
});

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slides-container img");
const mainImage = document.getElementById("mainImage");
const overlay = document.getElementById("overlay");

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    mainImage.style.opacity = "0"; // Fade-out effect
    setTimeout(() => {
        mainImage.src = slides[currentSlide].src;
        overlay.textContent = slides[currentSlide].dataset.info;
        mainImage.style.opacity = "1"; // Fade-in effect
        
        // Show overlay temporarily
        overlay.style.display = "block";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 3000); // Overlay disappears after 3 seconds
    }, 300);
}

document.querySelector(".prev").addEventListener("click", () => showSlide(currentSlide - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(currentSlide + 1));
