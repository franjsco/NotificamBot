const redis = require('redis');

const publisher = redis.createClient();

publisher.publish("NotificamBot", JSON.stringify({
    code:'generic',
    description: 'event test',
    options: {}
}));


publisher.quit();
