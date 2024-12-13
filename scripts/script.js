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
    event.preventDefault();

    const botToken = "7802344196:AAFAUEzWx1yB6CUbX7doOguFMAWJBIbSheM";
    const chatId = "7478731358";

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
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        // Відображаємо повідомлення про успіх
        statusMessage.textContent = "Ваше замовлення успішно надіслано!";
        statusMessage.style.color = "green";
        statusMessage.style.display = "block";
        event.target.reset();
      } else {
        // Відображаємо повідомлення про помилку
        statusMessage.textContent =
          "Сталася помилка при надсиланні. Спробуйте ще раз.";
        statusMessage.style.color = "red";
        statusMessage.style.display = "block";
      }
    } catch (error) {
      // Відображаємо повідомлення про помилку підключення
      statusMessage.textContent = "Помилка з'єднання. Перевірте інтернет.";
      statusMessage.style.color = "red";
      statusMessage.style.display = "block";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.querySelector(".btn-buy");
  if (buyButton) {
    buyButton.addEventListener("click", function () {
      window.location.href = "#order-form";
      fbq("track", "AddToCart", {
        content_name: "Музичний ліхтар із Сантою",
        value: 1499,
        currency: "UAH",
      });
    });
  } else {
    console.error("Кнопка з класом .btn-buy не знайдена");
  }
});
