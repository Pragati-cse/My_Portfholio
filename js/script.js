// Select all sections and navbar links
const sections = document.querySelectorAll("section");
const fadeElements = document.querySelectorAll(".achieve-card, .about-container");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add("fade-in");
    }
  });
});
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust for navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* ===== DARK / LIGHT THEME ===== */
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-theme");
    toggleBtn.textContent = "⭐";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        localStorage.setItem("theme","light");
        toggleBtn.textContent = "⭐";
    }else{
        localStorage.setItem("theme","dark");
        toggleBtn.textContent = "🌚";
    }
});



// MOBILE NAVBAR

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if(navLinks.classList.contains("show")){
        menuToggle.textContent = "✕";
    }else{
        menuToggle.textContent = "☰";
    }

});

// Close menu after clicking a link

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });

});