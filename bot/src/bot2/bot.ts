import { Client } from '@typeit/discord';
import { DISCORD_BOT_TOKEN_US_WEST } from './config';

export async function startDiscordApp() {
    us_west()
}

async function us_west() {
    const time_zone_us_west_client = new Client({
        classes: [
            `${__dirname}/*.ts`, // glob string to load the classes
            `${__dirname}/*.js` // If you compile your bot, the file extension will be .js
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });

    await time_zone_us_west_client.login(DISCORD_BOT_TOKEN_US_WEST!)

    await time_zone_us_west_client.user!.setPresence({
        status: "online",
        activity: {
            name: `US-West`,
            type: "PLAYING"
        }
    })
}