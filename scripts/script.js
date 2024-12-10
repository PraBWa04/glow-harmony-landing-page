// Плавна поява елементів при прокрутці
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

// Застосування Observer до всіх елементів, які потрібно анімувати
// Вибір елементів
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Створення затемнення фону
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Обробка кліків по бургер-меню
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
  overlay.classList.toggle("active");
});

// Закриття меню при натисканні на затемнення
overlay.addEventListener("click", () => {
  navToggle.classList.remove("open");
  navLinks.classList.remove("open");
  overlay.classList.remove("active");
});

// Закриття меню при кліку на посилання
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
  }
});
