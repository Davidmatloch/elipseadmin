require("dotenv").config();

const http = require("http");
const { Client, GatewayIntentBits } = require("discord.js");

const port = Number(process.env.PORT) || 3000;
const token = process.env.DISCORD_BOT_TOKEN || process.env.BOT_TOKEN || process.env.API_TOKEN;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json; charset=utf-8");
	res.end(JSON.stringify({ ok: true, botReady: client.isReady() }));
});

server.listen(port, () => {
	console.log(`health server listening on ${port}`);
});

if (!token) {
	console.error("Missing bot token. Set DISCORD_BOT_TOKEN, BOT_TOKEN, or API_TOKEN in .env / Railway variables.");
	process.exit(1);
}

const client = new Client({
	intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
	console.log(`Discord bot online as ${client.user.tag}`);
});

client.on("error", (error) => {
	console.error("Discord client error:", error);
});

client.login(token).catch((error) => {
	console.error("Failed to login to Discord:", error.message);
	process.exit(1);
});
