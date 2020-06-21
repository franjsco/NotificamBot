# NotificamBot

Telegram bot to reiceve notification.

Notificambot reads notifications from a queue (pub/sub on redis).



## Configuration 
1. Create telegram bot with **@BotFather**.
2. Clone this repository.
3. Start a redis instance on localhost.
4. Install dependencies with `npm install`.
5. Configure env file (and rename from `env.sampe` to `.env`).
6. Launch with `node src/server.js`


You can configure events into `src/template.js`.

## Test 

You can perform a test with command: `node pub-redis-example.js`
