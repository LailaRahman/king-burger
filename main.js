document.addEventListener("DOMContentLoaded", function () {
  // Toggle navigation menu for small screens
  const nav = document.querySelector("nav.container-fluid");
  const menuToggleBtn = document.getElementById("menuToggleBtn");

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      // Toggle icon between hamburger and close
      const icon = menuToggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });
  }

  // Change main burger image on footer icon click
  const footerImages = document.querySelectorAll(".footer-hero img");
  const mainImage = document.querySelector(".hero-image img");

  if (footerImages.length > 0 && mainImage) {
    footerImages.forEach((img) => {
      img.addEventListener("click", () => {
        const newSrc = img.getAttribute("src");
        if (newSrc) {
          mainImage.setAttribute("src", newSrc);
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

let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const mainImageSlider = document.querySelector(".slider img");
const overlay = document.querySelector(".overlay");

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length; // Ensure valid index
    mainImageSlider.src = slides[currentSlide].src;
    overlay.textContent = slides[currentSlide].dataset.info; // Update overlay text
}

document.querySelector(".prev").addEventListener("click", () => showSlide(currentSlide - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(currentSlide + 1));

// Show overlay on hover
mainImageSlider.addEventListener("mouseover", () => overlay.style.display = "block");
mainImageSlider.addEventListener("mouseout", () => overlay.style.display = "none");
