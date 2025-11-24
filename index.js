const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,            
    GatewayIntentBits.GuildMessages,     
    GatewayIntentBits.MessageContent,    
  ],
});

// Runs once when the bot is ready
client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Runs whenever a message is sent in a server
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!hello") {
    message.reply(`Hello ${message.author.username}! 👋`);
  }
});

// Log in using the token stored in the .env file
client.login(process.env.TOKEN);
