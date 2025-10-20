document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const exploreBtn = document.getElementById("exploreBtn");
  const categories = document.getElementById("categories");
  const popularGrid = document.getElementById("popular-grid");

  // --- показати категорії після натискання ---
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      categories.style.display = "flex";
      window.scrollTo({ top: categories.offsetTop - 60, behavior: "smooth" });
    });
  }

  // --- популярні рецепти (рандомно) ---
  const allRecipes = [
    { title: "Ham, Egg & Sprouts Sandwich", img: "images/br1.jpg" },
    { title: "Strawberry Poppy Seed Salad", img: "images/l1.jpg" },
    { title: "Baked Feta & White Bean Skillet", img: "images/d2.jpg" },
    { title: "High-Fiber Smoothie Bowl", img: "images/v1.jpg" },
    { title: "Creamy Orange-Peach Smoothie", img: "images/low1.jpg" },
    { title: "Chocolate Strawberry Nice Cream", img: "images/des1.jpg" },
  ];

  // Перемішати рецепти
  const shuffled = allRecipes.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Показати їх
  popularGrid.innerHTML = shuffled.map(r => `
    <div class="recipe-card">
      <img src="${r.img}" alt="${r.title}">
      <p>${r.title}</p>
    </div>
  `).join("");

  // --- при кліку на категорію показати рецепти ---
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.dataset.category.charAt(0).toUpperCase() + btn.dataset.category.slice(1);
      showRecipeSection(section); // твоя функція вже існує в основному коді
      window.scrollTo({ top: document.getElementById("content").offsetTop, behavior: "smooth" });
    });
  });

  
  // --- Відкриття/закриття бургер-меню ---
  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  // --- мобільне підменю (контейнер) ---
  let mobileSubmenu = document.querySelector(".mobile-submenu");
  if (!mobileSubmenu) {
    mobileSubmenu = document.createElement("div");
    mobileSubmenu.classList.add("mobile-submenu");
    mobileSubmenu.style.display = "none";
    document.querySelector("nav").insertAdjacentElement("afterend", mobileSubmenu);
  }

  // --- ФУНКЦІЯ ДЛЯ ГОЛОВНОЇ СТОРІНКИ З ЦИТАТОЮ, КНОПКОЮ І РЕЦЕПТАМИ ---
function showHome() {
  content.innerHTML = `
    <section class="home-section" style="text-align: center; padding: 60px 20px;">
      <h2 class="main-quote" style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #3b2f22; font-size: 28px; margin-bottom: 30px;">
        “Good Food Is The Foundation Of Genuine Happiness.”
      </h2>

      <button id="exploreBtn" class="explore-btn">Explore Recipes</button>

      <div id="categories" class="recipe-categories" style="display: none;">
        <button class="category-btn" data-category="breakfast">Breakfast</button>
        <button class="category-btn" data-category="lunch">Lunch</button>
        <button class="category-btn" data-category="dinner">Dinner</button>
      </div>

      <section id="popular-recipes" class="popular-section">
        <h3>Popular Recipes</h3>
        <div class="recipe-grid" id="popular-grid"></div>
      </section>
    </section>
  `;

  // щоб меню закривалось
  menu && menu.classList && menu.classList.remove("show");
  mobileSubmenu.style.display = "none";

  // --- активуємо логіку Explore та Popular Recipes ---
  setupExploreSection();
}

// --- Нова допоміжна функція для головної сторінки ---
function setupExploreSection() {
  const exploreBtn = document.getElementById("exploreBtn");
  const categories = document.getElementById("categories");
  const popularGrid = document.getElementById("popular-grid");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      categories.style.display = "flex";
      window.scrollTo({ top: categories.offsetTop - 60, behavior: "smooth" });
    });
  }

  // --- популярні рецепти ---
  const allRecipes = [
    { title: "Ham, Egg & Sprouts Sandwich", img: "images/br1.jpg" },
    { title: "Strawberry Poppy Seed Salad", img: "images/l1.jpg" },
    { title: "Baked Feta & White Bean Skillet", img: "images/d2.jpg" },
    { title: "High-Fiber Smoothie Bowl", img: "images/v1.jpg" },
    { title: "Creamy Orange-Peach Smoothie", img: "images/low1.jpg" },
    { title: "Chocolate Strawberry Nice Cream", img: "images/des1.jpg" },
  ];

  const shuffled = allRecipes.sort(() => 0.5 - Math.random()).slice(0, 3);
  popularGrid.innerHTML = shuffled.map(r => `
    <div class="recipe-card">
      <img src="${r.img}" alt="${r.title}">
      <p>${r.title}</p>
    </div>
  `).join("");

  // --- обробка натискань на категорії ---
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.dataset.category.charAt(0).toUpperCase() + btn.dataset.category.slice(1);
      showRecipeSection(section);
      window.scrollTo({ top: content.offsetTop, behavior: "smooth" });
    });
  });
}


  // --- ЄДИНЕ ОГОЛОШЕННЯ recipeContent ---
  const recipeContent = {
    "Breakfast": [
      { title: "Two-Ingredient Banana Pancakes", img: "images/br1.jpg" },
      { title: "Banana–Peanut Butter Yogurt Parfait", img: "images/br2.jpg" },
      { title: "Cottage Cheese Toast", img: "images/br3.jpg" },
      { title: "Cottage Cheese–Berry Bowl", img: "images/br4.jpg" },
      { title: "Ham, Egg & Sprouts Breakfast Sandwich", img: "images/br5.jpg" },
      { title: "Egg, Tomato & Feta Breakfast Pita", img: "images/br6.jpg" }
    ],
    "Lunch": [
      { title: "Strawberry Poppy Seed Salad with Chicken", img: "images/l1.jpg" },
      { title: "3-Ingredient Creamy Rotisserie Chicken Salad", img: "images/l2.jpg" },
      { title: "Roasted Veggie Mason Jar Salad", img: "images/l3.jpg" },
      { title: "Chickpea Chicken Salad", img: "images/l4.jpg" },
      { title: "Cucumber & Avocado Wrap", img: "images/l5.jpg" },
      { title: "Chickpea & Roasted Red Pepper Lettuce Wraps with Tahini Dressing", img: "images/l6.jpg" }
    ],
    "Dinner": [
      { title: "High-Protein Spaghetti Squash Caprese", img: "images/d1.jpg" },
      { title: "Baked Feta, Tomato & White Bean Skillet", img: "images/d2.jpg" },
      { title: "Chicken Guacamole Bowls", img: "images/d3.jpg" },
      { title: "Herb-Marinated Veggie & Chickpea Salad", img: "images/d4.jpg" },
      { title: "Creamy Salmon & Asparagus Pasta", img: "images/d5.jpg" },
      { title: "Spinach-Tortellini Soup", img: "images/d6.jpg" }
    ],
    "Vegan": [
      { title: "High-Fiber Dragon Fruit & Pineapple Smoothie Bowl", img: "images/v1.jpg" },
      { title: "Triple-Berry Blended Oats", img: "images/v2.jpg" },
      { title: "Peanut Noodle Cup Soup", img: "images/v3.jpg" },
      { title: "Sunomono (Japanese Cucumber Salad)", img: "images/v4.jpg" },
      { title: "Easy Vegan Pizza", img: "images/v5.jpg" },
      { title: "Sticky Orange Tofu Bites", img: "images/v6.jpg" }
    ],
    "Low-calorie": [
      { title: "Creamy Orange-Peach Chia Seed Smoothie", img: "images/low1.jpg" },
      { title: "Avocado Toast", img: "images/low2.jpg" },
      { title: "Chickpea Tuna Salad", img: "images/low3.jpg" },
      { title: "Vegan Superfood Grain Bowls", img: "images/low4.jpg" },
      { title: "Strawberry-Chocolate Greek Yogurt Bark", img: "images/low5.jpg" },
      { title: "Mini New York Cheesecakes", img: "images/low6.jpg" }
    ],
    "Desserts": [
      { title: "Chocolate Strawberry Nice Cream", img: "images/des1.jpg" },
      { title: "Chocolate–Peanut Butter Protein Ice Cream", img: "images/des2.jpg" },
      { title: "Anti-Inflammatory Strawberry Chia Pudding", img: "images/des3.jpg" },
      { title: "Mango Raspberry Smoothie", img: "images/des4.jpg" },
      { title: "Banana Bread Focaccia", img: "images/des5.jpg" },
      { title: "Frozen Pumpkin Mousse Pie", img: "images/des6.jpg" }
    ],
  };

  // --- Функція показу карток рецептів ---
  function showRecipeSection(section) {
    const recipes = recipeContent[section];
    if (!recipes) {
      console.warn("No recipes for", section);
      content.innerHTML = `<h2>${section}</h2><p>No recipes available.</p>`;
      return;
    }

    const recipeHTML = recipes.map(item => `
      <div class="recipe-card">
        <img src="${item.img}" alt="${item.title}" onerror="this.style.opacity='.3'">
        <p>${item.title}</p>
      </div>
    `).join("");

    content.innerHTML = `
      <h2>${section}</h2>
      <div class="recipe-grid">${recipeHTML}</div>
    `;

    menu && menu.classList && menu.classList.remove("show");
    mobileSubmenu.style.display = "none";
  }

  // --- Функція для загального контенту ---
  function showContent(title, text) {
    content.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    menu && menu.classList && menu.classList.remove("show");
    mobileSubmenu.style.display = "none";
  }

  // --- Делегування кліків по основному меню ---
  const menuRoot = document.querySelector(".menu > ul");
  if (!menuRoot) {
    console.error("Menu root not found (.menu > ul).");
    return;
  }

  menuRoot.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();

    const section = link.textContent.trim();
    console.log("Clicked main menu:", section);

    // --- якщо натиснули Home ---
    if (section === "Home") {
      showHome();
      return;
    }

    // --- мобільна логіка ---
    if (window.innerWidth <= 950) {
      if (section === "Recipes") {
        mobileSubmenu.innerHTML = `
          <button class="submenu-btn">Breakfast</button>
          <button class="submenu-btn">Lunch</button>
          <button class="submenu-btn">Dinner</button>
        `;
        mobileSubmenu.style.display = "flex";
        addMobileSubmenuHandlers();
        menu.classList.remove("show");
        return;
      }

      if (section === "Categories") {
        mobileSubmenu.innerHTML = `
          <button class="submenu-btn">Vegan</button>
          <button class="submenu-btn">Low-calorie</button>
          <button class="submenu-btn">Desserts</button>
        `;
        mobileSubmenu.style.display = "flex";
        addMobileSubmenuHandlers();
        menu.classList.remove("show");
        return;
      }

      if (section === "Contact") {
        mobileSubmenu.innerHTML = `
          <button class="submenu-btn">Instagram</button>
          <button class="submenu-btn">Facebook</button>
          <button class="submenu-btn">Email</button>
        `;
        mobileSubmenu.style.display = "flex";
        addMobileSubmenuHandlers();
        menu.classList.remove("show");
        return;
      }

      showContent(section, `You opened the "${section}" section.`);
      return;
    }

    // --- Десктоп ---
    showContent(section, `You opened the "${section}" section.`);
  });

  // --- Делегування кліків по підпунктах ---
  document.addEventListener("click", (e) => {
    const subLink = e.target.closest(".menu ul li ul li a, .menu ul li ul li");
    if (!subLink) return;

    const text = (e.target.textContent || e.target.innerText).trim();
    e.preventDefault();

    if (text === "Instagram") {
      window.open("https://www.instagram.com/vis.by.lis", "_blank");
      return;
    }
    if (text === "Facebook") {
      window.open("https://www.facebook.com/", "_blank");
      return;
    }
    if (text === "Email") {
      window.open("mailto:hello@healthyfood.com");
      return;
    }

    if (recipeContent[text]) {
      showRecipeSection(text);
    } else {
      const sectionTexts = {
        "Lunch": "Here will be light lunch ideas 🍎.",
        "Dinner": "Here will be dinner recipes 🍲.",
        "Vegan": "Discover our best vegan dishes 🌱.",
        "Low-calorie": "Healthy low-calorie meals for every day.",
        "Desserts": "Sweet and healthy dessert recipes 🍰."
      };
      showContent(text, sectionTexts[text] || `You opened "${text}".`);
    }
  });

  // --- Обробники мобільних кнопок ---
  function addMobileSubmenuHandlers() {
    document.querySelectorAll(".submenu-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const choice = btn.textContent.trim();

        if (choice === "Instagram") {
          window.open("https://www.instagram.com/vis.by.lis", "_blank");
          mobileSubmenu.style.display = "none";
          return;
        }
        if (choice === "Facebook") {
          window.open("https://www.facebook.com/", "_blank");
          mobileSubmenu.style.display = "none";
          return;
        }
        if (choice === "Email") {
          window.open("mailto:hello@healthyfood.com");
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
          content.innerHTML = `
            <h2>${choice}</h2>
            <p>${sectionTexts[choice] || `You opened "${choice}".`}</p>
          `;
        }
        mobileSubmenu.style.display = "flex";
      });
    });
  }

  // --- Закриття мобільного підменю при ресайзі ---
  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      mobileSubmenu.style.display = "none";
      menu.classList.remove("show");
    }
  });

  console.log("Menu script loaded. Available categories:", Object.keys(recipeContent));
});
