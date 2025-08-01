const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Prevent form reload
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! This is a demo form.");
  });
}

// Toggle mobile menu
// Dark mode toggle
// const toggle = document.getElementById("darkToggle");
// const modeLabel = document.getElementById("modeLabel");

// toggle.addEventListener("change", () => {
//   const isDark = toggle.checked;
//   document.body.classList.toggle("dark-mode", isDark);
//   modeLabel.textContent = isDark ? "Dark Mode" : "Light Mode";
// });

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden"; // optional: prevent scroll
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = ""; // re-enable scroll
});

// Optional: close sidebar when link is clicked
document.querySelectorAll(".mobile-nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

