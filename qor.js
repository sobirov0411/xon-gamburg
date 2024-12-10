document.addEventListener("DOMContentLoaded", function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    let snowflakes = []; // Qorlarni saqlash uchun massiv

    // Qorlarni yaratish
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Qor belgisini o'zgartirish mumkin
        snowflakesContainer.appendChild(snowflake);

        // Tasodifiy boshlanish joyi va animatsiya parametrlarini o'rnatish
        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = -10; // Qor yuqoridan boshlanadi
        const duration = 8 + Math.random() * 7; // 8-15 soniya davomida
        const delay = Math.random() * 3; // Tasodifiy kechikish

        // Animatsiyani boshlash
        snowflake.style.left = startPositionX + 'px';
        snowflake.style.top = startPositionY + 'px';
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.animationDelay = delay + 's';

        // Qorni o'chirish va massivga qo'shish
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000); // Animatsiya tugagach o'chirish

        // Har safar yangi qor yaratib boramiz
        snowflakes.push(snowflake);
    }

    // Har 300msda bir qorni yaratish (200ms emas)
    setInterval(createSnowflake, 300); // Intervalni yanada pasaytirdik
});
