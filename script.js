// 1. Логіка "Гамбургер-меню" (ЛР №13)
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        // Додаємо або прибираємо клас .active для кнопки та меню
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Блокуємо прокрутку сайту на фоні, поки меню відкрите
        if (mobileMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });
}

// 2. Ініціалізація слайдера Swiper.js
const swiper = new Swiper(".mySwiper", {
    loop: true,            // Безкінечна прокрутка
    slidesPerView: 1,      // 1 слайд, щоб анімація .swiper-slide-active спрацьовувала на кожному відгуку
    spaceBetween: 30,      // Відступ між слайдами

    // Стрілки навігації
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Крапочки пагінації
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Автопрокрутка
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});
// 3. Логіка Табів (ЛР №15)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// 4. Логіка Модального вікна (ЛР №15)
const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.querySelector('.close-modal');

if (modal && openBtn && closeBtn) {
    // Відкрити
    openBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    // Закрити по хрестику
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Закрити при кліку на затемнений фон
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
}