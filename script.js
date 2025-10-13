document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  // --- Показати / сховати бургер ---
  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // --- Створюємо контейнер для мобільного підменю ---
  const mobileSubmenu = document.createElement("div");
  mobileSubmenu.classList.add("mobile-submenu");
  mobileSubmenu.style.display = "none";
  document.querySelector("nav").insertAdjacentElement("afterend", mobileSubmenu);

  // --- Функція показу контенту ---
  const showContent = (title, text) => {
    content.innerHTML = `
      <h2>${title}</h2>
      <p>${text}</p>
    `;
    menu.classList.remove("show");
  };

  let activeMainSection = null; // запам'ятовуємо, який головний пункт активний

  // --- Основні пункти меню ---
  document.querySelectorAll(".menu > ul > li > a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = e.target.textContent.trim();

      // --- Якщо натиснули "Recipes" ---
      if (section === "Recipes") {
        // якщо натискають повторно на Recipes — нічого не міняємо
        if (activeMainSection === "Recipes") return;

        activeMainSection = "Recipes";
        menu.classList.remove("show"); // сховати бургер-меню
        mobileSubmenu.innerHTML = `
          <button class="submenu-btn">Breakfast</button>
          <button class="submenu-btn">Lunch</button>
          <button class="submenu-btn">Dinner</button>
        `;
        mobileSubmenu.style.display = "flex";

        // --- Обробники кнопок ---
        document.querySelectorAll(".submenu-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const choice = btn.textContent.trim();
            if (choice === "Breakfast") {
              showContent("Breakfast Recipes 🥣", "Here will be your breakfast recipes.");
            } else if (choice === "Lunch") {
              showContent("Lunch Ideas 🍎", "Here will be light lunches.");
            } else if (choice === "Dinner") {
              showContent("Dinner Dishes 🍲", "Here will be dinner recipes.");
            }
          });
        });
      } 
      else {
        // --- Якщо натиснули будь-що інше ---
        activeMainSection = section; // змінюємо активний розділ
        mobileSubmenu.style.display = "none"; // сховати підменю
        showContent(section, `You opened the "${section}" section.`);
      }
    });
  });

  // --- Закриття меню при кліку поза ним ---
  document.addEventListener("click", e => {
    if (!e.target.closest("nav") && !e.target.closest(".mobile-submenu") && !e.target.closest(".burger")) {
      menu.classList.remove("show");
      // НЕ ховаємо підменю тут, бо тепер воно має залишатись відкритим
    }
  });
});
