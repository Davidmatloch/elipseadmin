# elipseadmin

## Setup

Create or update the `.env` file in the project root.

Discord values go in `.env` like this:

```env
DISCORD_BOT_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
DISCORD_GUILD_ID=your_guild_id
```

The app also accepts `API_TOKEN` or `BOT_TOKEN` for the bot token, but `DISCORD_BOT_TOKEN` is the clearest name to use.

`.env.example` is only the template. Keep real secrets in `.env`.