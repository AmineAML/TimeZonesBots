import { Client } from '@typeit/discord';
import { DISCORD_BOT_TOKEN_US_EAST } from './config';

export async function startDiscordApp() {
    us_east()
}

async function us_east() {
    const time_zone_us_east_client = new Client({
        classes: [
            `${__dirname}/*.ts`, // glob string to load the classes
            `${__dirname}/*.js` // If you compile your bot, the file extension will be .js
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });

    await time_zone_us_east_client.login(DISCORD_BOT_TOKEN_US_EAST!)

    await time_zone_us_east_client.user!.setPresence({
        status: "online",
        activity: {
            name: `US-East`,
            type: "PLAYING"
        }
    })
}