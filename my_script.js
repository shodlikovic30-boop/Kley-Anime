const container = document.getElementById('anime-list');

// Берем только первые 20 штук из списка, чтобы не перегружать страницу
const limitedIds = animeIds.slice(0, 20);

limitedIds.forEach(id => {
    // 1. Создаем карточку-контейнер
    const card = document.createElement('div');
    card.className = 'anime-card';

    // 2. Делаем запрос к API Shikimori для каждого ID
    fetch(`https://shikimori.one/api/animes/${id}`)
        .then(response => response.json())
        .then(data => {
            // Формируем внутренний HTML карточки
            card.innerHTML = `
                <a href="https://shikimori.one${data.url}" target="_blank">
                    <img src="https://shikimori.one${data.image.preview}" alt="${data.name}">
                    <div class="anime-title">${data.russian || data.name}</div>
                </a>
            `;
        })
        .catch(err => {
            console.error(`Ошибка загрузки ID ${id}:`, err);
            card.innerHTML = `<p>Ошибка загрузки</p>`;
        });

    container.appendChild(card);
});
