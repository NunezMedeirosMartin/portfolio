function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

let currentLanguage = localStorage.getItem("language") || "en";

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.innerHTML = element.getAttribute(`data-${currentLanguage}`);
  });

  const button = document.querySelector(".lang-toggle");

  if (button) {
    button.textContent = currentLanguage === "en" ? "ES" : "EN";
  }
}

function changeLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  localStorage.setItem("language", currentLanguage);

  applyLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});