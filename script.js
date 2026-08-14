/* =====================================================
   US FOREVER FILMS & ENTERTAINMENT
   WEBSITE INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ==============================
     MOBILE MENU
  ============================== */

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("header nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("active");

      const isOpen = nav.classList.contains("active");

      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");

      menuButton.innerHTML = isOpen ? "✕" : "☰";
    });

    /* Close menu after clicking a link */

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.innerHTML = "☰";
      });
    });
  }


  /* ==============================
     HEADER SCROLL EFFECT
  ============================== */

  const header = document.querySelector(".header");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* ==============================
     SMOOTH SCROLL
  ============================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        const headerHeight = header
          ? header.offsetHeight
          : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }

    });

  });


  /* ==============================
     SCROLL REVEAL
  ============================== */

  const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .team-card, .video-card, .gallery-grid img, .contact-card, .about-grid"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("reveal-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(function (element) {
      element.classList.add("reveal");

      observer.observe(element);
    });

  } else {

    revealElements.forEach(function (element) {
      element.classList.add("reveal-visible");
    });

  }


  /* ==============================
     HERO PARALLAX
  ============================== */

  const heroBackground =
    document.querySelector(".hero-background");

  if (heroBackground) {

    window.addEventListener("scroll", function () {

      const scrollPosition = window.pageYOffset;

      if (scrollPosition < window.innerHeight) {

        heroBackground.style.transform =
          "scale(1.02) translateY(" +
          scrollPosition * 0.12 +
          "px)";

      }

    });

  }


  /* ==============================
     CURRENT YEAR
  ============================== */

  const yearElements =
    document.querySelectorAll("[data-year]");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  /* ==============================
     IMAGE FALLBACK
  ============================== */

  document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

      this.style.background = "#151515";

      this.style.objectFit = "contain";

      this.alt = "US Forever Films & Entertainment";

    });

  });

});


/* =====================================================
   MOBILE MENU FUNCTION
   Kept globally available for existing HTML
===================================================== */

function toggleMenu() {

  const nav = document.querySelector("header nav");

  const menuButton =
    document.querySelector(".menu-button");

  if (!nav) return;

  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.innerHTML =
      isOpen ? "✕" : "☰";

  }

}
