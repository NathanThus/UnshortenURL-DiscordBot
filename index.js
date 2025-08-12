const fs = require('node:fs');
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js');
const { DoesMessageContainLink, ExtractURL } = require('./parser').default;
const {UnshortenURL } = require('./unshortenAPI').default;
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // Required to read messages!
  ]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!DoesMessageContainLink(message.content)) return;

    var shortendURLs = ExtractURL(message.content);
    var result = await UnshortenURL(shortendURLs, process.env.API_TOKEN);
    message.reply(result);
});

client.login(process.env.BOT_TOKEN);