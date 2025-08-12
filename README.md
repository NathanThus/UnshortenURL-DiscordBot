# README

Makes use of the https://unshorten.me/api API for unshortening the links, before posting them back into the game.

## ✨ Purpose / Usage

The bot will continously parse each message that comes in using a regex, to determine if it contains a https://share.google/ link. It will reply to the user with an **unshortend** link.

## 📦️ Requirements

### Software

- **Node.js** (v16.9.0 or higher)

### API Keys
To host the bot, you must supply your own API key for both:

- [UnshortenMe](https://unshorten.me)
- [Discord Bots](https://discord.com/developers/applications)

## 🚀 Installation & Setup

Clone the repository using:

```bash
git clone https://github.com/NathanThus/UnshortenURL-DiscordBot
cd UnshortenURL-DiscordBot
```

Once downloaded, use the following command in the terminal to install the dependencies (Discord.js)

``` bash
npm install
```

Next, create a `.env` file with the following parameters:

``` env
# The token from UnshortenMe
API_TOKEN= Unshorten-Me-Token-Goes-Here
# The token from the Discord Bot Developer Portal
BOT_TOKEN= Discord-Bot-Token-Goes-Here
```

(Replace the dummy data with actual tokens).

## ⚡️ Running the bot

### 💻 Local

To run the bot, use:

``` bash
node index.js
```

### 🐳 Docker

For docker users, there is an included `Dockerfile` and `.dockerignore`.
You will need to supply your own local (in host) `.env` files with the aforementioned parameters.

You can run the bot using:

```bash
docker build -t discord-unshortener-bot .
docker run --env-file .env discord-unshortener-bot
```

### Result

Regardless of the method used, the end result should be the following text in the console:

`Logged in as YourBotName#1234`

With YourBotName#1234 being the name of your bot.

## 🔧 Configuring the Discord Bot

Go to the Discord Developer Portal and open your bot application (or make a new one). Then, navigate to **Bot** in the side menu and scroll to **Privileged Gateway Intents**. Tick the following intent:

✅ Message Content Intent

Don't forget to save your changes!

After that, invite the bot to the server. Once the bot is in, run the 

## 📄 License

This software is licensed under CC4.0 BY-NC-SA.

For the full terms, see the [License](./LICENSE.md).
