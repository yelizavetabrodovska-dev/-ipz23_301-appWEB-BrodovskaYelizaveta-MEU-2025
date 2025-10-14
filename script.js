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

  // --- Дані для рецептів ---
  const recipeContent = {
  "Breakfast": [
    {
      title: "Ham, Egg & Sprouts Breakfast Sandwich",
      img: "images/br1.jpg"
    },
    {
      title: "Egg, Tomato & Feta Breakfast Pita",
      img: "images/br2.jpg"
    },
    {
      title: "Two-Ingredient Banana Pancakes",
      img: "images/br3.jpg"
    },
    {
      title: "Banana–Peanut Butter Yogurt Parfait",
      img: "images/br4.jpg"
    },
    {
      title: "Cottage Cheese–Berry Bowl",
      img: "images/br5.jpg"
    },
    {
      title: "Cottage Cheese Toast",
      img: "images/br6.jpg"
    }
  ]
};

// --- Функція показу контенту з картинками ---
function showRecipeSection(section) {
  const recipes = recipeContent[section];
  if (!recipes) return;

  const recipeHTML = recipes.map(item => `
    <div class="recipe-card">
      <img src="${item.img}" alt="${item.title}">
      <p>${item.title}</p>
    </div>
  `).join("");

  content.innerHTML = `
    <h2>${section}</h2>
    <div class="recipe-grid">${recipeHTML}</div>
  `;
}

  // --- Функція показу контенту ---
  const showContent = (title, text) => {
    content.innerHTML = `
      <h2>${title}</h2>
      <p>${text}</p>
    `;
    menu.classList.remove("show");
    mobileSubmenu.style.display = "none";
  };

  // --- Функція показу карток рецептів ---
  // --- Функція показу карток рецептів у вигляді сітки ---
function showRecipeSection(section) {
  const recipes = recipeContent[section];
  if (!recipes) return;

  const recipeHTML = recipes.map(item => `
    <div class="recipe-card">
      <img src="${item.img}" alt="${item.title}">
      <p>${item.title}</p>
    </div>
  `).join("");

  content.innerHTML = `
    <h2>${section}</h2>
    <div class="recipe-grid">${recipeHTML}</div>
  `;

  menu.classList.remove("show");
  mobileSubmenu.style.display = "none";
}


  // --- Основні пункти меню ---
  document.querySelectorAll(".menu > ul > li > a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = e.target.textContent.trim();

      if (window.innerWidth <= 950) {
        if (section === "Recipes") {
          activeMainSection = "Recipes";
          menu.classList.remove("show");
          mobileSubmenu.innerHTML = `
            <button class="submenu-btn">Breakfast</button>
            <button class="submenu-btn">Lunch</button>
            <button class="submenu-btn">Dinner</button>
          `;
          mobileSubmenu.style.display = "flex";
          addMobileSubmenuHandlers();
          return;
        }

        if (section === "Categories") {
          activeMainSection = "Categories";
          menu.classList.remove("show");
          mobileSubmenu.innerHTML = `
            <button class="submenu-btn">Vegan</button>
            <button class="submenu-btn">Low-calorie</button>
            <button class="submenu-btn">Desserts</button>
          `;
          mobileSubmenu.style.display = "flex";
          addMobileSubmenuHandlers();
          return;
        }

        if (section === "Contact") {
          activeMainSection = "Contact";
          menu.classList.remove("show");
          mobileSubmenu.innerHTML = `
            <button class="submenu-btn">Instagram</button>
            <button class="submenu-btn">Facebook</button>
            <button class="submenu-btn">Email</button>
          `;
          mobileSubmenu.style.display = "flex";
          addMobileSubmenuHandlers();
          return;
        }

        showContent(section, `You opened the "${section}" section.`);
      } else {
        showContent(section, `You opened the "${section}" section.`);
      }
    });
  });

  // --- Обробники кліків по підпунктах (десктоп) ---
  document.querySelectorAll(".menu ul li ul li a").forEach(subLink => {
    subLink.addEventListener("click", e => {
      e.preventDefault();
      const subItem = e.target.textContent.trim();

      if (subItem === "Instagram") {
        window.open("https://www.instagram.com/vis.by.lis", "_blank");
        menu.classList.remove("show");
        return;
      }
      if (subItem === "Facebook") {
        window.open("https://www.facebook.com/", "_blank");
        menu.classList.remove("show");
        return;
      }
      if (subItem === "Email") {
        window.open("mailto:hello@healthyfood.com");
        menu.classList.remove("show");
        return;
      }

      // Якщо є розділ із рецептами — показати картки
      if (recipeContent[subItem]) {
        showRecipeSection(subItem);
      } else {
        const sectionTexts = {
          "Lunch": "Here will be light lunch ideas 🍎.",
          "Dinner": "Here will be dinner recipes 🍲.",
          "Vegan": "Discover our best vegan dishes 🌱.",
          "Low-calorie": "Healthy low-calorie meals for every day.",
          "Desserts": "Sweet and healthy dessert recipes 🍰."
        };
        showContent(subItem, sectionTexts[subItem] || `You opened "${subItem}".`);
      }
    });
  });

  // --- Обробники мобільних кнопок ---
  function addMobileSubmenuHandlers() {
    document.querySelectorAll(".submenu-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const choice = btn.textContent.trim();

        if (choice === "Instagram") {
          window.open("https://www.instagram.com/vis.by.lis", "_blank");
          menu.classList.remove("show");
          mobileSubmenu.style.display = "none";
          return;
        }
        if (choice === "Facebook") {
          window.open("https://www.facebook.com/", "_blank");
          menu.classList.remove("show");
          mobileSubmenu.style.display = "none";
          return;
        }
        if (choice === "Email") {
          window.open("mailto:hello@healthyfood.com");
          menu.classList.remove("show");
          mobileSubmenu.style.display = "none";
          return;
        }

        if (recipeContent[choice]) {
          showRecipeSection(choice);
        } else {
          const sectionTexts = {
            "Lunch": "Here will be light lunch ideas 🍎.",
            "Dinner": "Here will be dinner recipes 🍲.",
            "Vegan": "Discover our best vegan dishes 🌱.",
            "Low-calorie": "Healthy low-calorie meals for every day.",
            "Desserts": "Sweet and healthy dessert recipes 🍰."
          };
          showContent(choice, sectionTexts[choice] || `You opened "${choice}".`);
        }
      });
    });
  }

  // --- Закриття меню при кліку поза ним ---
  document.addEventListener("click", e => {
    if (!e.target.closest("nav") && !e.target.closest(".mobile-submenu") && !e.target.closest(".burger")) {
      menu.classList.remove("show");
      mobileSubmenu.style.display = "none";
    }
  });

  // --- При зміні розміру екрану ховаємо кнопки ---
  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      mobileSubmenu.style.display = "none";
    }
  });
});
