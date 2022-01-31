# NotificamBot

Telegram bot to receive notifications reads from a queue (pub/sub on Redis).

## Configuration

Rename .env.sample in .env and configure it:


| KEY |DESCRIPTION |
|-- | --|
| BOT_TOKEN | Telegram Bot Token created with @BotFather |
| CHAT_ID | Your chat id with the bot (you can configure this after the first launch of the bot from client) |
| REDIS_CHANELL | Channel where the bot reads|
| REDIS_HOST | Host redis (don't touch if you use docker-compose).
| REDIS_PASSWORD| Redis password |



## Usage

1. Clone the project with 
```sh
git clone https://github.com/franjsco/NotificamBot.git
```

2. Build docker image and run it with docker-compose:
```sh
docker-compose up --build
```


3. Search your bot on telegram and start it. The chat id will be displayed on the terminal.
Copy it into .env and stop (CTRL+C) and start containers.

```sh
docker-compose up
```

4. Now you can perform a test.
```sh
node test-publish.js
```

5. You can send notifications to the bot by connecting to the container redis instance from any application and post messages to the configured queue.
