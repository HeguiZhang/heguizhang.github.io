const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const root = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  root.setAttribute("data-current-lang", lang);
  root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.setLang === lang);
  });
}

setLanguage("zh");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.setLang);
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

reveals.forEach((element) => observer.observe(element));
