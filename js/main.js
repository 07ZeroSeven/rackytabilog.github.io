
// Dark Mode Toggle
const darkToggleButton = document.getElementById('dark-toggle');
const htmlElement = document.documentElement;
const toggleIcon = document.getElementById('toggle-icon');
if (darkToggleButton) {
  darkToggleButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      toggleIcon.classList.remove('fa-moon');
      toggleIcon.classList.add('fa-sun');
    } else {
      toggleIcon.classList.remove('fa-sun');
      toggleIcon.classList.add('fa-moon');
    }
  });
}

// Mobile Menu Toggle
const menuToggleButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Auto-close Mobile Menu when clicking link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-primary", "dark:text-secondary", "font-semibold");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("text-primary", "dark:text-secondary", "font-semibold");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});
