# Discord.js Sample Exercise — Build Your First Bot from Scratch In this exercise, you will create a **very simple Discord bot** using **Discord.js**. By the end, your bot will respond to the command:

!hello

✅ Prerequisites
Before you start, make sure you have:

Node.js (v18 or higher) installed
Check in your terminal:

node -v

A Discord account
A Discord server that you can manage (you can create your own private one)

Access to the Discord Developer Portal:
https://discord.com/developers/applications

A code editor (e.g., VS Code)

🧩 Step 1 — Create a Project Folder
Decide where you want to keep your project (e.g., Documents, Desktop).

Create a folder called:
discord-sample-bot

Open your terminal and navigate into that folder. Example:
cd path/to/discord-sample-bot

🧩 Step 2 — Initialize a Node.js Project
Inside the discord-sample-bot folder, run:

npm init 

This creates a package.json file with default settings.

🧩 Step 3 — Install Required Packages
Install discord.js and dotenv:

npm install discord.js dotenv

This will create a node_modules folder and add the dependencies to package.json.

🧩 Step 4 — Create the index.js File
In your discord-sample-bot folder, create a file named:

index.js

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




🧩 Step 5 — Create a .env File
In the same folder (discord-sample-bot), create a new file called:


.env
Leave it empty for now — we’ll add the token in a moment.

The .env file will look like this later:

TOKEN=YOUR_DISCORD_BOT_TOKEN_HERE


🧩 Step 6 — Create a Bot in Discord Developer Portal
Go to: https://discord.com/developers/applications

Click New Application

Give it a name (e.g., SampleExerciseBot) and click Create

On the left, go to Bot

Click Add Bot

Enable Intents
Still under the Bot tab, scroll down to Privileged Gateway Intents and turn ON:

MESSAGE CONTENT INTENT

(Optionally, you can also enable GUILD MEMBERS, but it's not required for this basic bot.)

Copy the Bot Token

Under the Bot tab, find TOKEN

Click Reset Token (if needed), then Copy

Paste it into your .env file like this:

TOKEN=PASTE_YOUR_TOKEN_HERE
⚠️ Important: Never share this token with anyone or upload it to GitHub.

Save the .env file.

🧩 Step 7 — Invite the Bot to Your Discord Server
In the Developer Portal, click OAuth2 → URL Generator

Under Scopes, check:

bot

Under Bot Permissions, check:

Read Messages/View Channels
Send Messages
Read Message History




Copy the generated URL at the bottom

Paste it into your browser

Choose your server → click Authorize

You should now see your bot in the member list of your server (probably offline for now).

🧩 Step 8 — Run the Bot
Back in your terminal, inside the discord-sample-bot folder, run:

node index.js

If everything is set up correctly, you should see:

✅ Logged in as SampleExerciseBot#1234
Your bot is now online.

🧩 Step 9 — Test the Command
In your Discord server, go to a text channel where the bot has access and type:

!hello
If everything is working, the bot should respond with:


Hello <your username>! 👋
