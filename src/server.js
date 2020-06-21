const { Telegraf } = require('telegraf');
const redis = require('redis');

const templates = require('./templates');

require('dotenv').config();

const { 
  BOT_TOKEN,
  CHAT_ID,
  REDIS_CHANNEL
} =  process.env;


const bot = new Telegraf(BOT_TOKEN);

const subscriber = redis.createClient();

bot.start((ctx) => {
  console.log(`Chat ID: ${ctx.chat.id}`);
  console.log(`Configured CHAT_ID: ${CHAT_ID}`);
  
  if (ctx.chat.id == CHAT_ID) {
    ctx.reply('Welcome to NotificamBot');
  }
});


subscriber.on("subscribe", (channel, message) => {
  console.log(`Subscribe on ${channel}`);
});

subscriber.on('message', (channel, message) => {
  console.log('Messaggio: ' + message);

  bot.telegram.sendMessage(CHAT_ID, templates.handler(message));

});

subscriber.subscribe(REDIS_CHANNEL);


bot.launch();