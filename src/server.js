const { Telegraf } = require('telegraf');
const redis = require('redis');

const templates = require('./templates');

require('dotenv').config();

const { 
  BOT_TOKEN,
  CHAT_ID,
  REDIS_CHANNEL,
  REDIS_HOST,
  REDIS_PASSWORD
} =  process.env;


const bot = new Telegraf(BOT_TOKEN);

const subscriber = redis.createClient({
  url: `redis://:${REDIS_PASSWORD}@${REDIS_HOST}`
});

bot.start((ctx) => {
  chatId = ctx.chat.id;

  console.log(`NotificamBot started from ${chatId}`)

  if (chatId != CHAT_ID) {
    console.log(`  
    Please configure this chatId into .env and reboot
  
    Chat ID: ${ctx.chat.id}`
    );

    return;
  }

  console.log(`${ctx.chat.id} connected`)
  
  ctx.reply('Welcome');
});


subscriber.on("subscribe", (channel, message) => {
  console.log(`Subscribed on ${channel}`);
});

subscriber.on('message', (channel, message) => {
  console.log('Message: ' + message);

  bot.telegram.sendMessage(CHAT_ID, templates.handler(message));

});

subscriber.subscribe(REDIS_CHANNEL);


bot.launch();