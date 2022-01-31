const redis = require('redis');
const prompt = require('prompt');

require('dotenv').config();

const { 
    REDIS_CHANNEL,
    REDIS_PASSWORD
  } =  process.env;

const publisher = redis.createClient({
    url: `redis://:${REDIS_PASSWORD}@localhost`
});



prompt.start();

prompt.get(['type', 'description'], (err, result) => {
    publisher.publish(REDIS_CHANNEL, JSON.stringify({
        type: result.type   ,
        description: result.description,
        options: {}
    }));


    publisher.quit();
})

