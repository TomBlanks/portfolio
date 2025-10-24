// Navigation functionality for smooth scrolling and active link highlighting

document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links and sections
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Immediately update active state
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // The browser will automatically account for the 'scroll-margin-top'
        // we set in the CSS file.
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active section in navigation
  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 120;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    // Update active link
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });

    // Set home as active if at top of page
    if (window.scrollY < 100) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#home") {
          link.classList.add("active");
        }
      });
    }
  }

  // Listen for scroll events to update active navigation
  let scrollTimer = null;
  window.addEventListener("scroll", function () {
    // Throttle scroll events for better performance
    if (scrollTimer !== null) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(highlightActiveSection, 50);
  });

  // Initial highlight on page load
  highlightActiveSection();

  // Handle navbar background opacity on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.85)";
      }
    });
  }
});
