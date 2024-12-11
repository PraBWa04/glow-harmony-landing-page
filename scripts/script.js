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

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document
  .getElementById("telegram-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const botToken = "7802344196:AAFAUEzWx1yB6CUbX7doOguFMAWJBIbSheM"; // Ваш токен Telegram бота
    const chatId = "7478731358"; // Ваш Chat ID

    // Отримуємо значення з форми
    const lamp = event.target.lamp.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;

    // Формуємо повідомлення для Telegram
    const message = `🔔 *Новий заказ!*\n\n💡 *Обраний ліхтарик:* ${lamp}\n👤 *Ім'я клієнта:* ${name}\n📞 *Телефон:* ${phone}`;

    // URL для відправки повідомлення через Telegram API
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Отримуємо елементи для повідомлення
    const statusMessage = document.getElementById("status-message");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Додаємо стиль для форматування повідомлення
        }),
      });

      if (response.ok) {
        // Відображаємо повідомлення про успіх
        statusMessage.textContent = "Ваше замовлення успішно надіслано!";
        statusMessage.style.color = "green"; // Зелений колір для успіху
        statusMessage.style.display = "block"; // Показуємо повідомлення
        event.target.reset(); // Очищення форми
      } else {
        // Відображаємо повідомлення про помилку
        statusMessage.textContent =
          "Сталася помилка при надсиланні. Спробуйте ще раз.";
        statusMessage.style.color = "red"; // Червоний колір для помилки
        statusMessage.style.display = "block";
      }
    } catch (error) {
      // Відображаємо повідомлення про помилку підключення
      statusMessage.textContent = "Помилка з'єднання. Перевірте інтернет.";
      statusMessage.style.color = "red";
      statusMessage.style.display = "block";
    }
  });
