import { Client } from '@typeit/discord';
import { DISCORD_BOT_TOKEN_UK_LONDEN } from './config';

export async function startDiscordApp() {
    uk_london()
}

async function uk_london() {
    const time_zone_london_client = new Client({
        classes: [
            `${__dirname}/*.ts`, // glob string to load the classes
            `${__dirname}/*.js` // If you compile your bot, the file extension will be .js
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });

    await time_zone_london_client.login(DISCORD_BOT_TOKEN_UK_LONDEN!)

    await time_zone_london_client.user!.setPresence({
        status: "online",
        activity: {
            name: `UK-Londen`,
            type: "PLAYING"
        }
    })
}