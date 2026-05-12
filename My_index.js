const { Telegraf, Markup } = require('telegraf');
const mongoose = require('mongoose');

// Все твои данные я сохранил:
const BOT_TOKEN = "8463018423:AAGUe_yYjiovhwStDhSf5ECQcgxRdqitrDs";
const MONGO_URL = "mongodb+srv://KleyAnimeCards:914330740x@cluster0.vm60fpr.mongodb.net/KleyAnime?retryWrites=true&w=majority";
const ADMIN_ID = 8315741780;

const bot = new Telegraf(BOT_TOKEN);

// Подключение к базе данных
mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ База MongoDB подключена!'))
  .catch(err => console.error('❌ Ошибка базы:', err));

// Приветствие и кнопки
bot.start((ctx) => {
  ctx.reply('🎴 Добро пожаловать в Kley Cards!', 
    Markup.keyboard([
      ['🎲 Крутить Гачу', '🎒 Мой инвентарь'],
      ['💎 Баланс', '📊 Статистика']
    ]).resize()
  );
});

// Админ-команда для тебя
bot.command('admin', (ctx) => {
  if (ctx.from.id === ADMIN_ID) {
    ctx.reply('👑 Доступ разрешен. Система работает стабильно.');
  }
});

bot.launch().then(() => console.log('🚀 Бот снова в строю! Проверяй Telegram.'));
