async function loadAnime() {
    const id = document.getElementById('anime-id').value;
    const container = document.getElementById('player-container');
    
    // API URL (замени на реальный адрес базы, к которой подключаешься)
    // Например, для Kodik это обычно: https://kodikapi.com/search
    const API_TOKEN = 'ТВОЙ_API_ТОКЕН'; 
    const url = `https://kodikapi.com/search?token=${API_TOKEN}&shikimori_id=${id}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // Берем первый результат с русской озвучкой
            const videoUrl = data.results[0].link;

            // Вставляем плеер через iframe
            container.innerHTML = `
                <iframe 
                    src="${videoUrl}" 
                    width="100%" 
                    height="480" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>`;
        } else {
            container.innerHTML = '<p>Озвучка не найдена.</p>';
        }
    } catch (error) {
        console.error('Ошибка подключения:', error);
        container.innerHTML = '<p>Ошибка при подключении к базе данных.</p>';
    }
}